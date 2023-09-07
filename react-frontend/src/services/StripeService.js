import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/stripe';

class StripeService{
    onboard(email){
        return axios.post(API_URL + '/onboard', email);
    }
}

export default new StripeService();