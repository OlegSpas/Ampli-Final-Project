import axios from "axios";
import { backendUrl, headers } from "./constants";

export const petsEndPointName = "Pets";

function getEndPointUrl(){
    return `${backendUrl}${petsEndPointName}/` 
}

export function getPets(){
    return axios.get(getEndPointUrl() + "GetAll", {
        headers
    });
}

export function postPet(body:any){
    return axios.post(getEndPointUrl() + "AddPet", body, {
        headers, 
    });
}

