import Hero from "../assets/illustration-hero.svg";
import Music from "../assets/icon-music.svg";
const Card = () => {
  return (
    <div className="z-50 relative flex justify-center items-center h-dvh">
      <div className="bg-White rounded-lg text-center w-[19.188rem]">
        <div>
          <img className="h-[9.375rem] rounded-t-lg " src={Hero} alt="Hero" />
        </div>
        <div className="my-5 mx-5 ">
          <h2 className="text-DarkBlue text-xl font-black">Order Summary</h2>
          <p className="text-DesaturatedBlue text-xs">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="flex justify-between y- mx-5 bg-VeryPaleBlue puy rounded-lg py-3 px-5 mb-6">
          <div className="flex">
            <img src={Music} alt="music" className="h-9 my-auto" />
            <div className="px-5 my-auto">
              <p className="text-DarkBlue text-xs font-bold">Annual Plan</p>
              <p className="text-DesaturatedBlue text-xs font-medium">
                $59.99/year
              </p>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="#"
              className="text-BrightBlue hover:text-DesaturatedBlue font-medium text-xs underline hover:no-underline"
            >
              Change
            </a>
          </div>
        </div>
        <div className="flex flex-col mx-5 mb-5 ">
          <button className="bg-BrightBlue text-sm text-VeryPaleBlue font-bold hover:bg-DesaturatedBlue py-2.5 rounded-lg shadow-lg shadow-DesaturatedBlue my">
            Proceed to Payment
          </button>
          <button className="bg-white font-bold rounded-lg py-2.5 my-4 text-sm hover:text-DarkBlue text-DesaturatedBlue">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
