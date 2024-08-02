function getData() {
    try {
        const storageData = JSON.parse(localStorage.note);
        return storageData;
    } catch (error) {
        return [];
    }
}

export default getData