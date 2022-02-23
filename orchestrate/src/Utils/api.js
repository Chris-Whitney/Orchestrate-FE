import axios from "axios";

const orchestrateApi = axios.create({
  baseURL: "https://orchestrate-co.herokuapp.com/",
});

export const getAllGroups = () => {
  return orchestrateApi.get("api/groups").then((res) => {
    return res.data.groups;
  });
};

export const login = (username, password) => {
  return orchestrateApi.post("login", { username, password }).then((res) => {
      console.log(res, '<<api')
    return res;
  })
  .catch((err) => {
      console.log(err)
  })
};
