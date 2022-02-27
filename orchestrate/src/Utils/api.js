import axios from "axios";

const orchestrateApi = axios.create({
  baseURL: "https://orchestrate-co.herokuapp.com/",
});

export const getSingleUser = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/users/${id}`).then((res) => {
      return res.data.user;
    });
  }
};

export const setUserEvent = (dates, id = false, title) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.post(`api/users/${id}/events`, {
      title,
      from: dates.from,
      to: dates.to
    }).then(res => {
      return res.data.event
    })
  }
}
export const getSingleGroup = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/groups/${id}`).then((res) => {
      console.log(res.data.group, '<<<res.data.group')
      return res.data.group;
    });
  }
};

export const getGroupOwner = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/groups/${id}/owner`).then((res) => {
      return res.data.owner;
    });
  }
};

export const getSingleGroupMembers = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/groups/${id}/members`).then((res) => {
      return res.data.members;
    });
  }
};

export const getAllGroups = () => {
  return orchestrateApi.get("api/groups").then((res) => {
    return res.data.groups;
  });
};

export const getUserGroups = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    console.log(id)
    return orchestrateApi.get(`api/users/${id}/groups`).then((res) => {
      return res.data.groups;
    });
  }
};

export const getUserVenues = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/users/${id}/venues`).then((res) => {
      return res.data.venues;
    });
  }
};

export const getVenueById = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/venues/${id}`).then((res) => {
      return res.data.venue;
    });
  }
};

export const login = (username, password) => {
  return orchestrateApi
    .post("login", { username, password })
    .then((res) => {
      return res.data.msg;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserByUsername = (name) => {
  return orchestrateApi.get(`api/users/search?username=${name}`).then(res => {
    console.log(res.data.users[0])
    return (res.data.users[0])
  })
}

export const postNewUser = (user) => {
  return orchestrateApi
    .post("api/users", {
      name: {
        first: user.firstname,
        last: user.lastname,
      },
      location: {
        postcode: "m1 09s",
        city: "Manchester",
        country: "England",
      },
      avatar_url: `https://avatars.dicebear.com/api/adventurer/${user.username}.svg`,
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

export const getUserEvents = (id = false) => {
  if (id === false) {
    console.log('no ID')
  }
  else {
    return orchestrateApi.get(`api/users/${id}/events`).then((res) => {
      return res.data.events
    })
  }
}

export const removeEvent = (id, uId = false) => {
  if (!uId) { console.log('error no valid ID'); return }
  return orchestrateApi.delete(`api/users${uId}/events/${id}`).then((res) => {
    return true
  })
}