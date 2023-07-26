import { redirect } from "react-router-dom";

export async function action({ request }) {
  const data = await request.formData();
  const signupData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    pic: data.get("pic"),
  };

  let url = "http://127.0.0.1:5000/api/user/signup";

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (!response.ok) {
    return { message: "Fill the fields Properly! " };
  }

  return redirect("/");
}
