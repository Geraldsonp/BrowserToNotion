import axionsClient from './AxiosClient'
import { NotionEndpoints } from './constants';


const createPage = async (page) => {
    const response = await axionsClient.post(NotionEndpoints.createPage, page);
    return response;
};


export default {createPage};