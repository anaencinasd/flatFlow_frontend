import http from "./http-common";

class ForumDataService{
    getAll(){
        return http.get("/forum");
    }
    get(id){
        return http.get(`/forum/${id}`);
    }
    create(data){
        
        return http.post("/forum", data);
        
    }
    update(id, data){
        return http.put(`/forum/${id}`, data);
    }
    delete(id){
        return http.delete(`/forum/${id}`);
    }

    deleteAll(){
        return http.delete(`/forum`);
    }

    finByTitle(title){
        return http.get(`/forum?title=${title}`);
    }
}

export default new ForumDataService();