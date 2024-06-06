import {WeatherCondition} from "@/entities/weatherCondition";

export type Current = {
    temp_c: number;
    temp_f: number;
    is_day: number;
    last_updated: string;
    condition: WeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
};