import React from "react";
import { COLORS } from "./styles/theme";

const defaultConfig = {
  "title-component": "h1",
  "content-color": COLORS.white,
  "text-position": "left",
  "main-height": "auto"
};

export default function HeroTextImage({ title, image, text, config = {} }) {
  const conf = { ...defaultConfig, ...config };
  const TitleComponent = conf["title-component"];
  const color = conf["content-color"];
  const textPosition = conf["text-position"];
  const backgroundHeight = conf["main-height"];

  return (
    <>
      <div className="hero-container col-12">
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={image.url} alt={image.alt} />}
        <div
          className="hero-backgroung row"
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color,
            height: backgroundHeight,
            justifyContent: textPosition === "center" ? "center" : "flex-start"
          }}
        >
          <div
            className="hero-content col-6"
            style={{
              textAlign: textPosition === "center" ? "center" : "inherit"
            }}
          >
            {title && (
              <TitleComponent className="hero-title">{title}</TitleComponent>
            )}
            {text && (
              <div
                className="hero-text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
