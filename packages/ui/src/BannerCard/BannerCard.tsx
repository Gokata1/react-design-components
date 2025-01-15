import React from "react";
import { Asterisk, MoveRight } from "lucide-react";

function BannerCard() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4">
        <Asterisk /> <MoveRight />
      </div>
    </div>
  );
}

export default BannerCard;
