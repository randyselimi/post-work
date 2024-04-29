import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ request, cookies, url }) => {
    const data = await request.formData();
    const password = "Test1234!";
    if (data.get("password") !== password || data.get("email") === "") {
      throw redirect(303, "/login?error=1");
    }
    cookies.set("logged_in", "true", { path: "/" });
    cookies.set("loggedEmail", data.get("email"), { path: "/" });
    throw redirect(303, url.searchParams.get("redirectTo") ?? "/");
  }
};
export {
  actions
};
