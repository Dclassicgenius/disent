import { SimpleCountryAPIResponse } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { TableSection } from "../Table/TableSection";

function CountryCard({ country }: { country: SimpleCountryAPIResponse }) {
  const { name, capital, region, population, flags, cca3 } = country;

  const data = [
    { label: "Name", value: name.common },
    { label: "Capital", value: capital.map((c) => c).join(", ") },
    { label: "Region", value: region },
    { label: "Population", value: population.toLocaleString() },
  ];
  return (
    <div className="bg-slate-800 p-4 rounded-lg space-y-3 hover:transform hover:scale-105 hover:transition hover:duration-300">
      <Link
        href={`/country/${cca3}/${encodeURIComponent(name.common)}`}
        className="space-y-3 text-lg"
      >
        <div>
          <Image
            src={flags.svg}
            alt={flags.alt}
            width={200}
            height={200}
            className="rounded-lg w-full "
          />
        </div>

        <TableSection title="" data={data} />
      </Link>
    </div>
  );
}

const Countries = ({
  countries,
}: {
  countries: SimpleCountryAPIResponse[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default Countries;
