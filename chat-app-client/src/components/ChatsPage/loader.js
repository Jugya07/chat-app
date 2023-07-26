import { json } from "react-router-dom";

const chatsLoader = async () => {
  const response = await fetch("http://localhost:5000/");

  if (!response.ok) {
    throw json({ message: "Could not find event details" }, { status: 500 });
  }
  return response;
};

export default chatsLoader;
