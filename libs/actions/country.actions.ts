"use server";

import { CountryAPIResponse, SimpleCountryAPIResponse } from "@/type";

export async function getCountries(): Promise<SimpleCountryAPIResponse[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,cca3,region,population,capital"
  );

  return res.json();
}

export async function getCountryByCode(
  code: string
): Promise<CountryAPIResponse[]> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  return res.json();
}
