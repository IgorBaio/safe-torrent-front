import api from "../Services/api";
import { useIsLoading } from "../stores/Loading";
import { useShow } from "../stores/Show";

export const getShow = async () => {
  try {

    //TODO fazer um showRequest
    const url = useShow.getState().showRequest.url
    let urlComplement = `magnet?url=${url}`;


    const { data } = await api.get(urlComplement);
    console.log("data", data);

    useIsLoading.getState().setIsLoading({
        isLoading: false
    })

    console.log('data', data)
    return data;
  } catch (error) {}
};
