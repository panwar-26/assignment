import "./App.css";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "./api/api";
import { cleanResponse, getPriorityText } from "./utils/utils";
import Dashboard from "./pages/dashboard";
import NavBar from "./global-components/nav";

function App() {
    useEffect(() => {
        async function run() {
            const _data = await fetchFromAPI();
            if (_data.error) {
                alert("Check internet connection");
                return;
            }
            const cleaned = cleanResponse(_data.tickets, _data.users);
            setSortedByUsers(cleaned.sortedByUsers);
            setSortedByPriority(cleaned.sortedByPriority);
            setUsers(cleaned.users);
            setPriorities(cleaned.priorities);
            setSortedByStatus(cleaned.sortedByStatus);
            setStatus(cleaned.status);
            console.log(cleaned.users);
            // console.log(cleaned);
            // console.log(Object.keys(sortedByStatus));
        }
        run();
    }, []);
    const [sortedByUsers, setSortedByUsers] = useState({});
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [sortedByPriority, setSortedByPriority] = useState({});
    const [sortedByStatus, setSortedByStatus] = useState({});
    const [group, setGroup] = useState(0);

    return (
        <>
            <button
                style={{ padding: "10px", margin: "20px" }}
                onClick={() => {
                    setGroup((group + 1) % 3);
                    console.log(group);
                }}
            >
                Toggle Groups
            </button>
            {group === 0 && <Dashboard columns={users} cardMap={sortedByUsers} group={group} />}
            {group === 1 && <Dashboard columns={priorities} cardMap={sortedByPriority} group={group}/>}
            {group === 2 && <Dashboard columns={status} cardMap={sortedByStatus} group={group}/>}
        </>
    );
}

export default App;
