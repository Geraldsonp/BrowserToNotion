import { ref } from "vue";

class config {
    constructor(){
        this.databaseId = localStorage.getItem('DatabaseId');
        this.notionToken = localStorage.getItem('NotionSecret');
    }

    setCredentiasl(databaseId, notionToken) {
        localStorage.setItem('DatabaseId', databaseId);
        localStorage.setItem('NotionSecret', notionToken);
        this.databaseId = databaseId;
        this.notionToken = notionToken;
    }

    getDatabaseId() {
        return this.databaseId;
    }
    getNotionToken() {
        return this.notionToken;
    }
    
    isConfigured() {
        return this.databaseId && this.notionToken;
    }
}
export default new config();