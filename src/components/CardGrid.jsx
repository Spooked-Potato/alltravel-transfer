import React, { useState } from "react";
import { data } from "./DataCard";
import { CardComponent } from "./CardComponent";

export function CardGrid() {
  return (
    <>
      <div>
        {data.map((element) => (
          <CardComponent
            key={element.id}
            Image={element.image}
            Name={element.place}
            text={element.text}
          />
        ))}
      </div>
    </>
  );
}
