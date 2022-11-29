import { useLocalStorage } from "@mantine/hooks";

import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage({
    key: "authToken",
    defaultValue: undefined,
  });
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const verifyToken = async () => {
    const response = await fetch("http://localhost:5005/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const parsed = await response.json();
    console.log(parsed.payload);
    if (parsed.message === "Token OK") {
      setIsAuthenticated(true);
      setUser(parsed.payload);
    }
  };

  useEffect(() => {
    if (token) {
      verifyToken();
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const fetchWithToken =
    (method, endpoint, callback, body = null) =>
    async () => {
      const response = await fetch(`http://localhost:5005/${endpoint}`, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body,
      });
      const parsed = await response.json();

      if (parsed.message === "Token OK") {
        setIsAuthenticated(true);
      }
      callback(parsed);
    };

  return (
    <SessionContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        fetchWithToken,
        user,
        setUser,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
