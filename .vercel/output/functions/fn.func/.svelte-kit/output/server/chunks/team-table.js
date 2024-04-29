import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { T as Table } from "./table.js";
const Team_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { teams = [] } = $$props;
  let columns = [
    { label: "Name", key: "name" },
    { label: "Members", key: "members" },
    {
      label: "Connected Teams",
      key: "connectedTeams"
    }
  ];
  if ($$props.teams === void 0 && $$bindings.teams && teams !== void 0)
    $$bindings.teams(teams);
  return `${validate_component(Table, "Table").$$render($$result, { columns, data: teams, route: "team" }, {}, {})}`;
});
export {
  Team_table as T
};
