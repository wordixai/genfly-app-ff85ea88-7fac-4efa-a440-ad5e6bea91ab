import RetroBanner from "../components/RetroBanner";
import HeroSection from "../components/HeroSection";
import ProjectGallery from "../components/ProjectGallery";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <RetroBanner />
      
      <main className="flex w-full flex-1 flex-col items-center" style={{ paddingTop: "64px" }}>
        <HeroSection />
        <ProjectGallery />
      </main>
    </div>
  );
};

export default Index;