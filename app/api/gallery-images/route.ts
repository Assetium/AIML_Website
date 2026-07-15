import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define Cloudinary resource type
interface CloudinaryResource {
  public_id: string;
  asset_folder?: string;
  [key: string]: unknown;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 80,
    });

    const webGaImages = result.resources.filter((img: CloudinaryResource) =>
      img.asset_folder === "website_gallery"
    );

    const images = webGaImages.map((img: CloudinaryResource) => ({
      src: cloudinary.url(img.public_id, {
        transformation: [{ quality: 'auto', fetch_format: 'auto' }],
      }),
      caption: img.public_id.split('/')[1]?.replace(/_/g, ' ') || 'Gallery Image',
    }));

    const shuffledImages = shuffleArray(images);

    console.log(`✅ Loaded ${shuffledImages.length} images from web_gallery (shuffled)`);
    return NextResponse.json(shuffledImages);
  } catch (error) {
    console.error('Cloudinary error:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}