import React, { useState } from "react";

export default function FeelsLike(props) {
  let fahreinheit = (props.celsius * 9) / 5 + 32;
  return (
    <span>
      {Math.round(props.celsius)}ºC | {Math.round(fahreinheit)}ºF
    </span>
  );
}
