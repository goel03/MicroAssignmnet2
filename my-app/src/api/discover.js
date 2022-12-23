import axios from "axios";

export async function getCategories() {
    const reqUrl = `http://localhost:3000/api/get-all-category`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return result.data;
    }
}

