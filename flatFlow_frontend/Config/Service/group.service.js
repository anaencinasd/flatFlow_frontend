import http from "./http-common";

class GroupDataService{
    getAll(){
        return http.get("/group");
    }
    get(id){
        return http.get(`/group/${id}`);
    }
    create(data){
        
        return http.post("/group", data);
        
    }
    update(id, data){
        return http.put(`/group/${id}`, data);
    }
    delete(id){
        return http.delete(`/group/${id}`);
    }

    deleteAll(){
        return http.delete(`/group`);
    }

    finByname(name){
        return http.get(`/group?name=${name}`);
    }
}

export default new GroupDataService();