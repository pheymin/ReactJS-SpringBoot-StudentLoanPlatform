import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/admin';

class AdminService{
    getAdmins(){
        return axios.get(API_URL);
    }

    getAdminById(id){
        return axios.get(API_URL + '/' + id);
    }

    createAdmin(admin){
        return axios.post(API_URL, admin);
    }

    updateAdmin(admin, id){
        return axios.put(API_URL + '/' + id, admin);
    }

    deleteAdmin(id){
        return axios.delete(API_URL + '/' + id);
    }
}

export default new AdminService();