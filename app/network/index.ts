import { API_CONFIG } from "../config";
import axios from "axios";
import {retrieveItemFromStorage} from "../storage/index";
import { Orders } from "../constants/data";

export async function handleGetAllOrder(){
    try{
        const cookie = retrieveItemFromStorage("token");
        const response = await axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINT_1}`,{
        headers:{
            Authorization:`Bearer ${cookie}`,
        },
    });
      if(!response.data || response.status===400){
        console.log("Order list cannot be fetched");
        return [];
      }
      return response.data;
    }
    catch(error){
        console.log(`error occured ${error}`);
        return null;
    }
}

export async function handleGetAllProduct(){
    try{
        const cookie = await retrieveItemFromStorage("token");
        const response = await axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENPOINT_2}`,{
            headers:{
                Authorization:`Bearer ${cookie}`,
            },
        })
        if(!response.data || response.status===400){
            console.log(`Product list cannot be fetched`);
            return [];
        }
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export async function handlePostOrder(data:Orders){
    try{
        const cookie = await retrieveItemFromStorage("token");
        const response = await axios.post(`${API_CONFIG.BASE_URL}${API_CONFIG.ENPOINT_2}`,{
            headers:{
                Authorisation:`Bearer ${cookie}`,
                data:data
            }
        });
        if(response.status===400) {
            console.log('Order cannot be placed');
        }
    }
    catch(error){
        console.log(error);
        throw new Error;
    }
}
