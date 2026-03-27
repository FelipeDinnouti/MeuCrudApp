import { API_URL } from "./configApi";

export async function createPerson(person) {
    const response = await fetch(`${API_URL}/people`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
    return response.json();
}

export async function getPeople() {
    const response = await fetch(`${API_URL}/people`);
    return response.json();
}

export async function getPerson(id) {
    const response = await fetch(`${API_URL}/people/${id}`);
    return response.json();
}

export async function updatePerson(person, id) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
    return response.json();
}

export async function deletePerson(id) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
    return response.json();
}
