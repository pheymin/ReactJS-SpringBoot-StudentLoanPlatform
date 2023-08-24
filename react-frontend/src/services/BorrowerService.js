import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/borrowers';

class BorrowerService{
    getBorrowers(){
        return axios.get(API_URL);
    }

    getBorrowerById(id){
        return axios.get(API_URL + '/' + id);
    }

    createBorrower(borrower){
        return axios.post(API_URL, borrower);
    }

    updateBorrower(borrower, id){
        return axios.put(API_URL + '/' + id, borrower);
    }

    deleteBorrower(id){
        return axios.delete(API_URL + '/' + id);
    }
}

export default new BorrowerService();