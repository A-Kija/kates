function getId(key) {
    let id = localStorage.getItem(key + '_id');
    if (null === id) {
        localStorage.setItem(key + '_id', 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem(key + '_id', id);
    return id;
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (null === data) {
        localStorage.setItem(key + '_id', JSON.stringify([]));
        return [];
    }
    return JSON.parse(data);
}

export function create(key, data) {
    const data = getFromLocalStorage(key);
    const newData = {...data, id: getId(key) };
    data.push(newData);
    localStorage.setItem(key + '_id', JSON.stringify(data));
}

export function destroy(key, id) {
    const data = getFromLocalStorage(key);
    localStorage.setItem(key + '_id', JSON.stringify(
        data.filter(d => d.id != id)
    ));
}