import {createContext, useContext} from "react";
import MovieContextType from "./Movie.type.ts";

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within MovieContext');
  }
  return context;
};
