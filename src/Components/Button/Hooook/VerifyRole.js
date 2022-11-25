import { useState } from "react";

// import { useEffect, useState } from "react";

const useVerifyRole = (email) => {
  const [role, setRole] = useState("");
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  fetch(`http://localhost:5000/users/role/${email}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      setRole(data.role);
    });
  return [role, isRoleLoading];
};

// const useVerifyRole = (email) => {

//   useEffect(() => {
//     fetch(`http://localhost:5000/users/role/${email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setRole(data.role);
//         setIsRoleLoading(false);
//       });
//   }, [email]);

//   return [role, isRoleLoading];
// };

// export default useAdmin;

export default useVerifyRole;
