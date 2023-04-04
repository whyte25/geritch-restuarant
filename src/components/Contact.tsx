import { IKImage } from "imagekitio-react";
import { uRLEndpoint } from "../context/UserAuthContext";
import Button from "./Button";

function Contact() {
  return (
    <div className="contact py-14 md:px-3">
      <div className="flex sm:flex-col items-center sm:space-y-14 justify-center space-x-14 md:space-x-5">
        <div className="flex ml-5 lg:ml-3  sm:items-center sm:text-center flex-col justify-center items-start space-y-4 md:space-y-3">
          <div className="mb-2 ">
            <div className="flex flex-col sm:items-center">
              <h1 className="font-serif text-deep-gray font-bold  text-xl">
                {" "}
                Contact
              </h1>
              <IKImage
                urlEndpoint={uRLEndpoint}
                path="spoon.png"
                lqip={{ active: true, quality: 20 }}
                transformation={[
                  {
                    width: "800",
                  },
                ]}
                className="w-6 mt-1 "
                alt="spoon"
              />
            </div>
            <h3 className="text-cream capitalize mt-2 font-serif font-bold text-4xl  sm:text-2xl">
              Find Us
            </h3>
          </div>
          <p className="text-sm  text-deep-gray  md:w-4/6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="space-y-5 md:space-y-2 text-sm text-deep-gray flex flex-col">
            <h4 className="text-cream capitalize mt-2 font-serif font-bold text-2xl  sm:text-2xl">
              opening ours
            </h4>
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="mb-10">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <Button>
            <a href="#menu">Know More</a>
          </Button>
        </div>

        <IKImage
          urlEndpoint={uRLEndpoint}
          path="findus.png"
          lqip={{ active: true, quality: 20 }}
          transformation={[
            {
              width: "800",
            },
          ]}
          className="w-[400px] lg:w-[300px] md:w-[200px] sm:w-[260px] md:h-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default Contact;
