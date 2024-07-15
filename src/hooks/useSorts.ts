import useData from "./useData";
import { Platform } from "./useGames";

const useSorts = () => useData<Platform>("/platforms/lists/parents");

export default useSorts;
