import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDBhMmU1ZjA0NDNlNWNkYjI3YWU2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODI2OTI4MywiZXhwIjoxNjc4NTI4NDgzfQ.nqDCc_wRXsq6y5JX0QBYdW-cQyExGtKf_Fy8zo0fCtg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
