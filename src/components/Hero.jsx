import React from "react";
import { Carousel } from "antd";

const Hero = () => {
  return (
    <div className="mx-auto p-4 bg-white">
      <Carousel autoplay>
        {[
          "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/751798/pexels-photo-751798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/751798/pexels-photo-751798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6158517/pexels-photo-6158517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          
        ].map((imageSrc, index) => (
          <div key={index}>
            <img
              className="w-full h-[500px] md:h-[550px] sm:h-[350px] object-cover rounded-md"
              src={imageSrc}
              alt={`/image-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
