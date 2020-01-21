import HeroTextImage from "../components/HeroTextImage";
import DefaultTextImage from "../components/DefaultTextImage";
import { COLORS } from "../components/styles/theme";
import "../components/styles/main.css";

export const modifiers = {
  "2_col": { "container-classes": "col-md-6 col-sm-12 col-xs-12" },
  "3_col": { "container-classes": "col-md-4 col-sm-6 col-xs-12" },
  "/^img_(top|middle|bottom|left|right)$/": modifier => ({
    "img-position": modifier.replace("img_", "")
  }),
  "/h([1-5])/": modifier => ({ "title-component": modifier }),
  "/^color_(black|blue|grey|white)$/": modifier => ({
    "content-color": COLORS[modifier.replace("color_", "")]
  }),
  "/^background_color_(black|blue|grey|light_grey|white)$/": modifier => ({
    "content-background-color":
      COLORS[modifier.replace("background_color_", "")]
  }),
  "/^text_(left|center)$/": modifier => ({
    "text-position": modifier.replace("text_", "")
  }),
  "/^(half|full)_screen_height$/": modifier => ({
    "main-height":
      modifier.replace("_screen_height", "") === "half" ? "50vh" : "100vh"
  })
};

export const components = {
  default: DefaultTextImage,
  hero: HeroTextImage
};
