import axios from "axios";

export default axios.create({
    //add bearer auth
    headers: {Authorization: `Bearer ${import.meta.env.VITE_NOTION_TOKEN}`,
    "Notion-Version": import.meta.env.VITE_NOTION_VERSION},
});