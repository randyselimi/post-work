import { c as create_ssr_component, v as validate_component, s as subscribe } from "../../../../chunks/ssr.js";
import { m as mainRoute, l as loggedUser } from "../../../../chunks/db.js";
import { D as Dashboard, a as Dashboard_tile } from "../../../../chunks/dashboard.js";
import { T as Team_table } from "../../../../chunks/team-table.js";
const css = {
  code: ".get-work-list-content.svelte-15wa0au{display:flex;flex-direction:column;height:100%}",
  map: '{"version":3,"file":"connected-teams-list.svelte","sources":["connected-teams-list.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Dashboard from \\"../dashboards/dashboard.svelte\\";\\nimport DashboardTile from \\"../dashboards/dashboard-tile.svelte\\";\\nimport TeamTable from \\"$lib/tables/team-table.svelte\\";\\nexport let connectedTeams;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"Connected Teams List View\\">\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<button>Connect Team</button>\\r\\n\\t\\t<button disabled>Export</button>\\r\\n\\t</div>\\r\\n\\t<div class=\\"get-work-list-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"1 Team\\">\\r\\n\\t\\t\\t<TeamTable teams={connectedTeams}></TeamTable>\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.get-work-list-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmBC,qCAAuB,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACT"}'
};
const Connected_teams_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { connectedTeams } = $$props;
  if ($$props.connectedTeams === void 0 && $$bindings.connectedTeams && connectedTeams !== void 0)
    $$bindings.connectedTeams(connectedTeams);
  $$result.css.add(css);
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, { title: "Connected Teams List View" }, {}, {
    content: () => {
      return `<div class="get-work-list-content svelte-15wa0au" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render($$result, { title: "1 Team" }, {}, {
        default: () => {
          return `${validate_component(Team_table, "TeamTable").$$render($$result, { teams: connectedTeams }, {}, {})}`;
        }
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions" data-svelte-h="svelte-1ajwnwe"><button>Connect Team</button> <button disabled>Export</button></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let team;
  let connectedTeams;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  mainRoute.set("/connected-teams");
  team = $loggedUser && $loggedUser.getTeam();
  connectedTeams = team && team.getConnectedTeams();
  $$unsubscribe_loggedUser();
  return `${!$loggedUser ? `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>` : `${validate_component(Connected_teams_list, "ConnectedTeamsList").$$render($$result, { connectedTeams }, {}, {})}`}`;
});
export {
  Page as default
};
