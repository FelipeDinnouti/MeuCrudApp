import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import styles from "../styles/styles";
import { getPeople } from "../servers/peopleCrud";
import { CardPersonal } from "../components/cardPersonal";

export default function HomeScreen({ navigation }){
    const [people, setPeople] = useState([]);

    async function loadPeople() {
        try {
            const data = await getPeople();
            setPeople(data);
        } catch (error) {
            console.error("Error loading people:", error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            loadPeople();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pessoas</Text>

            <Button 
                title="Adicionar Pessoa"
                onPress={() => navigation.navigate("AddEditScreen")}
            />

            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardPersonal 
                        item={item}
                        navigation={navigation}
                        Refresh={loadPeople}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
            />
        </View>
    );
}
