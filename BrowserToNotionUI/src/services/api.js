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
        "cover": {
            "type": "external",
            "external": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
            }
        },
        "icon": {
            "type": "emoji",
            "emoji": "🥬"
        },
        "parent": {
            "type": "database_id",
            "database_id": "7fe8a4964bea4a0eb9bc3cde797a0b86"
        },
        "properties": {
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": "Tuscan kale"
                        }
                    }
                ]
            }
        },
        "children": [
            {
                "object": "block",
                "heading_2": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale"
                            }
                        }
                    ]
                }
            },
            {
                "object": "block",
                "paragraph": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                                "link": {
                                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                                }
                            },
                            "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
                        }
                    ],
                    "color": "default"
                }
            }
        ]
    }
    const response = await api.post('/PostPage', pageObject);
    return response.data;
}

export default { getDatabaseInfo, createPage }