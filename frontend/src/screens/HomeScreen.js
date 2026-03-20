import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

import styles from "../styles/styles";

import { getPeople, deletePerson } from "../server/peopleCrud";

export default function HomeScreen({ navigation }){
    const [people, setPeople] = useState([]);

    async function loadPeople() {
        const data = await getPeople();
        setPeople(data);
    }

    useEffect(() => {
        loadPeople();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pessoas</Text>

            <Button 
            title = "Adicionar Pessoa"
            keyExtractor={(item)=>{
                <CardPersonal 
                    item={item}
                    navigation={navigation}
                    refresh={loadPeople}
                />
            }}
            />
        </View>
    );
}