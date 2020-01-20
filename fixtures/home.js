export default {
  blocks: [
    {
      type: "text_image",
      settings: {
        display: "hero, text_center, half_screen_height",
        text:
          "<p>Quite regularly, \nyou want to build a simple demo with no complex setup, \nbut enough flexibility to play with and demonstrate behaviours.</p>\n<p><strong>tags:</strong> hero, text_center, half_screen_height</p>",
        image: {
          alt: "mountain",
          title: "Mountain",
          url: "/static/benjamin-voros-phIFdC6lA4E-unsplash.jpg"
        },
        title: "Need a Demo fast ?"
      }
    },
    {
      type: "text_image",
      settings: {
        display: "img_left, 2_col",
        text:
          "<p>With a small summary. \nLorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n<p><strong>tags:</strong> img_left, 2_col</p>",
        image: {
          alt: "news paper & tablet",
          title: "An article cover",
          url: "/static/matthew-guay-Q7wDdmgCBFg-unsplash.jpg"
        },
        title: "Showcasing Articles"
      }
    },
    {
      type: "text_image",
      settings: {
        display: "img_left, 2_col",
        text:
          "<p>With a list of features.</p> \n<ul>\n  <li><strong>Feature 1:</strong> it is simple</li>\n  <li><strong>Feature 2:</strong> it is flexible</li>\n  <li><strong>Feature 2:</strong> it can be extended</li>\n</ul>\n<p><strong>tags:</strong> img_left, 2_col</p>",
        image: {
          alt: "phone",
          title: "An product image",
          url: "/static/neil-soni-6wdRuK7bVTE-unsplash.jpg"
        },
        title: "Or showcasing products"
      }
    },
    {
      type: "text_image",
      settings: {
        display: "background_color_light_grey, 3_col, text_center",
        text:
          "<p>It mostly uses a grid system\nbased on cols and rows\nlike bootstrap css.</p> \n<p><strong>tags:</strong> background_color_light_grey, 3_col, text_center</p>",
        image: null,
        title: "Little css"
      }
    },
    {
      type: "text_image",
      settings: {
        display: "background_color_light_grey, 3_col, text_center",
        text:
          '<p>Templates are made using react.\nThis is also were the tags are resolved.</p>\n<p><a href="#">Some Link</a></p> \n<p><strong>tags:</strong> background_color_light_grey, 3_col, text_center</p>',
        image: null,
        title: "React templates"
      }
    },
    {
      type: "text_image",
      settings: {
        display: "background_color_light_grey, 3_col, text_center",
        text:
          "<p>The behaviour of this component is driven \nby the tags you see at the bottom.\nYou can add your own.\nBut remember, </p>\n<p>THIS COMPONENT ALONE CANNOT SOLVE ALL CASES.</p> \n<p><strong>tags:</strong> background_color_light_grey, 3_col, text_center</p>",
        image: null,
        title: "Simple to contribute"
      }
    },
    {
      type: "text_image",
      settings: {
        display: null,
        text: "<p>® A footer. <strong>tags:</strong></p>",
        image: null,
        title: null
      }
    }
  ]
};
