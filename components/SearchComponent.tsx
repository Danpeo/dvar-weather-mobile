import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View} from 'react-native';

type SearchBarComponentProps = {
    placeholder: string
    onSearch: (searchText: string) => void;
};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = ({placeholder, onSearch}) => {
    const [search, setSearch] = useState("");
    const handleKeyPress = () => {
        onSearch(search);
    };

    const updateSearch = (searchText: string) => {
        setSearch(searchText);
    };

    return (
        <View className={"mt-8 mb-8"}>
            <SearchBar
                placeholder={placeholder}
                onChangeText={updateSearch}
                onSubmitEditing={handleKeyPress}
                value={search}
            />
        </View>
    );
};


export default SwitchComponent;