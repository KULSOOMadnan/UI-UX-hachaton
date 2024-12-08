import React from "react";

import { productImages } from "./Data";
import images from "../public/assests/livingsofa.jpeg";
import Image from "next/image";

function ProductImages({ items }: { items: any | undefined }) {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex md:flex-row justify-between gap-4 mt-8 ">
        {productImages.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative mt-8 gap-4 cursor-pointer "
            key={item.id}
          >
            <Image
              src={item.img}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default ProductImages;
