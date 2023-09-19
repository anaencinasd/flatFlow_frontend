// AuthService.js
import http from "./http-common";

class AuthService {
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  async login(credentials) {
    try {
      await http.get("/sanctum/csrf-cookie");
      const response = await http.post("/api/login", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    return http.post("api/logout");
  }
}

export default new AuthService();

