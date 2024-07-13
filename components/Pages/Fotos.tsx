"use client";

import { Image } from "@/models/image";
import { InstagramEmbed } from "react-social-media-embed";

interface props {
  fotos: Image[];
  instagramLink: string;
}

const Fotos = ({ fotos, instagramLink }: props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <InstagramEmbed url={instagramLink} width={600} />
  </div>
);

export default Fotos;
