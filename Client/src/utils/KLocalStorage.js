export const Get_LocalStorage = async (key) => {
    let data = await localStorage.getItem(key);
    return data;
}