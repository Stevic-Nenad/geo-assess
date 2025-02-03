import {ReactNode, useState} from "react";
import {MovieSort} from "../components/complex/moviecontainer/MovieContainer.props.ts";
import { MovieContext } from "./Movie.context.tsx";

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState("");
  const [movieSort, setMovieSort] = useState<MovieSort>(MovieSort.NONE);

  const toggleSort = () => {
    setMovieSort(current => {
      switch (current) {
        case MovieSort.NONE: return MovieSort.ASC;
        case MovieSort.ASC: return MovieSort.DESC;
        case MovieSort.DESC: return MovieSort.NONE;
      }
    });
  };

  return (
    <MovieContext.Provider value={{
      searchText,
      setSearchText,
      movieSort,
      toggleSort
    }}>
      {children}
    </MovieContext.Provider>
  );
};
