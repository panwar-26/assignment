import axios from "axios";

async function fetchFromAPI() {
    try {
        const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
        const data = await axios.get(url);
        return { error: false, tickets: data.data.tickets, users: data.data.users };
    } catch (error) {
        return { error: true, tickets: [], users: [] };
    }
}
export { fetchFromAPI };
