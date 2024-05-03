import { CountryAPIResponse, SimpleCountryAPIResponse } from "@/type";

export async function getCountries(): Promise<SimpleCountryAPIResponse[] | []> {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,cca3,region,population,capital"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }

    return res.json() as unknown as SimpleCountryAPIResponse[];
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

export async function getCountryByCode(
  code: string
): Promise<CountryAPIResponse[] | []> {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

    if (!res.ok) {
      throw new Error("Failed to fetch country details");
    }

    return res.json() as unknown as CountryAPIResponse[];
  } catch (error) {
    console.error(`Error fetching country details with code ${code}:`, error);
    return [];
  }
}
