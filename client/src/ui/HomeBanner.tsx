import { homeBanner } from "../assets";
import Container from "./Container";
import LinkButton from "./LinkButton";

export default function HomeBanner() {
  return (
    <Container className="relative  py-5   overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-10 py-5">
        <h2 className="text-xl md:text-4xl lg:text-6xl text-white font-bold">
          Mi Air Purifier
        </h2>
        <p className="text-base md:text-lg font-semibold leading-6 text-white/90 max-w-[250px] mt-4">
          The new tech gift you are wishing for right here.
        </p>
        <LinkButton className="w-44 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white duration-200 mt-4" />
      </div>
    </Container>
  );
}