import { db } from "@/db";
import { categories } from "@/db/schema";

export const categoriesData = [
    "Cars and vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Film and animation",
    "How-to and style",
    "Music",
    "News and politics",
    "People and blogs",
    "Pets and animals",
    "Science and technology",
    "Sports",
    "Travel and events"
]

async function main(){
    try{
        const values = categoriesData?.map((name)=>({
            name,
            description:`Videos related to ${name?.toLocaleLowerCase()}`
        }))
        await db.insert(categories).values(values);
        console.log("Categoreis added successfully");
    }catch(error){
        console.log("error on seeding categories",error);
        process.exit(1);
    }
}


main()