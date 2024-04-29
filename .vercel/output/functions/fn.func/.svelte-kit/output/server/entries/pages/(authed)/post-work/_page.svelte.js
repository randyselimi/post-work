import { c as create_ssr_component, v as validate_component, s as subscribe } from "../../../../chunks/ssr.js";
import { m as mainRoute, l as loggedUser } from "../../../../chunks/db.js";
import { D as Dashboard, a as Dashboard_tile } from "../../../../chunks/dashboard.js";
import { P as Post_task_form } from "../../../../chunks/post-task-form.js";
import { W as Work_table } from "../../../../chunks/work-table.js";
const css = {
  code: ".post-work-list-content.svelte-sujlxm{display:flex;flex-direction:column;height:100%}",
  map: '{"version":3,"file":"post-work-list.svelte","sources":["post-work-list.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Dashboard from \\"../dashboards/dashboard.svelte\\";\\nimport PostTaskForm from \\"$lib/forms/post-task-form.svelte\\";\\nimport DashboardTile from \\"../dashboards/dashboard-tile.svelte\\";\\nimport WorkTable from \\"../tables/work-table.svelte\\";\\nexport let postWorkItems;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"Post Work List View\\">\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<PostTaskForm />\\r\\n\\t\\t<button disabled>Export</button>\\r\\n\\t</div>\\r\\n\\t<div class=\\"post-work-list-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"27 Active Items\\">\\r\\n\\t\\t\\t<WorkTable work={postWorkItems}></WorkTable>\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.post-work-list-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoBC,qCAAwB,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACT"}'
};
const Post_work_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postWorkItems } = $$props;
  if ($$props.postWorkItems === void 0 && $$bindings.postWorkItems && postWorkItems !== void 0)
    $$bindings.postWorkItems(postWorkItems);
  $$result.css.add(css);
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, { title: "Post Work List View" }, {}, {
    content: () => {
      return `<div class="post-work-list-content svelte-sujlxm" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render($$result, { title: "27 Active Items" }, {}, {
        default: () => {
          return `${validate_component(Work_table, "WorkTable").$$render($$result, { work: postWorkItems }, {}, {})}`;
        }
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions">${validate_component(Post_task_form, "PostTaskForm").$$render($$result, {}, {}, {})} <button disabled data-svelte-h="svelte-1ijstig">Export</button></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let postWorkItems;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  mainRoute.set("/post-work");
  postWorkItems = $loggedUser && $loggedUser.getWorkPosted();
  $$unsubscribe_loggedUser();
  return `${!$loggedUser ? `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>` : `${validate_component(Post_work_list, "PostWorkList").$$render($$result, { postWorkItems }, {}, {})}`}`;
});
export {
  Page as default
};
