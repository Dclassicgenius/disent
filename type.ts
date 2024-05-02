export type SimpleCountryAPIResponse = {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
  capital: string[];
};

export interface CountryAPIResponse extends SimpleCountryAPIResponse {
  tld: string[];
  cca2: string;
  subregion: string;
  languages: { [key: string]: string };
  latlng: [number, number];
  independent: boolean;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  area: number;
  timezones: string[];
  continents: string[];
  landlocked: boolean;
  startOfWeek: string;
  coatOfArms: {
    svg: string;
  };
}
