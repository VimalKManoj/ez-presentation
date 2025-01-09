import Banner from "@/components/Banner";
import BrandStory from "@/components/BrandStory";
import Marque from "@/components/Marque";
import Products from "@/components/Products";
import TargetAudience from "@/components/TargetAudience";
import Video from "@/components/Video";
import WhyUsBackedBy from "@/components/WhyUsBackedBy";

export default function Home() {
  return (
    <div className=" flex flex-col justify-centert items-center select-none md:select-auto">
      <Banner />
      <BrandStory />
      <TargetAudience />
      <Video />
      <Products />
      <WhyUsBackedBy />
      <Marque />
    </div>
  );
}
