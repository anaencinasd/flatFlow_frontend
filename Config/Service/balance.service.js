import http from "./http-common";

class BalanceDataService{
    getAll(){
        return http.get("api/balance");
    }
    get(id){
        return http.get(`api/balance/${id}`);
    }
    create(data){
        
        return http.post("api/balance", data);
        
    }
    update(id, data){
        return http.put(`api/balance/${id}`, data);
    }
    delete(id){
        return http.delete(`api/balance/${id}`);
    }

    deleteAll(){
        return http.delete(`api/balance`);
    }

    finByTitle(id_user){
        return http.get(`api/balance?id_user=${id_user}`);
    }
}

export default new BalanceDataService();