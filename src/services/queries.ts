import { useQuery } from "@tanstack/react-query";
import { getBarang } from "./api";

export function useBarangs() {
    return useQuery({
        queryKey: ["barangs"],
        queryFn: getBarang
    })
}