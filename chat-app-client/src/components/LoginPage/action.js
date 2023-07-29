import { redirect } from "react-router-dom";

export async function action({ request }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  let url = "http://127.0.0.1:5000/api/user/login";

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const responseBody = await response.json();

  console.log(responseBody);
  if (responseBody.status !== "success") {
    return { message: responseBody.message };
  }
  localStorage.setItem("token", responseBody.token);
  return redirect("/chat");
}
