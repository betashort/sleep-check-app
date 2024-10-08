import axios from "axios"
import { IDiaryEvent } from "../interface/sleepCheckSheet"

const apiUrl = "https://sleep-check-api.betashort-lab.com/api/sleep-check/"

export async function GetSleepDiary() {
    return await axios.get(apiUrl).then( (res) => {
        //console.log(res.data);
        return res.data;
    }).catch(error => {
        console.log(error);
        return [];
    });
}

export async function PostSleepDiary (body:IDiaryEvent){
    return await axios.post(apiUrl, body).then( ( response) => {
        //console.log(response);
    }).catch( (error) => {
        console.log(error);
    });
}