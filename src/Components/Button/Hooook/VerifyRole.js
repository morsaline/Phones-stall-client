import { useState } from "react";

// import { useEffect, useState } from "react";

const UseVerifyRole = (email) => {
  const [role, setRole] = useState("");
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  fetch(`https://serverside-sigma.vercel.app/users/role/${email}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      setRole(data.role);
    });
  return [role, isRoleLoading];
};

// import { useEffect, useState } from "react";

// const UseVerifyRole = (email) => {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     if (email) {
//       fetch(`https://serverside-sigma.vercel.app/users/role/${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.role) {
//             // localStorage.setItem("authToken", data.accessToken);
//             setRole(data.role);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [email]);

//   return [role];
// };

// export { UseVerifyRole };

// const useVerifyRole = (email) => {

//   useEffect(() => {
//     fetch(`https://serverside-sigma.vercel.app/users/role/${email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setRole(data.role);
//         setIsRoleLoading(false);
//       });
//   }, [email]);

//   return [role, isRoleLoading];
// };

// export default useAdmin;

export default UseVerifyRole;
