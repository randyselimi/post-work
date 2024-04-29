import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { T as Table } from "./table.js";
const Work_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { work } = $$props;
  let columns = [
    { label: "Title", key: "title" },
    { label: "Status", key: "status" },
    { label: "Hours", key: "hours" },
    { label: "Assigned To", key: "assignedTo" },
    { label: "Due Date", key: "endDate" }
  ];
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  return `${validate_component(Table, "Table").$$render($$result, { columns, data: work, route: "work" }, {}, {})}`;
});
export {
  Work_table as W
};
