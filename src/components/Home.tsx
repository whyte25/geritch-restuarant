import Navbar from "./Navbar";
import spoon from "../assets/spoon.svg";
import image from "../assets/welcome.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Menu from "../pages/menu/Menu";
import About from "./About";
import Cocktail from "./Cocktail";
import Video from "./Video";
import Chef from "./Chef";
import Award from "./Award";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { IKImage } from "imagekitio-react";
import { uRLEndpoint } from "../context/UserAuthContext";

function Home() {
  return (
    <>
      <section className=" pb-16">
        <div className="flex items-center sm:flex-col sm:space-y-16 justify-around sm:justify-between my-20 sm:my-10">
          <div className="flex flex-col items-start sm:w-5/6  w-[30%] lg:w-[40%] justify-between">
            <div className="flex flex-col">
              <h5 className="font-serif  text-white capitalize font-bold text-normal">
                {" "}
                chase the new flavor
              </h5>
              <IKImage
                urlEndpoint={uRLEndpoint}
                path="spoon.png"
                lqip={{ active: true, quality: 20 }}
                transformation={[
                  {
                    width: "800",
                  },
                ]}
                className="w-6 mt-1"
                alt="spoon"
              />
            </div>
            <h3 className="font-serif text-cream font-bold  text-7xl lg:text-4xl leading-[5.5rem] capitalize">
              the key to fine dining
            </h3>
            <p className="text-sm   text-deep-gray my-4">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>
            <Button>
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </div>
          <IKImage
            urlEndpoint={uRLEndpoint}
            path="welcome.png"
            transformation={[
              {
                width: "800",
              },
            ]}
            alt="khloe"
            className="w-2/6 sm:w-[80%] object-cover"
          />
        </div>
      </section>
      <Menu />
      <About />
      <Cocktail />
      <Chef />
      <Video />
      <Award />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;
