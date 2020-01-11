class RestApiCalls {
  static API_URL = "http://localhost:8081";
  static CORS_HEADERS = {
    mode: "cors",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
  };

  static loadProjects() {
    return fetch(this.API_URL + "/projects", {
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static loadProject(projectName) {
    return fetch(this.API_URL + `/projects/${projectName}`, {
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static loadTopInvestors(top = 3) {
    return fetch(this.API_URL + `/users?role=INVESTOR&top=${top}`, {
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async loadCategories() {
    return fetch(this.API_URL + "/projects/categories", {
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async login(username, password) {
    return fetch(this.API_URL + "/login", {
      body: JSON.stringify({ username: username, password: password }),
      method: "POST",
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async register(username, password, email) {
    return fetch(this.API_URL + "/register", {
      body: JSON.stringify({ username: username, password: password, email: email }),
      method: "POST",
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async loadUser(username) {
    return fetch(this.API_URL + `/users/${username}`, {
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async getRoleForProject(projectName) {
    return fetch(this.API_URL + `/projects/${projectName}/role`, {
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async joinProject(projectName) {
    return fetch(this.API_URL + `/projects/${projectName}/members/join`, {
      method: "POST",
      ...this.CORS_HEADERS
    }).then(res => res.json());
  }

  static async patchMember(projectName, memberName, status) {
    return fetch(
      this.API_URL +
        `/projects/${projectName}/members/${memberName}?status=${status}`,
      {
        method: "PATCH",
        ...this.CORS_HEADERS
      }
    );
  }

  static async loadProjectMembers(projectName, status) {
    return fetch(
      this.API_URL +
        (status
          ? `/projects/${projectName}/members?status=${status}`
          : `/projects/${projectName}/members`),
      {
        ...this.CORS_HEADERS
      }
    ).then(res => res.json());
  }
}

export default RestApiCalls;
