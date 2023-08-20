import React from "react";
import { Carousel } from "react-carousel-minimal";

const ProductCarosel = ({ data }) => {
  return (
    <div>
      <Carousel
        data={data}
        time={2000}
        width="850px"
        height="500px"
        radius="10px"
        slideNumber={false}
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  );
};

export default ProductCarosel;
