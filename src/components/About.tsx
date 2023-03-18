import G from "../assets/G.png";
import knife from "../assets/knife.png";
import spoon from "../assets/spoon.png";
import Button from "./Button";

function About() {
  return (
    <div id="about" className="about w-full mx-auto py-10 sm:pb-15">
      <div className=" relative  flex sm:flex-col items-center sm:space-y-14 ">
        <img
          src={G}
          alt=""
          className="w-72 md:w-52  m-auto z-10 top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] sm:-translate-x-[50%]  sm:translate-y-[10%] sm:bottom-[50%]
           absolute "
        />
        <div className="flex mr-10 md:mr-5 sm:m-0 flex-col  z-20 w-3/6 sm:w-5/6 sm:items-start justify-center items-end space-y-6">
          <div className="flex flex-col items-end sm:items-start">
            <h1 className="font-serif text-cream font-bold  text-7xl lg:text-4xl">
              {" "}
              About Us
            </h1>
            <img
              src={spoon}
              className="w-6 mt-1 rotate-180 sm:rotate-0"
              alt="spoon"
            />
          </div>
          <p className=" text-end sm:text-start text-sm w-5/6 md:w-full text-deep-gray leading-loose md:leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button>
            <a href="#menu">Know More</a>
          </Button>
        </div>
        <img src={knife} alt="" className="w-[70px] z-20" />
        <div className="flex ml-10 md:ml-5 flex-col  z-20 w-3/6  sm:w-5/6 justify-center items-start space-y-6">
          <div className="flex flex-col ">
            <h1 className="font-serif text-cream font-bold  text-7xl lg:text-4xl">
              {" "}
              Our History
            </h1>
            <img src={spoon} className="w-6 mt-1 " alt="spoon" />
          </div>
          <p className=" text-start text-sm w-5/6 md:w-full text-deep-gray leading-loose md:leading-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button>
            <a href="#menu">Know More</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
