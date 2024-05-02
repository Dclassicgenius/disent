import Countries from "@/components/card/Countries";
import CountryDetails from "@/components/detail/CountryDetails";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-4">
      <CountryDetails />
      <Countries />
    </main>
  );
}
