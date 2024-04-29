import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { T as Table } from "./table.js";
const User_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users = [] } = $$props;
  let columns = [
    { label: "Name", key: "fullName" },
    { label: "Role", key: "role" },
    { label: "Email", key: "email" },
    { label: "Team", key: "team" }
  ];
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  return `${validate_component(Table, "Table").$$render($$result, { columns, data: users, route: "user" }, {}, {})}`;
});
export {
  User_table as U
};
