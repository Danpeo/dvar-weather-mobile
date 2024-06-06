import {Location} from "@/entities/location";
import {Current} from "@/entities/current";

export type GetCurrentWeatherResponse = {
    location: Location;
    current: Current;
}