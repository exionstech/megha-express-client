import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

interface GridProps {
  name: string;
  imageUrl: string;
  des: string;
  imageHeight: number;
  imageWidth: number;
}

const Grid = ({ name, imageUrl, des, imageHeight, imageWidth }: GridProps) => {
  return (
    <Card className="overflow-hidden flex flex-col gap-5">
      <div className="aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
          objectFit="cover"
          className="shrink-0 select-none pointer-events-none"
        />
      </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-darkBlue">{name}</h3>
          <p className="text-base text-customBlack/70">{des}</p>
        </div>
    </Card>
  );
};

export default Grid;
