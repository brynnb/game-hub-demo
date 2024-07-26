import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();

  if (genres) return genres.results.find((g) => g.id === id);
};

export default useGenre;
