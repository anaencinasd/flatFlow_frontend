import http from "./http-common";

class UserDataService {
  getAll() {
    return http.get("api/user");
  }
  getUser() {
    return http.get("api/user/getuser");
  }
  get(id) {
    return http.get(`api/user/${id}`);
  }
  create(data) {
    return http.post("api/user", data);
  }
  update(id, data) {
    return http.put(`api/user/${id}`, data);
  }
  delete(id) {
    return http.delete(`api/user/${id}`);
  }

  deleteAll() {
    return http.delete(`api/user`);
  }

  findByUsername(username) {
    return http.get(`api/user/findByUsername?username=${username}`);
  }

  getGroupsForUser() {
    return http.get("api/getgroups");
  }

  getUsersForGroup(id) {
    return http.get(`api/getUsersForGroup/${id}`);
  }

  addUserToGroup(groupId, userId) {
    return http.post(`api/addusertogroup/${groupId}/${userId}`);
  }

  removeUserFromGroup(groupId, userId) {
    return http.delete(`api/removeuserfromgroup/${groupId}/${userId}`);
  }
}

export default new UserDataService();
