//@ts-nocheck
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider from "../../assets/slider.png";

const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full px-6 my-12 lg:w-3/4 lg:mx-auto">
      <h2 className="text-xl font-bold tracking-wide lg:text-3xl">Top News</h2>

      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((item: number) => (
          <div key={item} className="flex flex-col">
            <img src={slider} alt="slider" className="w-full px-3 pt-8 pb-4" />
            <p className="px-4 text-sm font-semibold">A Plan to Rebuild the Bus Terminal</p>
            <p className="px-4 text-sm font-semibold">Everyone Loves to Hate</p>
            <p className="px-4 py-2 text-xs text-gray-500">1h ago by Lütfullah ÇELENK</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
