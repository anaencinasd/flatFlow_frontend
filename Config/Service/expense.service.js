import http from "./http-common";

class ExpenseDataService{
    getAll(){
        return http.get("api/expense");
    }
    get(id){
        return http.get(`api/expense/${id}`);
    }
    create(data){
        
        return http.post("api/expense", data);
        
    }
    update(id, data){
        return http.put(`api/expense/${id}`, data);
    }
    delete(id){
        return http.delete(`api/expense/${id}`);
    }

    deleteAll(){
        return http.delete(`api/expense`);
    }

    finByTitle(title){
        return http.get(`api/expense?title=${title}`);
    }
}

export default new ExpenseDataService();