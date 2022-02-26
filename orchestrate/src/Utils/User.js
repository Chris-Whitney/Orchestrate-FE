import { createContext, useContext } from "react";

export const UserContext = createContext({
  _id: {},
  name: {
    first: "",
    last: "",
  },
  avatar_url: "",
  username: "",
  email: "",
  location: {
    postcode: "",
    city: "",
    country: "",
  },
  instruments: [""],
  group: [
    {
      $oid: "",
    },
  ],
  friends: [],
  venues: [
    {
      $oid: "",
    },
  ],
  password: "",
});
