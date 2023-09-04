import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5183',
});

const databaseId = localStorage.getItem('DatabaseId');
const notionToken = localStorage.getItem('NotionSecret');

api.interceptors.request.use(async (config) => {
    config.headers["Notion-Token"] = `${notionToken}`;
    config.headers['Notion-Version'] = '2021-05-13';
    return config;
});

const getDatabaseInfo = async () => {
    const response = await api.get(`/databases/${databaseId}`);
    return response.data;
}

const createPage = async (page) => {
    const response = await api.post('/pages');
    return response.data;
}

export default {getDatabaseInfo, createPage}