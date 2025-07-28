import Himanshu1 from "../assets/Himanshu1.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full items-center mt-4">
        <div className="w-full max-w-4xl bg-stone-500 flex justify-center rounded-tl-md rounded-tr-md p-4">
          <img
            src={Himanshu1}
            alt="cutout"
            className="w-80 h-80 object-cover"
          />
        </div>
        <h1 className="text-8xl z-10 -m-14 text-white font-bold tracking-wide opacity-60 text-center">
          Himanshu Sharma
        </h1>
      </div>
  )
}

export default HeroSection
