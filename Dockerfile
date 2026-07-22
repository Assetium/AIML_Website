# # Use official Node.js image
# FROM node:20-alpine

# # Set working directory
# WORKDIR /app

# # Copy only package files first
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the app
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # Expose port and start the app
# EXPOSE 3000

# CMD ["npm", "run", "dev"]



# ============================================
# 1. Dependencies Stage - Install only production dependencies
# ============================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install production dependencies only
RUN npm ci --only=production --ignore-scripts && \
    npm cache clean --force

# ============================================
# 2. Builder Stage - Build the Next.js app
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json* ./

# Install all dependencies (including dev) for build
RUN npm ci --ignore-scripts

# Copy source code
COPY . .

# Set environment to production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build Next.js app with standalone output
RUN npm run build

# ============================================
# 3. Runner Stage - Minimal production image
# ============================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the app
CMD ["node", "server.js"]