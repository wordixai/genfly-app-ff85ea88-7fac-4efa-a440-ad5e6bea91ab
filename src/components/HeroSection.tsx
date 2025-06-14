import { ChevronDown } from "lucide-react";
import CreateProjectEditor from "./CreateProjectEditor";

const HeroSection = () => {
  return (
    <div className="flex h-[calc(100vh-440px)] max-h-[800px] min-h-[600px] w-full flex-col items-center justify-center px-5">
      <div className="mx-auto mt-10 mb-6 max-w-screen-lg px-4 text-center sm:mt-16 sm:mb-8 md:mt-20 md:mb-10">
        <h1 className="text-[36px] text-black/95 md:text-[48px]">Not YouTube, it's YouWare.</h1>
        <h2 className="mx-auto max-w-[300px] px-2 text-[14px] text-black/65 sm:max-w-none">
          <span className="font-bold">Finally, </span>your computer speaks{" "}
          <span className="font-bold italic">your language.</span>
        </h2>
      </div>
      
      <CreateProjectEditor />
      
      <div className="w-full">
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <div className="animate-bounce">
            <ChevronDown className="text-[#1e1e1e] h-6 w-6" />
          </div>
          <h2 className="mt-4 mb-4 text-center text-[24px] text-black/95">Trending Projects</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;