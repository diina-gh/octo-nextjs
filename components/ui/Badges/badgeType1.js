import React, { useRef, useState } from "react";

export default function BadgeType1(props) {

  return (
    <div className="sm:text-4xl md:text-6xl tracking-tight font-semibold gt-text-gradient">{props.text}</div>
  );
}
