import { createContext, useState } from "react";

export interface ISearchContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
  value: "",
  setValue: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("");

  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
};
