"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "./SearchIcon";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchString: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchString) {
      params.set("query", searchString);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 500);
  return (
    <div className="relative flex flex-1 flex-shrink-0 mb-5">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        placeholder="search country name"
        className=" peer block w-full rounded-lg py-3 pl-12 pr-4 text-sm  placeholder-slate-500  outline-none bg-slate-800 "
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
