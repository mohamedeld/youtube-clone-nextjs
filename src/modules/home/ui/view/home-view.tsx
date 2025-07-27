import CategoriesSection from "../sections/categories-section";

interface IProps{
    categoryId?:string;
}
const HomeView = ({categoryId}:IProps) => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
        <CategoriesSection categoryId={categoryId}/>
    </div>
  )
}

export default HomeView