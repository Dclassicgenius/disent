import Countries from "@/components/card/Countries";
import { getCountries } from "@/libs/actions/country.actions";

export default async function Home() {
  const countries = await getCountries();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-4">
      <Countries countries={countries} />
    </main>
  );
}
