import { Text, TouchableOpacity, View } from 'react-native'
import { deletePerson } from '../servers/peopleCrud';
import { styles } from '../styles/styles';
import { Pencil, Trash } from 'lucide-react-native';

export function CardPersonal({ item, navigation, refresh }) {
    async function Delete() {
        try {
            await deletePerson(item.id.toString());
            refresh();
        } catch (error) {
            console.error("Failed to delete person: ", error);
        }
    }
    
    return (
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {item.firstName} {item.lastName}
                </Text>

                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddEditScreen", { id: item.id })}>
                        <Pencil size={16} color="blue" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Delete()}>
                        <Trash size={16} color="red" />
                    </TouchableOpacity>
                </View>
            </View>

            <Text><Text style={styles.subtopic}>E-mail: </Text>{item.email}</Text>
            <Text><Text style={styles.subtopic}>Telefone: </Text>{item.phone}</Text>
            <Text><Text style={styles.subtopic}>Data de nascimento: </Text>{item.birthDate ? new Date(item.birthDate).toLocaleDateString('pt-BR') : 'N/A'}</Text>
        </View>
    )
}
