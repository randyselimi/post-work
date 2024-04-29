import { c as create_ssr_component, a as each, e as escape } from "./ssr.js";
import "./client.js";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns = [] } = $$props;
  let { route = "" } = $$props;
  let { data = [] } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<table><thead><tr>${each(columns, (column) => {
    return `<th>${escape(column.label)}</th>`;
  })}</tr></thead> <tbody>${each(data, (row) => {
    return `<tr tabindex="0" role="button">${each(columns, (column) => {
      return `<td>${escape(row[column.key])}</td>`;
    })} </tr>`;
  })}</tbody> <tfoot></tfoot></table>`;
});
export {
  Table as T
};
