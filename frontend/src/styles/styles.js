import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    iconsContainer: {
        flexDirection: "row",
        gap: 15,
    },
    subtopic: {
        fontWeight: 'bold',
    },
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 30,
        marginTop: 40,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        gap: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#35bc74',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;
