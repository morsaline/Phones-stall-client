import { useState } from "react";

const UseVerifyStatus = (email) => {
  const [status, setStatus] = useState("");
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  fetch(`https://serverside-sigma.vercel.app/users/role/${email}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      setStatus(data.status);
    });
  return [status, isRoleLoading];
};
export default UseVerifyStatus;
