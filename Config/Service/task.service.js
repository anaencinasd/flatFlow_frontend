import http from "./http-common";

class TaskDataService{
    getAll(){
        return http.get("api/task");
    }
    get(id){
        return http.get(`api/task/${id}`);
    }
    create(data){
        
        return http.post("api/task", data);
        
    }
    update(id, data){
        return http.put(`api/task/${id}`, data);
    }
    delete(id){
        return http.delete(`api/task/${id}`);
    }

    deleteAll(){
        return http.delete(`api/task`);
    }

    finByTitle(title){
        return http.get(`api/task?title=${title}`);
    }
}

export default new TaskDataService();