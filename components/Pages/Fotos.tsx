"use client";

import { Image } from "@/models/image";
import { InstagramEmbed } from "react-social-media-embed";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";

interface props {
  fotos: Image[];
  instagramLink: string;
}

const Fotos = ({ fotos, instagramLink }: props) => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const renderCarousel = () => (
      <Carousel
        showArrows={true}
        dynamicHeight
        emulateTouch
        autoPlay
        infiniteLoop
        className="lg:w-6/12 w-full"
      >
        {fotos.map((foto) => (
          <div key={foto.id}>
            <img src={foto.url} />
          </div>
        ))}
      </Carousel>
  )

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
      {isTablet ? (
        <>
        {renderCarousel()}
        <div>
          <InstagramEmbed url={instagramLink} />
        </div>
        </>
      ) : (
        <>
        <InstagramEmbed url={instagramLink} width={600} />
        {renderCarousel()}
        </>
      )}
    </div>
  );
};

export default Fotos;
