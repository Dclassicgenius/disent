import Image from "next/image";

interface TableRowProps {
  label: string;
  value: string | number | boolean;
  isHighlighted?: boolean;
}

const TableRow = ({ label, value, isHighlighted }: TableRowProps) => {
  return (
    <tr className={isHighlighted ? "bg-slate-900" : ""}>
      <td className="font-semibold p-2">{label}</td>
      <td className="font-bold">{value}</td>
    </tr>
  );
};

interface TableSectionProps {
  title: string;
  data: { label: string; value: string | number | boolean }[];
}

const TableSection = ({ title, data }: TableSectionProps) => {
  return (
    <div>
      <p className="font-bold text-2xl my-3 text-center border-b">{title}</p>
      <table className="w-full">
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              label={item.label}
              value={item.value}
              isHighlighted={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const GeographicDetailsData = [
  { label: "Capital", value: "London" },
  { label: "Continent(s)", value: "Europe" },
  { label: "Region", value: "Europe" },
  { label: "Subregion", value: "Western Europe" },
  { label: "Landlocked", value: false },
  { label: "Area", value: "357,386 km²" },
  { label: "Coordinates", value: "55.5° N, 12.0° E" },
];

const DemographicAndPoliticalData = [
  { label: "Population", value: 10000000 },
  { label: "Currency", value: "Euro" },
  { label: "Timezones", value: "Western Europe" },
  { label: "Languages", value: 10000000 },
  { label: "Area", value: "357,386 km²" },
  { label: "UN Member", value: true },
];

const AdditionalInformationData = [
  { label: "Top-level Domain", value: ".de" },
  { label: "Calling Code", value: "+4" },
  { label: "Independence", value: true },
  { label: "Start of week", value: 10000000 },
  { label: "Area", value: "357,386 km²" },
];

const CountryDetails = () => {
  return (
    <div className="bg-slate-800 p-4 rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-center ">
        <p className="text-3xl font-bold">Country Details</p>
        <div>
          <Image
            src="https://mainfacts.com/media/images/coats_of_arms/de.svg"
            alt="image"
            width={250}
            height={325}
            className="rounded-lg w-24 h-24"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center">
          <Image
            src="https://flagcdn.com/de.svg"
            alt="image"
            width={200}
            height={200}
            className="rounded-lg w-48"
          />
        </div>
        <div>
          <p className="font-semibold">
            Common Name: <span className="font-bold">Germany</span>
          </p>
          <p className="font-semibold">
            Official Name: <span className="font-bold">Germany</span>
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
