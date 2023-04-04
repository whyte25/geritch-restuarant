import { IKImage, IKContext } from "imagekitio-react";
import { AiOutlineInstagram } from "react-icons/ai";
import { uRLEndpoint } from "../context/UserAuthContext";
import Button from "./Button";

function Gallery() {
  return (
    <IKContext urlEndpoint={uRLEndpoint}>
      <div className="w-full py-10 px-4 sm:p-6 sm:pb-14">
        <div className="grid grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-5 lg:gap-2.5 sm:space-y-5 ">
          <div className="flex ml-5 lg:ml-3 col-span-2  sm:col-span-1 sm:items-center sm:text-center flex-col justify-center items-start space-y-4 ">
            <div className="mb-2 ">
              <div className="flex flex-col sm:items-center">
                <h1 className="font-serif text-deep-gray font-bold  text-xl">
                  {" "}
                  Instagram
                </h1>
                <IKImage
                  path="spoon.svg"
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
              <h3 className="text-cream capitalize mt-2 font-serif font-bold text-3xl  sm:text-2xl">
                Photo Gallery
              </h3>
            </div>
            <p className="  text-sm w-5/6 sm:w-full text-deep-gray leading-loose md:leading-normal md:w-4/6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra
            </p>
            <Button>
              <a href="#menu">Know More</a>
            </Button>
          </div>
          <div className="relative sm:mx-auto group">
            <div className="absolute cursor-pointer top-0 w-full h-full hover:bg-black/60 group-hover:duration-200 hover:ease-in-out z-20">
              <div className="flex justify-center w-full  h-full items-center">
                <AiOutlineInstagram
                  style={{ width: "34px", height: "34px" }}
                  className="group-hover:block hidden"
                />
              </div>
            </div>
            <IKImage
              path="gallery01.png"
              lqip={{ active: true, quality: 20 }}
              transformation={[
                {
                  width: "800",
                },
              ]}
              alt={"gallery1"}
              className="w-[300px] md:col-span-2 h-[300px] object-cover"
            />
          </div>
          <div className="relative sm:mx-auto group">
            <div className="absolute cursor-pointer top-0 w-full h-full hover:bg-black/60 group-hover:duration-200 hover:ease-in-out z-20">
              <div className="flex justify-center w-full  h-full items-center">
                <AiOutlineInstagram
                  style={{ width: "34px", height: "34px" }}
                  className="group-hover:block hidden"
                />
              </div>
            </div>
            <IKImage
              path="gallery02.png"
              lqip={{ active: true, quality: 20 }}
              transformation={[
                {
                  width: "1800",
                },
              ]}
              alt={"gallery2"}
              className="w-[300px]  h-[300px] object-cover"
            />
          </div>
          <div className="relative sm:mx-auto group">
            <div className="absolute cursor-pointer top-0 w-full h-full hover:bg-black/60 group-hover:duration-200 hover:ease-in-out z-20">
              <div className="flex justify-center w-full  h-full items-center">
                <AiOutlineInstagram
                  style={{ width: "34px", height: "34px" }}
                  className="group-hover:block hidden"
                />
              </div>
            </div>
            <IKImage
              path="gallery03.png"
              lqip={{ active: true, quality: 20 }}
              transformation={[
                {
                  width: "1800",
                },
              ]}
              alt={"gallery3"}
              className="w-[300px]  h-[300px] object-cover"
            />
          </div>
          <div className="relative sm:mx-auto group">
            <div className="absolute cursor-pointer top-0 w-full h-full hover:bg-black/60 group-hover:duration-200 hover:ease-in-out z-20">
              <div className="flex justify-center w-full  h-full items-center">
                <AiOutlineInstagram
                  style={{ width: "34px", height: "34px" }}
                  className="group-hover:block hidden"
                />
              </div>
            </div>
            <IKImage
              path="gallery04.png"
              lqip={{ active: true, quality: 20 }}
              transformation={[
                {
                  width: "1200",
                },
              ]}
              alt={"gallery4"}
              className="w-[300px]  h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </IKContext>
  );
}

export default Gallery;
