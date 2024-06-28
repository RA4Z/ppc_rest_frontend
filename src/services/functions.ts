import axios from "axios";

export async function get_data(path: string) {
    try {
        const url = `http://10.1.43.63:5000/${path}`;
        const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        if (response.status === 200) {
            console.log(response.data)
            return response.data;
        } else {
            console.log(response.status)
            return []
        }
    } catch {
        console.log('Erro ao conectar com o servidor!')
        return []
    }
}

export async function update_database(path: string) {
    try {
        const url = `http://10.1.43.63:5000/${path}`;
        const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        if (response.status === 200) {
            return true;
        } else {
            console.log(response.status)
            return false
        }
    } catch {
        console.log('Erro ao conectar com o servidor!')
        return false
    }
}