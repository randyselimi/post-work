import { c as create_ssr_component, s as subscribe } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { m as mainRoute } from "../../../../../chunks/db.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mainRoute;
  $$unsubscribe_mainRoute = subscribe(mainRoute, (value) => value);
  $$unsubscribe_mainRoute();
  return ``;
});
export {
  Page as default
};
