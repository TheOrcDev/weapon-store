import { db } from "@/db/drizzle";
import { purchases } from "@/db/schema";
import { Webhook } from "@creem_io/nextjs";

export const POST = Webhook({
    webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
    onCheckoutCompleted: async ({ customer, product }) => {
        if (!customer?.email || !product?.id) {
            return;
        }

        await db.insert(purchases).values({
            email: customer.email as string,
            productId: product.id as string,
        });
    },
});