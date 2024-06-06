import {StyleSheet, View, Text, Animated} from 'react-native';
import SearchComponent from "@/components/SearchComponent";
import {useEffect, useState} from "react";
import ScrollView = Animated.ScrollView;
import {getCurrentWeatherAsync} from "@/api/weatherApi";
import {GetCurrentWeatherResponse} from "@/api/getCurrentWeatherResponse";
import {LoadingComponent} from "@/components/LoadingComponent";


export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [weather, setWeather] = useState<GetCurrentWeatherResponse | null>(null);
    useEffect(() => {
        setIsLoading(true);
        getCurrentWeatherAsync("auto:ip").then((w) => setWeather(w));
        setIsLoading(false);
    }, [])

    const handleSearchWeather = async (query: string) => {
        try {
            setIsLoading(true);
            const weatherData = await getCurrentWeatherAsync(query);
            if (weatherData) {
                setWeather(weatherData);
            } else {
                alert('No data!');
            }
            setIsLoading(false);
        } catch (error) {
            alert(error);
        }
    };


    return (
        <ScrollView className={" p-2"}>
            <SearchComponent placeholder={"Введите город"} onSearch={handleSearchWeather}/>

            {isLoading ?
                (<LoadingComponent/>)
                :
                (<View className={""}>
                    <Text className={"text-center text-2xl uppercase text-red-500 font-black"}>
                        {weather?.location.name}
                    </Text>
                    <Text className={"text-center text-2xl uppercase text-white font-black"}>
                        {`${weather?.location.country}, ${weather?.location.region}`}
                    </Text>
                    <Text className={"text-center text-xl text-gray-400"}>
                        {`${weather?.location.localtime}`}
                    </Text>
                    <Text className={"text-center text-8xl text-red-500 font-black"}>
                        {weather?.current.temp_c} {'°C'}
                    </Text>
                    <Text className={"text-center text-2xl text-gray-400"}>
                        {`(Feels like ${weather?.current.feelslike_c})`}
                    </Text>
                    <Text className={"text-center text-2xl uppercase text-white font-black"}>
                        {weather?.current.condition.text}
                    </Text>

                </View>)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
