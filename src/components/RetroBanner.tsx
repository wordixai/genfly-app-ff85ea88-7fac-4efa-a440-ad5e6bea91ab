import { X } from "lucide-react";
import { useState } from "react";

const RetroBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 right-0 left-0 z-[40] flex h-[64px] items-center px-4 min-[840px]:h-[50px]"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80')",
        backgroundRepeat: "repeat-x",
        backgroundSize: "contain",
        backgroundColor: "#3E413C"
      }}
    >
      <div className="z-10 flex flex-1 items-center justify-between min-[840px]:justify-center">
        <div className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=40&h=40&fit=crop&crop=center" 
            alt="Retro Computer" 
            className="mr-3 flex-none rounded-full"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="text-[14px] text-white min-[840px]:text-[16px]">
            <span>YouWare Retro Challenge Results Are In. See Who Built the Coolest Retro Sites and Won Big!</span>
          </div>
        </div>
        <div className="ml-3 flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=130&h=32&fit=crop" 
            alt="Meet the Winners" 
            className="hidden h-[32px] w-[130px] hover:cursor-pointer hover:opacity-85 min-[840px]:block"
          />
          <X 
            className="ml-1 h-5 w-5 text-white hover:cursor-pointer hover:opacity-85 min-[840px]:absolute min-[840px]:right-[22px]"
            onClick={() => setIsVisible(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default RetroBanner;