import { useQuery } from "@tanstack/react-query";
import { Platform } from "../services/platformService";
import platformService from "../services/platformService";

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
