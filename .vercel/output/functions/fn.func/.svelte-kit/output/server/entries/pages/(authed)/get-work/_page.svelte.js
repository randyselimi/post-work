import { c as create_ssr_component, v as validate_component, s as subscribe } from "../../../../chunks/ssr.js";
import { m as mainRoute, l as loggedUser } from "../../../../chunks/db.js";
import { D as Dashboard, a as Dashboard_tile } from "../../../../chunks/dashboard.js";
import { U as Update_hours_form } from "../../../../chunks/update-hours-form.js";
import { W as Work_table } from "../../../../chunks/work-table.js";
const css = {
  code: ".get-work-list-content.svelte-15wa0au{display:flex;flex-direction:column;height:100%}",
  map: '{"version":3,"file":"get-work-list.svelte","sources":["get-work-list.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Dashboard from \\"../dashboards/dashboard.svelte\\";\\nimport UpdateHoursForm from \\"$lib/forms/update-hours-form.svelte\\";\\nimport DashboardTile from \\"../dashboards/dashboard-tile.svelte\\";\\nimport WorkTable from \\"../tables/work-table.svelte\\";\\nexport let getWorkItems;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"Get Work List View\\">\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<UpdateHoursForm />\\r\\n\\t\\t<button disabled>Export</button>\\r\\n\\t</div>\\r\\n\\t<div class=\\"get-work-list-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"27 Active Items\\">\\r\\n\\t\\t\\t<WorkTable work={getWorkItems}></WorkTable>\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.get-work-list-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoBC,qCAAuB,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACT"}'
};
const Get_work_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getWorkItems } = $$props;
  if ($$props.getWorkItems === void 0 && $$bindings.getWorkItems && getWorkItems !== void 0)
    $$bindings.getWorkItems(getWorkItems);
  $$result.css.add(css);
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, { title: "Get Work List View" }, {}, {
    content: () => {
      return `<div class="get-work-list-content svelte-15wa0au" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render($$result, { title: "27 Active Items" }, {}, {
        default: () => {
          return `${validate_component(Work_table, "WorkTable").$$render($$result, { work: getWorkItems }, {}, {})}`;
        }
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions">${validate_component(Update_hours_form, "UpdateHoursForm").$$render($$result, {}, {}, {})} <button disabled data-svelte-h="svelte-1ijstig">Export</button></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getWorkItems;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  mainRoute.set("/get-work");
  getWorkItems = $loggedUser && $loggedUser.getWorkAssigned().concat($loggedUser.getWorkAvailable());
  $$unsubscribe_loggedUser();
  return `${!$loggedUser ? `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>` : `${validate_component(Get_work_list, "GetWorkList").$$render($$result, { getWorkItems }, {}, {})}`}`;
});
export {
  Page as default
};
