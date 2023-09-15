import http from "./http-common";

class BalanceDataService{
    getAll(){
        return http.get("/balance");
    }
    get(id){
        return http.get(`/balance/${id}`);
    }
    create(data){
        
        return http.post("/balance", data);
        
    }
    update(id, data){
        return http.put(`/balance/${id}`, data);
    }
    delete(id){
        return http.delete(`/balance/${id}`);
    }

    deleteAll(){
        return http.delete(`/balance`);
    }

    finByTitle(id_user){
        return http.get(`/balance?id_user=${id_user}`);
    }
}

export default new BalanceDataService();