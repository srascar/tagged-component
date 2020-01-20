import React from "react";
import { COLORS } from "./styles/theme";

const defaultConfig = {
  "container-classes": "col-12",
  "img-position": "middle",
  "title-component": "h2",
  "content-color": COLORS.black,
  "content-background-color": COLORS.white,
  "text-position": "left"
};

export default function DefaultTextImage({ title, image, text, config = {} }) {
  const conf = { ...defaultConfig, ...config };
  const imageRender = (image, position) =>
    image && (
      <div
        className={`default-image default-image-${position} ${
          position === "left" || position === "right" ? "col-6" : "col-12"
        }`}
      >
        <img src={image.url} title={image.title} alt={image.alt} />
      </div>
    );
  const containerClasses = conf["container-classes"];
  const imgPosition = conf["img-position"];
  const TitleComponent = conf["title-component"];
  const contentStyle = {
    color: conf["content-color"],
    textAlign: conf["text-position"]
  };
  const mainStyle = {
    backgroundColor: conf["content-background-color"]
  };

  return imgPosition === "left" || imgPosition === "right" ? (
    <div className={`default-container ${containerClasses}`} style={mainStyle}>
      <div className="row">
        {imageRender(image, imgPosition)}
        <div className="default-content col-6" style={contentStyle}>
          {title && (
            <TitleComponent className="default-title">{title}</TitleComponent>
          )}
          {text && (
            <div
              className="default-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className={`default-container ${containerClasses}`} style={mainStyle}>
      <div className="row default-content" style={contentStyle}>
        {title && (
          <TitleComponent className="default-title col-12">
            {title}
          </TitleComponent>
        )}
        {imageRender(image, imgPosition)}
        {text && (
          <div
            className="default-text col-12"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>
    </div>
  );
}
