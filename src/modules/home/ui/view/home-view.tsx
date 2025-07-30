import CategoriesSection from "../sections/categories-section";

interface IProps{
    categoryId?:string;
}
const HomeView = ({categoryId}:IProps) => {
  console.log(categoryId)
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
        <CategoriesSection />
    </div>
  )
}

export default HomeView