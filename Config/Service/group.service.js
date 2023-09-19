import http from "./http-common";

class GroupDataService{
    getAll(){
        return http.get("api/group");
    }
    get(id){
        return http.get(`api/group/${id}`);
    }
    create(data){
        
        return http.post("api/group", data);
        
    }
    update(id, data){
        return http.put(`api/group/${id}`, data);
    }
    delete(id){
        return http.delete(`api/group/${id}`);
    }

    deleteAll(){
        return http.delete(`api/group`);
    }

    finByname(name){
        return http.get(`api/group?name=${name}`);
    }
}

export default new GroupDataService();