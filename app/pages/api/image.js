import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    console.log("Fetching resources from Cloudinary...");

    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: "WebsiteMediaPhoto",
    });

    console.log("Cloudinary Response:", resources);

    res.status(200).json(
      resources.resources.map((image) => ({
        url: image.secure_url,
        id: image.public_id,
      }))
    );
  } catch (error) {
    console.error("Cloudinary API Error:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
}
