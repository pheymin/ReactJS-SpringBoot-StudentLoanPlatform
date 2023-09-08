import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/transactions';

class TransactionService{
    getTransactions(){
        return axios.get(API_URL);
    }

    getTransactionById(id){
        return axios.get(API_URL + '/' + id);
    }

    createTransaction(transaction){
        return axios.post(API_URL, transaction);
    }

    updateTransaction(transaction, id){
        return axios.put(API_URL + '/' + id, transaction);
    }

    deleteTransaction(id){
        return axios.delete(API_URL + '/' + id);
    }
}

export default new TransactionService();