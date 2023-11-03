export function cleanResponse(tickets, users) {
    let userDict = {};
    let cleanedResponse = [];
    users.map((user) => {
        userDict[user.id] = { ...user };
    });
    tickets.map((ticket) => {
        cleanedResponse.push({ ...ticket, user: userDict[ticket.userId] });
    });
    const sortedByUsers = sortByUsers(cleanedResponse, users);
    const sortedByPriority = sortByPriority(cleanedResponse);
    const sortedByStatus = sortByStatus(cleanedResponse);
    const _priorities = Object.keys(sortedByPriority);
    let priorities = [];
    _priorities.map((p) => {
        priorities.push({ id: p, name: getPriorityText(p) });
    });
    let status = [];
    Object.keys(sortedByStatus).map((s) => {
        status.push({ id: s, name: s });
    });
    return { sortedByUsers, sortedByPriority, sortedByStatus, users, tickets, priorities, status };
}

function sortByUsers(cleanedResponse, users) {
    let sortedByUsers = {};
    users.map((user) => {
        let curUserArr = cleanedResponse.filter((resp) => resp.userId === user.id);
        sortedByUsers[user.id] = curUserArr;
    });
    return sortedByUsers;
}

function sortByPriority(cleanedResponse) {
    let sortedByPriority = {};
    cleanedResponse.map((resp) => {
        if (sortedByPriority[resp.priority] === undefined) {
            sortedByPriority[resp.priority] = [];
        }
        sortedByPriority[resp.priority].push(resp);
    });
    return sortedByPriority;
}

function sortByStatus(cleanedResponse) {
    let sortedByStatus = {};
    cleanedResponse.map((resp) => {
        if (sortedByStatus[resp.status] === undefined) {
            sortedByStatus[resp.status] = [];
        }
        sortedByStatus[resp.status].push(resp);
    });
    return sortedByStatus;
}

export function getPriorityText(p) {
    try {
        p = parseInt(p);
    } catch (error) {
        return "Undefined Priority";
    }
    switch (p) {
        case 0:
            return "No priority";
        case 1:
            return "Low";
        case 2:
            return "Medium";
        case 3:
            return "High";
        case 4:
            return "Urgent";
        default:
            return "Undefined Priority";
    }
}

export function limitText(text) {
    if (text.length <= 50) return text;
    else return text.substring(0, 50) + "...";
}
