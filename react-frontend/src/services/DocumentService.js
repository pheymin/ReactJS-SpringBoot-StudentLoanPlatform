import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/documents';

class DocumentService {
    getDocuments() {
        return axios.get(API_URL);
    }

    getDocumentById(id) {
        return axios.get(API_URL + '/' + id);
    }

    getDocumentsByUserId(id) {
        return axios.get(API_URL + '/user/' + id);
    }

    createDocuments(documents) {
        const formData = new FormData();

        documents.forEach((document) => {
            formData.append('userId', document.userId);
            formData.append('docType', document.docType);
            formData.append('file', document.file);
        });

        return axios.post(API_URL, formData);
    }

    deleteDocument(id) {
        return axios.delete(API_URL + '/' + id);
    }

    checkUserDocument(id) {
        return axios.get(API_URL + '/check/' + id);
    }
}

export default new DocumentService();