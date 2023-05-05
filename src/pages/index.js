import Banner from "../../components/module/Banner";
import Categories from "../../components/module/Categories";
import SearchSection from "../../components/module/SearchSection";
import CarsPage from "../../components/templates/CarsPage";
import carsInfo from "../../data/carsInfo";

export default function Home() {
  const carsPreview = carsInfo.slice(0, 4);
  return (
    <div>
      <Banner />
      <SearchSection />
      <Categories />
      <div className="flex justify-center">
        <CarsPage data={carsPreview} />
      </div>
      
    </div>
  )
}
