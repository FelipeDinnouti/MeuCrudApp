import { styles } from "../styles/styles";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { UserCheck, ArrowLeft } from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createPerson, getPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params || {};

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState(new Date().toISOString());

    const isEditing = !!id;

    useEffect(() => {
        async function loadPersonData() {
            if (id) {
                try {
                    const personData = await getPerson(id);
                    setFirstName(personData.firstName || "");
                    setLastName(personData.lastName || "");
                    setEmail(personData.email || "");
                    setPhone(personData.phone || "");
                    setBirthDate(personData.birthDate || new Date().toISOString());
                } catch (error) {
                    console.error("Error loading person:", error);
                    Alert.alert("Erro", "Não foi possível carregar os dados da pessoa.");
                }
            }
        }
        loadPersonData();
    }, [id]);

    async function SavePerson() {
        const personData = {
            firstName,
            lastName,
            email,
            phone,
            birthDate
        };

        try {
            if (isEditing) {
                await updatePerson(personData, id);
                Alert.alert("Sucesso", "Pessoa atualizada com sucesso!");
            } else {
                await createPerson(personData);
                Alert.alert("Sucesso", "Pessoa cadastrada com sucesso!");
            }
            navigation.goBack();
        } catch (error) {
            console.error("Error saving person:", error);
            Alert.alert("Erro", "Ocorreu um erro ao salvar os dados.");
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 10 }}>
                    <ArrowLeft size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>{ isEditing ? "Edição de cadastro" : "Cadastro de pessoa" }</Text>
            </View>

            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.input}
                        placeholder="Ex: João"
                    />
                </View>

                <View>
                    <Text style={styles.label}>Sobrenome: </Text>
                    <TextInput
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.input}
                        placeholder="Ex: Silva"
                    />
                </View>

                <View>
                    <Text style={styles.label}>E-mail: </Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="Ex: joao@email.com"
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <Text style={styles.label}>Telefone: </Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                        placeholder="Ex: 11999999999"
                        keyboardType="phone-pad"
                    />
                </View>

                <View>
                    <Text style={styles.label}>Data de nascimento: </Text>
                    <TextInput
                        value={birthDate}
                        onChangeText={setBirthDate}
                        style={styles.input}
                        placeholder="AAAA-MM-DD"
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={SavePerson}>
                    <Text style={styles.buttonText}>Salvar</Text>
                    <UserCheck size={16} color="#fff" strokeWidth={3} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
