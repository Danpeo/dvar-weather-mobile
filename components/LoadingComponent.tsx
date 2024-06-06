import {ActivityIndicator, Text, View} from "react-native";

export const LoadingComponent = () => {
    return (<View className={"flex-1 justify-center content-center"}>
        <ActivityIndicator size={"large"}/>
        <Text className={"text-center text-2xl text-red-500"}>
            Loading...
        </Text>
    </View>);
}