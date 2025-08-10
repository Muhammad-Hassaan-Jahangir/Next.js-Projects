import CustomNavbar from "@/components/CustomNavbar";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";

export const metadata = {
  title: "Home : Work Manager",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      

      {/* Page content */}
      <main className="flex-grow">
        <BannerSection />
        <FeatureSection />
      </main>
    </div>
  );
}

