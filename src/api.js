const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    console.debug(url);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    console.debug(url);

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle, where handle is a string
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   * where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);

    return res.company;
  }

  /** Get all companies data. Can filter companies by term, where term is a
   * string representing some or all of a company name.
   * Returns [{handle, name, description, numEmployees, logoUrl}, ...]
  */

  static async getAllCompanies(term) {
    let res;
    if (term === "") {
      res = await this.request(`companies/`);
    } else {
      const data = { nameLike: term };
      res = await this.request(`companies/`, data);
    }
    return res.companies;
  }

  /** Get all jobs. Can filter jobs by term where term is a string representing
   * some or all of a job title.
   * Returns [{id, title, salary, equity, companyHandle, companyName}, ...]
  */

  static async getAllJobs(term) {
    let res;
    if (term === "") {
      res = await this.request(`jobs/`);
    } else {
      const data = { title: term };
      res = await this.request(`jobs/`, data);
    }
    return res.jobs;
  }

  /** getToken, takes in a string 'username' and a string 'password' to
   * validate user.
   * Returns a string representing the token on successful
   * login, error on failure.
   */

  static async loginUser(username, password) {
    const data = { username, password };
    const res = await this.request('auth/token', data, "POST");
    JoblyApi.token = res.token;
    // console.log("JoblyApi token:", JoblyApi.token, "getToken:", res.token);

    return JoblyApi.token;
  }

  /** Gets data about a user, takes in a string 'username'
   * and returns an object like
   * {username, firstName, lastName, email, isAdmin, applications}
   */

  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    console.log("getUser response:", res.user);
    return res.user;
  }

  /**registerUser registers a new user, takes in a string 'username',
   * 'password', 'firstName','lastName', 'email'
   *
   * Returns a token
   */
  static async registerUser(username, password, firstName, lastName, email) {
    const data = { username, password, firstName, lastName, email };
    const res = await this.request('auth/register', data, "POST");
    JoblyApi.token = res.token;
    console.log("JoblyApi token:", JoblyApi.token, "getToken:", res.token);
    return JoblyApi.token;
  }

  /**editUser updates a users info, takes in a string 'username', 'firstName',
   * 'lastName', 'email'.
   *
   * Returns object like
   * {username, firstName, lastName, email, isAdmin}
  */

  static async editUser(username, firstName, lastName, email) {
    const data = { firstName, lastName, email };
    const res = await this.request(`users/${username}`, data, "PATCH");
    console.log("updateUser response:", res.user);
    return res.user;
  }

  /**applyToJob assigns the job by ID to the user data as part of the
   * applications property. Takes in a string 'username' and a number 'jobId'
   *
   * Returns {"applied": jobId}
  */

  static async applyToJob(username, jobId) {
    const res = await this.request(`users/${username}/jobs/${jobId}`, "POST");
    console.log("applyToJob response:", res);
    return res;
  }
}

export default JoblyApi;
