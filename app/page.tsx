import { Button } from "@/components/ui/button";
import { CreemCheckout } from "@creem_io/nextjs";

export default function Home() {
  return (
    <main className="flex pt-24 flex-col items-center justify-between p-24 gap-10">
      <h1>Weapon Store</h1>
      <CreemCheckout checkoutPath="/api/checkout" productId="prod_7e1R5dIyUTjaMkd4uQDu5p">
        <Button>Buy Axe</Button>
      </CreemCheckout>
    </main>
  );
}
