import axios from 'axios';
import { Transaction } from '../model/transaction';
import {Constants} from "../util/constants";

const core = axios.create();

core.interceptors.request.use(
    config => {

        let headers = {
            "Content-Type": "application/json",
        }

        config.baseURL = "https://api.bscscan.com/api";

        config.headers = headers;
        return config;
    },

    error => {
        return Promise.reject(error);
    }
);

export const BscClient = () => {

    // Datapoint

    const getTransactions = async (wallet: string, count=10000): Promise<Transaction[]> => {
        return (await core.get(`?module=account&action=tokentx&address=${wallet}&page=1&offset=${count}&startblock=0&endblock=999999999&sort=desc&apikey=${"6KYMHIY12ZIQTCC23G8XX112YU1GYEQ9I7"}`)).data.result;
    }


    return ({
        getTransactions
    });
}

