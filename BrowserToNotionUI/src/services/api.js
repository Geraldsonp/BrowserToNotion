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
    const pageObject = {
        "parent": { "database_id": "d9824bdc84454327be8b5b47500af6ce" },
        "icon": {
            "emoji": "🥬"
        },
        "properties": {
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": "Tuscan Kale"
                        }
                    }
                ]
            },
            "Description": {
                "rich_text": [
                    {
                        "text": {
                            "content": "A dark green leafy vegetable"
                        }
                    }
                ]
            }
        }
    }
    const response = await api.post('/PostPage', pageObject);
    return response.data;
}

export default { getDatabaseInfo, createPage }