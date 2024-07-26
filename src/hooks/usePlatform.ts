import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => id === p.id);
};

export default usePlatform;
