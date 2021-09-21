import React from "react";
import photos from ".././data";
import "./style.scss";

export default function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>Lily</h6>
        <img src={secondUrl} data-scroll />
      </div>
    </section>
  );
}
