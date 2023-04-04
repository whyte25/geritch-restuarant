import { uRLEndpoint } from "../context/UserAuthContext";
import { IKImage, IKContext } from "imagekitio-react";

function Award() {
  return (
    <IKContext urlEndpoint={uRLEndpoint}>
      <div className="award flex  justify-center py-20 sm:py-10">
        <div className="flex md:flex-col space-x-10  lg:space-x-5 sm:space-x-0 items-center">
          <div className="flex flex-col">
            <div className="mb-5 sm:mb-10 sm:mx-auto">
              <div className="flex flex-col ">
                <h1 className="font-serif text-deep-gray font-bold  text-xl">
                  {" "}
                  award & recognition
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
                our laurels
              </h3>
            </div>

            <div className="flex sm:flex-col sm:space-x-0 sm:space-y-5   mb-10 space-x-5">
              <div className="flex gap-5">
                <IKImage
                  path="award02.png"
                  lqip={{ active: true, quality: 20 }}
                  transformation={[
                    {
                      width: "800",
                    },
                  ]}
                  alt={"award2"}
                  className="w-20 md:w-16 sm:w-14 "
                />
                <div className=" text-deep-gray text-sm">
                  <h3 className="text-cream font-serif font-bold text-xl">
                    bib gourmond
                  </h3>
                  <p>Lorem ipsum dolor sit </p>
                  <p>amet, consectetur.</p>
                </div>
              </div>
              <div className="flex space-x-5">
                <IKImage
                  path="award01.png"
                  lqip={{ active: true, quality: 20 }}
                  transformation={[
                    {
                      width: "800",
                    },
                  ]}
                  alt={"award1"}
                  className="w-20 md:w-16 sm:w-14"
                />
                <div className=" text-deep-gray text-sm">
                  <h3 className="text-cream font-serif font-bold text-xl">
                    Outstanding Chef
                  </h3>
                  <p>Lorem ipsum dolor sit </p>
                  <p>amet, consectetur.</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-5 sm:flex-col sm:space-x-0 sm:space-y-5 ">
              <div className="flex gap-5">
                <IKImage
                  path="award05.png"
                  lqip={{ active: true, quality: 20 }}
                  transformation={[
                    {
                      width: "1000",
                    },
                  ]}
                  alt={"award5"}
                  className="w-20 md:w-16 sm:w-14"
                />
                <div className=" text-deep-gray text-sm">
                  <h3 className="text-cream font-serif font-bold text-xl">
                    Rising Star
                  </h3>
                  <p>Lorem ipsum dolor sit </p>
                  <p>amet, consectetur.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <IKImage
                  path="award03.png"
                  lqip={{ active: true, quality: 20 }}
                  transformation={[
                    {
                      width: "800",
                    },
                  ]}
                  alt={"award3"}
                  className="w-20 md:w-16 sm:w-14"
                />
                <div className=" text-deep-gray text-sm">
                  <h3 className="text-cream font-serif font-bold text-xl">
                    AA Hospitality
                  </h3>
                  <p>Lorem ipsum dolor sit </p>
                  <p>amet, consectetur.</p>
                </div>
              </div>
            </div>
          </div>
          <IKImage
            path="laurels.png"
            lqip={{ active: true, quality: 20 }}
            transformation={[
              {
                width: "800",
              },
            ]}
            alt="laurels"
            className="w-[400px]   lg:w-[300px] md:mt-24  sm:w-[250px]"
          />
        </div>
      </div>
    </IKContext>
  );
}

export default Award;
