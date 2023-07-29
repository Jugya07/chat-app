import { redirect } from "react-router-dom";

export async function action({ request }) {
  const data = await request.formData();
  const signupData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  let url = "http://127.0.0.1:5000/api/user/signup";

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  const responseBody = await response.json();

  if (responseBody.status !== "success") {
    return { message: responseBody.message };
  }
  localStorage.setItem("token", responseBody.token);
  return redirect("/chat");
}
