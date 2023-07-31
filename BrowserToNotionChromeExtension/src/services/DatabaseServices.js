import AxiosClient from "./AxiosClient";
import { NotionEndpoints } from "./Constans";

const getDatabaseInfo = async () => {
    const response = await AxiosClient.get(NotionEndpoints.getDatabaseInfo);
    console.log(response.request);
    return response;
};

export default {getDatabaseInfo};