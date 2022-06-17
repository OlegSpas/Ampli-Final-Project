import axios from "axios";
import { type } from "os";
import { backendUrl, headers } from "./constants";

export const petsEndPointName = "Messages";

function getEndPointUrl(){
    return `${backendUrl}${petsEndPointName}/` 
}

export function getMessages(){
    return axios.get(getEndPointUrl() + "GetAll", {
        headers
    });
}

export function postMessage(body:any){
    return axios.post(getEndPointUrl() + "AddMessage", body, {
        headers, 
    });
}

