import { sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const purchases = pgTable("purchases", {
    id: serial("id").primaryKey().default(sql`gen_random_uuid()`),
    productId: text("product_id").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
