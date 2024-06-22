import api from "../Services/api";
import { useIsLoading } from "../stores/Loading";
import { useShow } from "../stores/Show";
import { CatalogRequestType } from "./types";

export const getCatalog = async ({ page, search }: CatalogRequestType) => {
  try {
    let urlComplement = `catalog?page=${page}`;

    if (!!search) urlComplement += `&search=${search}`;

    const { data } = await api.get(urlComplement);
    console.log("data", data);

    useIsLoading.getState().setIsLoading({
        isLoading: false
    })

    return data;
  } catch (error) {}
};
