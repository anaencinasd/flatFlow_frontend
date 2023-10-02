import http from "./http-common";

class CategoryDataService{
    getAll(){
        return http.get("api/category");
    }
    get(id){
        return http.get(`api/category/${id}`);
    }
    create(data){
        
        return http.post("api/category", data);
        
    }
    update(id, data){
        return http.put(`api/category/${id}`, data);
    }
    delete(id){
        return http.delete(`api/category/${id}`);
    }

    deleteAll(){
        return http.delete(`api/category`);
    }

    finByTitle(title){
        return http.get(`api/category?type=${type}`);
    }
}

export default new CategoryDataService();