import axios from "axios";
import { backendUrl, headers } from "./constants";

export const petsEndPointName = "Blogs";

function getEndPointUrl(){
    return `${backendUrl}${petsEndPointName}/` 
}

export function getBlogs(){
    return axios.get(getEndPointUrl() + "GetAll", {
        headers
    });
}

export function postBlog(body:any){
    return axios.post(getEndPointUrl() + "AddBlog", body, {
        headers, 
    });
}

