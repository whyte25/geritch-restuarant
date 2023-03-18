import cocktail from "../assets/menu.png";
import spoon from "../assets/spoon.png";
import Button from "./Button";
import data from "./data";

function Cocktail() {
  return (
    <div className="flex flex-col justify-center items-center w-full py-10">
      <div className="flex flex-col-reverse items-center">
        <img src={spoon} className="w-6 mt-1 " alt="spoon" />
        <h5 className="font-serif  text-white capitalize font-bold text-normal sm:text-sm">
          {" "}
          menu that fits your palatte{" "}
        </h5>
      </div>
      <h3 className="text-cream capitalize mt-3 font-serif font-bold text-5xl sm:text-2xl">
        today's special
      </h3>
      <div className="flex  my-10 justify-center md:flex-col items-center  md:space-y-14 ">
        <div className="flex flex-col ">
          <h3 className="font-serif text-xl font-semibold mb-5 text-center">
            Wine & beer
          </h3>
          {data.map((item) => (
            <div key={item.id} className="flex flex-col mb-6 ">
              <div className="flex justify-between space-x-8 items-center">
                <p className="text-cream  font-bold font-serif">{item.title}</p>
                <div className="h-[1px] w-20 bg-deep-gray"></div>
                <p className="text-sm text-deep-gray">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2 text-deep-gray text-[12px]">
                <p className="">{item.alias}</p>
                <div className="w-[1px] h-[7px] bg-deep-gray"></div>
                <p>{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={cocktail} alt={cocktail} className="w-56 mx-10" />
        <div className="flex flex-col ">
          <h3 className="font-serif text-xl font-semibold mb-5 text-center">
            coctails
          </h3>

          <div className="flex flex-col mb-6 ">
            <div className="capitalize flex justify-between space-x-8 items-center">
              <p className="text-cream font-bold font-serif">Aperol Spritz</p>
              <div className="h-[1px] w-20 bg-deep-gray"></div>
              <p className="text-sm text-deep-gray">$20</p>
            </div>
            <div className="flex items-center space-x-2 text-deep-gray text-[12px] capitalize">
              <p className="">aperol</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>villa marchesi proscesso</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>soda</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>30ml</p>
            </div>
          </div>
          <div className="flex flex-col mb-6 ">
            <div className="capitalize flex justify-between space-x-8 items-center">
              <p className="text-cream font-bold font-serif">dark 'N' stormy</p>
              <div className="h-[1px] w-20 bg-deep-gray"></div>
              <p className="text-sm text-deep-gray">$16</p>
            </div>
            <div className="flex items-center space-x-2 text-deep-gray text-[12px] capitalize">
              <p className="">dark rum</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>ginger beer</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>slice of lime</p>
            </div>
          </div>
          <div className="flex flex-col mb-6 ">
            <div className="capitalize flex justify-between space-x-8 items-center">
              <p className="text-cream font-bold font-serif">daiquiri</p>
              <div className="h-[1px] w-20 bg-deep-gray"></div>
              <p className="text-sm text-deep-gray">$10</p>
            </div>
            <div className="flex items-center space-x-2 text-deep-gray text-[12px] capitalize">
              <p className="">rum</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>citrus juice</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>sugar</p>
            </div>
          </div>
          <div className="flex flex-col mb-6 ">
            <div className="capitalize flex justify-between space-x-8 items-center">
              <p className="text-cream font-bold font-serif">old fashioned</p>
              <div className="h-[1px] w-20 bg-deep-gray"></div>
              <p className="text-sm text-deep-gray">$31</p>
            </div>
            <div className="flex items-center space-x-2 text-deep-gray text-[12px] capitalize">
              <p className="">bourbon</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>brown sugar</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>angostura bitters</p>
            </div>
          </div>
          <div className="flex flex-col mb-6 ">
            <div className="capitalize flex justify-between items-center">
              <p className="text-cream font-bold font-serif">negroni</p>
              <div className="h-[1px] w-20 justify-self-end  bg-deep-gray"></div>
              <p className="text-sm text-deep-gray">$26</p>
            </div>
            <div className="flex items-center space-x-2 text-deep-gray text-[12px] capitalize">
              <p className="">gin</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>sweet vermouth</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>camari</p>
              <div className="w-[1px] h-[7px] bg-deep-gray"></div>
              <p>orange garnish</p>
            </div>
          </div>
        </div>
      </div>
      <Button>
        <a href="#menu">Explore Menu</a>
      </Button>
    </div>
  );
}

export default Cocktail;
