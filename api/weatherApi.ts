import {GetCurrentWeatherResponse} from "@/api/getCurrentWeatherResponse";
import axios, {AxiosResponse} from "axios";
import {serverUrl} from "@/constants/server";

const apiKey = "0238369d03394013894122527240401";

export const getCurrentWeatherAsync = async (q: string, lang: string = ""): Promise<GetCurrentWeatherResponse | null> => {
    const baseUrl = `${serverUrl}/current.json?q=${q}&key=${apiKey}`;
    const fullUrl = lang ? `${baseUrl}&lang=${lang}` : baseUrl;

    const response: AxiosResponse = await axios.get(fullUrl);
    if (response.status === 204) {
        return null;
    }

    return response.data;
}