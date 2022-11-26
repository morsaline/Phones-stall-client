import { useEffect, useState } from "react";

const UseAuthToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("authToken", data.accessToken);
            setToken(data.accessToken);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [email]);

  return [token];
};

export { UseAuthToken };
