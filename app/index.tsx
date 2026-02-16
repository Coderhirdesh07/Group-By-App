import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { retrieveItemFromStorage } from "./storage";

function index() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkLogin() {
      const raw = await retrieveItemFromStorage("loggedIn");
      setLoggedIn(raw === true || raw === "true");
    }
    checkLogin();
  }, []);

  if (loggedIn === null) return null; // or splash screen

  return (
    <Redirect href={loggedIn ? "/screen/(tabs)/HomeScreen" : "/screen/(auth)/SignUp"} />
  );
}
export default index;
