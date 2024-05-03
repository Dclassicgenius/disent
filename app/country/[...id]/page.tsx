import CountryDetails from "@/components/detail/CountryDetails";
import { getCountryByCode } from "@/libs/actions/country.actions";

const page = async ({ params }: { params: { id: string } }) => {
  const details = await getCountryByCode(params.id[0]);

  if (details.length === 0) {
    return <div>Country not found</div>;
  }

  return (
    <div className="p-12">
      <CountryDetails details={details.map((d) => d)[0]} />
    </div>
  );
};

export default page;
