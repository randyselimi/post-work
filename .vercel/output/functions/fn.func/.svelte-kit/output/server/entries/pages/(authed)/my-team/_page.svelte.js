import { c as create_ssr_component, v as validate_component, s as subscribe } from "../../../../chunks/ssr.js";
import { m as mainRoute, l as loggedUser } from "../../../../chunks/db.js";
import { D as Dashboard, a as Dashboard_tile } from "../../../../chunks/dashboard.js";
import { U as User_table } from "../../../../chunks/user-table.js";
const css = {
  code: ".get-work-list-content.svelte-15wa0au{display:flex;flex-direction:column;height:100%}",
  map: '{"version":3,"file":"my-team-list.svelte","sources":["my-team-list.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Dashboard from \\"../dashboards/dashboard.svelte\\";\\nimport DashboardTile from \\"../dashboards/dashboard-tile.svelte\\";\\nimport UserTable from \\"$lib/tables/user-table.svelte\\";\\nexport let myTeamUsers;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"My Team List View\\">\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<button>View Team</button>\\r\\n\\t\\t<button>Invite User</button>\\r\\n\\t\\t<button disabled>Export</button>\\r\\n\\t</div>\\r\\n\\t<div class=\\"get-work-list-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"27 Members\\">\\r\\n\\t\\t\\t<UserTable users={myTeamUsers}></UserTable>\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.get-work-list-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoBC,qCAAuB,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACT"}'
};
const My_team_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { myTeamUsers } = $$props;
  if ($$props.myTeamUsers === void 0 && $$bindings.myTeamUsers && myTeamUsers !== void 0)
    $$bindings.myTeamUsers(myTeamUsers);
  $$result.css.add(css);
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, { title: "My Team List View" }, {}, {
    content: () => {
      return `<div class="get-work-list-content svelte-15wa0au" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render($$result, { title: "27 Members" }, {}, {
        default: () => {
          return `${validate_component(User_table, "UserTable").$$render($$result, { users: myTeamUsers }, {}, {})}`;
        }
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions" data-svelte-h="svelte-11u79lc"><button>View Team</button> <button>Invite User</button> <button disabled>Export</button></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let team;
  let myTeamUsers;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  mainRoute.set("/my-team");
  team = $loggedUser && $loggedUser.getTeam();
  myTeamUsers = team && team.getMembers();
  $$unsubscribe_loggedUser();
  return `${!$loggedUser ? `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>` : `${validate_component(My_team_list, "MyTeamList").$$render($$result, { myTeamUsers }, {}, {})}`}`;
});
export {
  Page as default
};
