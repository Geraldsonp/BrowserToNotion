import axios from 'axios';
import AppConfig from '../AppConfig';

const api = axios.create({
    baseURL: 'http://localhost:7071/api',
});

api.interceptors.request.use(async (config) => {
    config.headers["Notion-Token"] = `${AppConfig.getNotionToken()}`;
    config.headers['Notion-Version'] = '2021-05-13';
    return config;
});

const getDatabaseInfo = async () => {
    const response = await api.get(`/databases/${AppConfig.getDatabaseId()}`);
    return response.data;
}

const createPage = async (page) => {
    const response = await api.post('/pages');
    return response.data;
}

export default {getDatabaseInfo, createPage}