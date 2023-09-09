import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/loans';

class LoanService{
    getLoans(){
        return axios.get(API_URL);
    }

    getLoanById(id){
        return axios.get(API_URL + '/' + id);
    }

    createLoan(loan){
        return axios.post(API_URL, loan);
    }

    updateLoan(loan, id){
        return axios.put(API_URL + '/' + id, loan);
    }

    deleteLoan(id){
        return axios.delete(API_URL + '/' + id);
    }

    getLoanByBorrowerID(id){
        return axios.get(API_URL + '/user/' + id);
    }
}

export default new LoanService();