
//get database id from .env.development file
const databaseId = import.meta.env.VITE_DATABASE_ID;

const NotionEndpoints = {
    createPage : "https://api.notion.com/v1/pages",
    createDatabase: "https://api.notion.com/v1/databases",
    getDatabaseInfo: `https://api.notion.com/v1/databases/${databaseId}`
};

export { NotionEndpoints };