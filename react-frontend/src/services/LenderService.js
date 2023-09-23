import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/lenders';

class LenderService{
    getLenders(){
        return axios.get(API_URL);
    }

    getLenderById(id){
        return axios.get(API_URL + '/' + id);
    }

    getLenderByUserId(id){
        return axios.get(API_URL + '/user/' + id);
    }

    createLender(lender){
        return axios.post(API_URL, lender);
    }

    updateLender(lender, id){
        return axios.put(API_URL + '/' + id, lender);
    }

    deleteLender(id){
        return axios.delete(API_URL + '/' + id);
    }
}

export default new LenderService();