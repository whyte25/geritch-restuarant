import award1 from "../assets/award01.png";
import award2 from "../assets/award02.png";
import award3 from "../assets/award03.png";
import award4 from "../assets/award05.png";
import spoon from "../assets/spoon.png";
import laurels from "../assets/laurels.png";

function Award() {
  return (
    <div className="award flex  justify-center py-20 sm:py-10">
      <div className="flex md:flex-col space-x-10  lg:space-x-5 sm:space-x-0 items-center">
        <div className="flex flex-col">
          <div className="mb-5 sm:mb-10 sm:mx-auto">
            <div className="flex flex-col ">
              <h1 className="font-serif text-deep-gray font-bold  text-xl">
                {" "}
               award & recognition
              </h1>
              <img src={spoon} className="w-6 mt-1 " alt="spoon" />
            </div>
            <h3 className="text-cream capitalize mt-2 font-serif font-bold text-3xl  sm:text-2xl">
              our laurels
            </h3>
          </div>

          <div className="flex sm:flex-col sm:space-x-0 sm:space-y-5   mb-10 space-x-5">
            <div className="flex gap-5">
              <img src={award2} alt={award2} className='w-20 md:w-16 sm:w-14 '/>
              <div className=" text-deep-gray text-sm">
                <h3 className="text-cream font-serif font-bold text-xl">bib gourmond</h3>
                <p>Lorem ipsum dolor sit </p>
                <p>amet, consectetur.</p>
              </div>
            </div>
            <div className="flex space-x-5">
             
               <img src={award1} alt={award1} className='w-20 md:w-16 sm:w-14'/>
              <div className=" text-deep-gray text-sm">
                <h3 className="text-cream font-serif font-bold text-xl">Outstanding Chef</h3>
                <p>Lorem ipsum dolor sit </p>
                <p>amet, consectetur.</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-5 sm:flex-col sm:space-x-0 sm:space-y-5 ">
            <div className="flex gap-5">
             
               <img src={award4} alt={award4} className='w-20 md:w-16 sm:w-14'/>
              <div className=" text-deep-gray text-sm">
                <h3 className="text-cream font-serif font-bold text-xl">Rising Star</h3>
                <p>Lorem ipsum dolor sit </p>
                <p>amet, consectetur.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={award3} alt={award3} className='w-20 md:w-16 sm:w-14'/>
              <div className=" text-deep-gray text-sm">
                <h3 className="text-cream font-serif font-bold text-xl">AA Hospitality</h3>
                <p>Lorem ipsum dolor sit </p>
                <p>amet, consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={laurels} alt="laurels"  className='w-[400px]   lg:w-[300px] md:mt-24  sm:w-[250px]' />
      </div>
    </div>
  );
}

export default Award;
