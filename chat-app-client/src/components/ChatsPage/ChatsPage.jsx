// import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";

const ChatsPage = () => {
  const response = useLoaderData();
  return <div>{response.chats}</div>;
};

export default ChatsPage;
