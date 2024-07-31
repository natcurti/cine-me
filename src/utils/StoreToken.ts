export class StoreToken {
  static setToken(token: string) {
    sessionStorage.setItem("AccessToken", token);
  }
  static getToken() {
    return sessionStorage.getItem("AccessToken");
  }
  static deleteToken() {
    return sessionStorage.removeItem("AccessToken");
  }
}
