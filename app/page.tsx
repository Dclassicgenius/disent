import Countries from "@/components/card/Countries";
import { CountriesSkeleton } from "@/components/loader/CountryLoader";
import { getCountries } from "@/libs/actions/country.actions";
import { Suspense } from "react";

export default async function Home() {
  const countries = await getCountries();
  if (countries.length === 0) {
    return <div>Failed to fetch countries</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-4">
      <Suspense fallback={<CountriesSkeleton />}>
        <Countries countries={countries} />
      </Suspense>
    </main>
  );
}
