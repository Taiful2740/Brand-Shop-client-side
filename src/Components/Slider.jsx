import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://avantisport.com/media/catalog/category/Reebok_banner_1.jpg",
    // caption: "Slide 1",
  },
  {
    url: "https://thumbs.dreamstime.com/b/tyumen-russia-january-running-orange-sneakers-adidas-multinational-company-collage-banner-wide-panorama-shoes-color-photo-269506671.jpg",
    // caption: "Slide 2",
  },
  {
    url: "https://theloungekwt.com/pub/media/codazon_cache/brand/1200x/wysiwyg/codazon/Brand/banner-cover_puma.jpg",
    // caption: "Slide 3",
  },
  {
    url: "https://qualitance.com/wp-content/uploads/2019/01/nike-brand-greatness.jpg",
    // caption: "Slide 4",
  },
  {
    url: "https://static.dw.com/image/52092142_6.jpg",
    // caption: "Slide 5",
  },
  {
    url: "https://fivmagazine.com/wp-content/uploads/2018/08/Gucci-mode-luxus-high-fashion-taschen-schuhe-marke-rot-gr%C3%BCn.jpg",
    // caption: "Slide 6",
  },
];

const Slider = () => {
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
