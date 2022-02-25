import axios from "axios";

const orchestrateApi = axios.create({
  baseURL: "https://orchestrate-co.herokuapp.com/",
});

export const getSingleUser = (id) => {
  console.log(id);
  return orchestrateApi.get(`api/users/${id}`).then((res) => {
    return res.data.user;
  });
};

export const setUserEvent = (dates, id) => {
  return orchestrateApi.post(`api/users/${id}/events`, {
    from: dates.from,
    to: dates.to
  }).then(res => {
    return res.data.event
  })
}

export const getAllGroups = () => {
  return orchestrateApi.get("api/groups").then((res) => {
    return res.data.groups;
  });
};

export const getUserGroups = (id) => {
  return orchestrateApi.get(`api/users/${id.$oid}/groups`).then((res) => {
    return res.data.groups;
  });
};

export const getUserVenues = (id) => {
  return orchestrateApi.get(`api/users/${id}/venues`).then((res) => {
    return res.data.venues;
  });
};

export const getVenueById = (id) => {
  return orchestrateApi.get(`api/venues/${id}`).then((res) => {
    return res.data.venue;
  });
};

export const login = (username, password) => {
  return orchestrateApi
    .post("login", { username, password })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postNewUser = (user) => {
  console.log(user);
  return orchestrateApi
    .post("api/users", {
      name: {
        first: user.firstname,
        last: "Stevenson",
      },
      location: {
        postcode: "m1 09s",
        city: "Manchester",
        country: "England",
      },
      avatar_url: "https://avatars.dicebear.com/api/adventurer/erge.svg",
      username: user.username,
      email: "steve@gmail.com",
      instruments: ["Harp"],
      password: user.password,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
