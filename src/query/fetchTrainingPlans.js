import axios from 'axios';

export const fetchTrainings = async () => {
    try {
        const response = await axios.get("http://localhost:3001/training");
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}