import Image from "next/image";
import { TableSection } from "../Table/TableSection";
import { CountryAPIResponse } from "@/type";

const CountryDetails = ({ details }: { details: CountryAPIResponse }) => {
  const {
    name,
    flags,
    capital,
    region,
    subregion,
    area,
    independent,
    tld,
    currencies,
    languages,
    idd,
    landlocked,
    latlng,
    timezones,
    continents,
    population,
    unMember,
    startOfWeek,
    cca2,
    cca3,
    coatOfArms,
  } = details;
  const languageNames =
    languages && typeof languages === "object"
      ? Object.values(languages).join(", ")
      : "";

  const currencyKeys =
    currencies && typeof currencies === "object" ? Object.keys(currencies) : [];
  const hasCurrencies = currencyKeys.length > 0;

  const currencyLabel = hasCurrencies
    ? `${currencies[currencyKeys[0]].name} (${
        currencies[currencyKeys[0]].symbol
      })`
    : "";
  const GeographicDetailsData = [
    { label: "Capital", value: capital?.map((c) => c).join(", ") },
    { label: "Continent(s)", value: continents?.map((c) => c).join(", ") },
    { label: "Region", value: region },
    { label: "Subregion", value: subregion },
    { label: "Landlocked", value: landlocked },
    { label: "Area", value: `${area?.toLocaleString()} km²` },
    { label: "Coordinates", value: `[${latlng?.map((l) => l).join(", ")}]` },
  ];

  const DemographicAndPoliticalData = [
    { label: "Population", value: population?.toLocaleString() },
    {
      label: "Currency",
      value: currencyLabel,
    },
    { label: "Timezones", value: timezones?.map((t) => t).join(", ") },
    { label: "Languages", value: languageNames ?? "" },
    { label: "UN Member", value: unMember },
  ];

  const AdditionalInformationData = [
    { label: "Top-level Domain", value: tld?.map((t) => t).join(", ") },
    { label: "Calling Code", value: idd?.root },
    { label: "Independent", value: independent },
    { label: "Start of week", value: startOfWeek },
    { label: "alpha2Code", value: cca2 },
    { label: "alpha3Code", value: cca3 },
  ];

  return (
    <div className="bg-slate-800 p-4 rounded-lg flex flex-col gap-4 min-h-screen max-w-3xl p-6 mx-auto">
      <div className="flex justify-between items-center ">
        <p className="text-3xl font-bold">{name?.common}</p>
        <div>
          <Image
            src={coatOfArms?.svg}
            alt={`${name?.common} coat of arms`}
            width={250}
            height={325}
            className="rounded-lg w-24 h-24"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center">
          <Image
            src={flags?.svg}
            alt={flags?.alt}
            width={200}
            height={200}
            className="rounded-lg w-48"
          />
        </div>
        <div>
          <p className="font-semibold">
            Common Name: <span className="font-bold">{name.common}</span>
          </p>
          <p className="font-semibold">
            Official Name: <span className="font-bold">{name.official}</span>
          </p>
        </div>
      </div>

      <TableSection title="Geographic Details" data={GeographicDetailsData} />
      <TableSection
        title="Demographic and Political Information"
        data={DemographicAndPoliticalData}
      />
      <TableSection
        title="Additional Information"
        data={AdditionalInformationData}
      />
    </div>
  );
};

export default CountryDetails;
