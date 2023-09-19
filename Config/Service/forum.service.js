import http from "./http-common";

class ForumDataService{
    getAll(){
        return http.get("api/forum");
    }
    get(id){
        return http.get(`api/forum/${id}`);
    }
    create(data){
        
        return http.post("api/forum", data);
        
    }
    update(id, data){
        return http.put(`api/forum/${id}`, data);
    }
    delete(id){
        return http.delete(`api/forum/${id}`);
    }

    deleteAll(){
        return http.delete(`api/forum`);
    }

    finByTitle(title){
        return http.get(`api/forum?title=${title}`);
    }
}

export default new ForumDataService();