import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/', //базовый url

});

// const date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();
// const endDate = `${year}-${month}-${day}`;
//
// export const ratesAPI = {
//
//

export default instance

