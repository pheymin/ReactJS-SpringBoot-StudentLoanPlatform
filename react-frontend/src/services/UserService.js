import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/users';

class UserService{
    getUsers(){
        return axios.get(API_URL);
    }

    getUserById(id){
        return axios.get(API_URL + '/' + id);
    }

    createUser(user){
        return axios.post(API_URL, user);
    }

    updateUser(user, id){
        return axios.put(API_URL + '/' + id, user);
    }

    deleteUser(id){
        return axios.delete(API_URL + '/' + id);
    }

    login(user){
        return axios.post(API_URL + '/login', user);
    }
}

export default new UserService();