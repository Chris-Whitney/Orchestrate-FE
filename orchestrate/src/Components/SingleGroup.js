import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleGroup
  
} from "../Utils/api";

export function SingleGroup() {
  const { _id } = useParams();
  const [singleGroup, setSingleGroup] = useState({});
  const [loading, setLoading] = useState(false);
  const [owner, setOwner] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getSingleGroup(_id)
      .then((group) => {
        console.log(group);
        setSingleGroup(group);
        return singleGroup
      })

        // const singleUser = getSingleUser(singleGroup.owner);
        // //    .then((ownerApi) => {
        // //       console.log(owner, "<<<owner");
        // //       setOwner(`${ownerApi.name.first} ${ownerApi.name.last}`);
        // //       //   setLoading(true);
        // //     });

        // const singleGroupMembers = getSingleGroupMembers(singleGroup._id);
        // // .then((membersApi) => {
        // //   console.log(membersApi);
        // //   setMembers(membersApi);
        // //   setLoading(true);
        // });
        // Promise.all([singleUser, singleGroupMembers]).then(
        //   ([promise1Result, promise2Result]) => {
        //     console.log(promise1Result, "<<1");
        //     console.log(promise2Result, "<<2");
        //   }
        // );
      })

      .catch((err) => console.log(err));
  }, [_id]);

  useEffect(() => {}, []);

  return (
    <div>
      {loading ? (
        <>
          <h1>{singleGroup.name}</h1>
          <img
            src={singleGroup.avatar_url}
            alt={`${singleGroup.name} picture`}
            style={{ height: "200px", width: "400px" }}
          />
          {/* <p>Created by : {owner}</p> */}
          <ul></ul>
        </>
      ) : (
        <p>....Loading</p>
      )}
    </div>
  );
}
