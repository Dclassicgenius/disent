type CountryAPIResponse = {
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  cca2: string;
  cca3: string;
  capital: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  latlng: [number, number];
  population: number;
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
  borders: string[];
  area: number;
  flags: {
    png: string;
    svg: string;
  };
  timezones: string[];
};
