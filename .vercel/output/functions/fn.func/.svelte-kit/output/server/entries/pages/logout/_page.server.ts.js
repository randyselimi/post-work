import { r as redirect } from "../../../chunks/index.js";
function load({ cookies }) {
  cookies.set("logged_in", "false", { path: "/" });
  cookies.set("loggedEmail", "null", { path: "/" });
  throw redirect(303, `/login`);
}
export {
  load
};
