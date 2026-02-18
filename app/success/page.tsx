import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>Success Page</h1>
      <p>Thank you for your purchase!</p>
      <Link href="/">Home</Link>
    </main>
  );
}