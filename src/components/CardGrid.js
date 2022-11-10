import React, { useState } from "react";
import { data } from "./DataCard";
import { CardComponent } from "./CardComponent";

export function CardGrid() {
  return (
    <>
      <div className="card-container">
        {data.map((element) => (
          <CardComponent
            key={element.id}
            Image={element.image}
            Name={element.name}
            text={element.text}
          />
        ))}
      </div>
    </>
  );
}
