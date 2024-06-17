import Countries from "@/components/card/Countries";
import { CountriesSkeleton } from "@/components/loader/CountryLoader";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import SearchBar from "@/components/search/SearchBar";
import { getCountries } from "@/libs/actions/country.actions";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const countries = await getCountries(query);
  if (countries.length === 0) {
    return <div>Failed to fetch countries</div>;
  }
  return (
    <main className=" px-12 pt-3">
      <Suspense fallback={<CountriesSkeleton />}>
        <SearchBar />
        <Countries countries={countries} />
      </Suspense>
      <ScrollToTop />
    </main>
  );
}
