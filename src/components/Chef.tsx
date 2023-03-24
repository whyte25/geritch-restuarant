import chef from "../assets/chef.png";
import sign from "../assets/sign.png";
import quote from "../assets/quote.png";
import spoon from "../assets/spoon.png";

function Chef() {
  return (
    <div id="chef" className="chef   py-10 sm:px-6">
      <div className="flex justify-center w-full  md:w-full md:flex-col-reverse gap-5 items-center">
        <img
          src={chef}
          alt={chef}
          className="w-[400px] lg:w-[300px] md:mt-16 "
        />
        <div className="flex flex-col max-w-sm   md:items-center  lg:w-full md:max-w-lg space-y-10 lg:space-y-4">
          <div className="flex flex-col ">
            <h1 className="font-serif text-deep-gray font-bold  text-xl">
              {" "}
              chef's word
            </h1>
            <img src={spoon} className="w-6 mt-1 " alt="spoon" />
          </div>
          <h3 className="text-cream capitalize mt-3 font-serif font-bold text-5xl lg:text-3xl sm:text-2xl">
            what we believe in
          </h3>
          <p className="indent-9  text-deep-gray  lg:5/6  md:w-full text-sm relative">
            <img
              src={quote}
              alt={quote}
              className="w-8 absolute -left-0 -top-3 "
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc. Kevin Luo Chef & Founder Kevin Luo
          </p>
          <div className="flex flex-col ">
            <h4>Kevin luo</h4>
            <p>chef & founder</p>
          </div>
          <img src={sign} alt={sign} className="w-24" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
