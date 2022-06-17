import axios from "axios";
import { backendUrl, headers } from "./constants";

export const usersEndPointName = "Users";

function getEndPointUrl(){
    return `${backendUrl}${usersEndPointName}/` 
}

export function getUsers(){
    return axios.get(getEndPointUrl() + "GetAll", {
        headers
    });
}

export function postUser(body:any){
    return axios.post(getEndPointUrl() + "AddUser", body, {
        headers, 
    });
}