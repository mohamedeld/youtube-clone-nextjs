import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const users = pgTable("users",{
    id:uuid("id").primaryKey().defaultRandom(),
    name:text("name").notNull(),
    imageUrl:text("image_url").notNull(),
    email: text("email").notNull().unique(), // <-- Add this line
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull(),
})