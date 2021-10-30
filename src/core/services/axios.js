import axios from "axios";
import { API_ROOT_URL } from "../../common/utills/constants/api";

const defaulHeader = {
    headers: {
        "content-type": "application/json"
    }
};

const instance = axios.create({
    baseURL: API_ROOT_URL,
    timeout: 30000,
    defaulHeader
});


export const getRequest = ({
    API = ""
}) => {
    return new Promise((resolve, reject) => {
        instance
            .get(API)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                resolve(error.response);
            });
    });
};


export default instance;
