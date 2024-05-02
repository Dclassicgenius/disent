import Image from "next/image";
import Link from "next/link";

function CountryCard() {
  return (
    <div className="bg-slate-800 p-4 rounded-lg space-y-3 hover:transform hover:scale-105 hover:transition hover:duration-300">
      <Link href="#" className="space-y-3 text-lg">
        <div>
          <Image
            src="https://flagcdn.com/de.svg"
            alt="image"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <p className="font-semibold">
          name: <span className="font-bold">Germany</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-bold">London</span>
        </p>
        <p className="font-semibold">
          Region(s): <span className="font-bold">Europe</span>
        </p>
        <p className="font-semibold">
          Population: <span className="font-bold">10000000</span>
        </p>
      </Link>
    </div>
  );
}

const Countries = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {[...Array(10)].map((_, i) => (
        <CountryCard key={i} />
      ))}
    </div>
  );
};

export default Countries;
