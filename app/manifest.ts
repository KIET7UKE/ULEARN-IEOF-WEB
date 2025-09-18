import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IEOF - International English Olympiad Foundation",
    short_name: "IEOF",
    description:
      "Join India's first offline International English Olympiad Foundation (IEOF). Global English Olympiad (GEO) for Grades 1-10 with cash prizes and Dubai trips.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#dc2626",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    categories: ["education", "olympiad", "competition"],
    lang: "en-IN",
    orientation: "portrait",
  };
}
