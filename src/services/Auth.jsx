import { apiPath } from "../constants";
const axios = require('axios');
const cryptoJs = require("crypto-js");

export async function login(credentials) {
    try {
        const response = await axios.post(`${apiPath}auth/login`,credentials);
        return response.data;
    } catch (error) {
        return []
    }
}

export function addMinutes(minutes = 15) {
    var nexTime = new Date();
    nexTime.setMinutes(nexTime.getMinutes() + minutes);
    return nexTime
}

export function diffDates(time){
    let justoAhora = new Date()
    let diferenciaDias =  time - justoAhora.getTime() 
    return diferenciaDias
}

export function encrypt(key,data){
    let dataEncrypt =  cryptoJs.AES.encrypt(JSON.stringify(data), '').toString();
    localStorage.setItem(key,dataEncrypt)
}

export function decrypt(key){
    let data = localStorage.getItem(key) 
    if(data){
        var bytes = cryptoJs.AES.decrypt(data, '');
        return JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
    } else {
        return null
    }
}

export function checkValidity(){
    let key = decrypt('key')
    if(key){
        let diferencia = diffDates(key.timeOut)
        return diferencia > 0
    } else {
        return false
    }
}

export function setToken(){
    let token = decrypt('key')
    if(token){
        return  {
            headers: {
              Authorization: 'Bearer ' + token.access_token //the token is a variable which holds the token
            }
        }
    } else {
        return {}
    }
}