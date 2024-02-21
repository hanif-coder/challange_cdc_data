import axios, { AxiosInstance } from 'axios';

// Create an Axios instance with custom configuration
const apiInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Set your desired base URL here
});

// Function to fetch data from the backend API
export const getData = async (params: { jurisdictionId?: string; vaccinationStatus?: string; demographic?: string }) => {
    try {
        const response = await apiInstance.get('/api/getData', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
