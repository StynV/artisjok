"use client";

import { InstagramEmbed } from "react-social-media-embed";

const Fotos = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <InstagramEmbed
      url="https://www.instagram.com/p/C9Fr7RSKeHo/?img_index=1"
      width={600}
    />
  </div>
);

export default Fotos;
