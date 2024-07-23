import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import { FetchResponse } from "./useData";

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGenres;
