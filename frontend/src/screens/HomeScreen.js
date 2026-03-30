import React, { useEffect, useState, useCallback, useMemo } from "react";
import { View, Text, FlatList, Button, StyleSheet, TextInput } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import styles from "../styles/styles";
import { getPeople } from "../servers/peopleCrud";
import { CardPersonal } from "../components/cardPersonal";

export default function HomeScreen({ navigation }){
    const [people, setPeople] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    async function loadPeople() {
        try {
            const data = await getPeople();
            setPeople(data);
        } catch (error) {
            console.error("Error loading people:", error);
        }
    }

    const filteredPeople = useMemo(() => {
        if (!searchQuery.trim()) return people; 

        let filtered = []

        for (const person of people) {
            const name = person.firstName?.toLowerCase() + " " + person.lastName?.toLowerCase() || '';

            console.log()

            if (!name.includes(searchQuery.toLowerCase())) { continue }

            filtered.push(person)
        }

        return filtered

      }, [people, searchQuery]);

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

            <View style={ {height: 20} }></View>

            <TextInput
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.input}
                    placeholder="Pesquise..."
            />

            <FlatList
                data={filteredPeople}
                keyExtractor={(item) => item.id.toString()} // Key used in react's code to keep track of list items
                renderItem={({ item }) => (
                    <CardPersonal
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
            />
        </View>
    );
}
