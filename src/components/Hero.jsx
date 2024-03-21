import React from "react";
import { Carousel } from "antd";

const Hero = () => {
  return (
    <div className="mx-auto p-4 bg-white">
      <Carousel autoplay>
        {[
          "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
