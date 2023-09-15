import http from "./http-common";

class ExpenseDataService{
    getAll(){
        return http.get("/expense");
    }
    get(id){
        return http.get(`/expense/${id}`);
    }
    create(data){
        
        return http.post("/expense", data);
        
    }
    update(id, data){
        return http.put(`/expense/${id}`, data);
    }
    delete(id){
        return http.delete(`/expense/${id}`);
    }

    deleteAll(){
        return http.delete(`/expense`);
    }

    finByTitle(title){
        return http.get(`/expense?title=${title}`);
    }
}

export default new ExpenseDataService();