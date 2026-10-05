import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Creators Aquarium | Professional Aquarium Care Bengaluru",
    short_name: "Creators Aquarium",
    description:
      "Premium aquarium setup, routine maintenance, and nature aquascaping across Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#8BCF32",
    icons: [
      {
        src: "/brand/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
