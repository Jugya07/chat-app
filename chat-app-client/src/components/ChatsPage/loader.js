// import { json } from "react-router-dom";

const chatsLoader = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/chat", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const responseBody = await response.json();
  console.log(responseBody);

  return null;
};

export default chatsLoader;
