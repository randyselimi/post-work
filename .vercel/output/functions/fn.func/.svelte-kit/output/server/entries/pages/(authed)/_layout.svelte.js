import { c as create_ssr_component, s as subscribe, v as validate_component, a as each, e as escape } from "../../../chunks/ssr.js";
import { p as previousRoutes, l as loggedUser, s as storedTeams, a as storedUsers, b as storedTasks, m as mainRoute } from "../../../chunks/db.js";
import { p as page } from "../../../chunks/stores.js";
import { T as Team_table } from "../../../chunks/team-table.js";
import { U as User_table } from "../../../chunks/user-table.js";
import { B as Back_button, F as Forward_button, T as Tall_avatar_chip } from "../../../chunks/tall-avatar-chip.js";
import { M as Modal } from "../../../chunks/modal.js";
import "../../../chunks/client.js";
import { W as Work_table } from "../../../chunks/work-table.js";
import { B as BROWSER } from "../../../chunks/prod-ssr.js";
const browser = BROWSER;
const css$1 = {
  code: ".detail-modal-content.svelte-1nn59ar{display:flex;align-items:stretch}.detail-modal-content-element.svelte-1nn59ar{width:50%}",
  map: '{"version":3,"file":"detail-modal.svelte","sources":["detail-modal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BackButton from \\"$lib/buttons/back-button.svelte\\";\\nimport ForwardButton from \\"$lib/buttons/forward-button.svelte\\";\\nimport Modal from \\"./modal.svelte\\";\\nimport { mainRoute, previousRoutes } from \\"$lib/db\\";\\nimport { page } from \\"$app/stores\\";\\nimport { softRoute, softRouteBack, softRouteNext } from \\"$lib/SoftRoute\\";\\nexport let showModal;\\nexport let detailOptions;\\n$:\\n  canGoBack = $previousRoutes && $previousRoutes.previous.length > 0;\\n$:\\n  canGoForward = $previousRoutes && $previousRoutes.current && $previousRoutes.current.next !== null;\\nlet selectedDetail = 0;\\nlet dialog;\\n$:\\n  if (dialog)\\n    showModal ? dialog.showModal() : dialog.close();\\n<\/script>\\r\\n\\r\\n<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\r\\n<Modal bind:showModal>\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<div style=\\"display: flex;\\">\\r\\n\\t\\t\\t<BackButton disabled={!canGoBack} on:click={(e) => softRouteBack(e)} />\\r\\n\\t\\t\\t<ForwardButton disabled={!canGoForward} on:click={(e) => softRouteNext(e)} />\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t<h2 slot=\\"header\\">Detail View</h2>\\r\\n\\t<fieldset class=\\"detail-modal-content\\">\\r\\n\\t\\t<legend>Detail View</legend>\\r\\n\\t\\t<div class=\\"detail-modal-content-element\\">\\r\\n\\t\\t\\t<slot name=\\"content\\"></slot>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"detail-modal-content-element detail-modal-folders\\">\\r\\n\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t{#each detailOptions as detailOption}\\r\\n\\t\\t\\t\\t\\t\\t<button on:click={() => (selectedDetail = detailOption.position)}\\r\\n\\t\\t\\t\\t\\t\\t\\t>{detailOption.title}</button\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t{#if selectedDetail === 0}\\r\\n\\t\\t\\t\\t\\t<slot name=\\"folder0\\"></slot>\\r\\n\\t\\t\\t\\t{:else if selectedDetail === 1}\\r\\n\\t\\t\\t\\t\\t<slot name=\\"folder1\\"></slot>\\r\\n\\t\\t\\t\\t{:else if selectedDetail === 2}\\r\\n\\t\\t\\t\\t\\t<slot name=\\"folder2\\"></slot>\\r\\n\\t\\t\\t\\t{:else if selectedDetail === 3}\\r\\n\\t\\t\\t\\t\\t<slot name=\\"folder3\\"></slot>\\r\\n\\t\\t\\t\\t{:else if selectedDetail === 4}\\r\\n\\t\\t\\t\\t\\t<slot name=\\"folder4\\"></slot>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</fieldset>\\r\\n\\t<div slot=\\"footer\\">\\r\\n\\t\\t<slot name=\\"footer\\"></slot>\\r\\n\\t</div>\\r\\n\\t<!-- svelte-ignore a11y-autofocus -->\\r\\n</Modal>\\r\\n\\r\\n<style>\\r\\n\\t.detail-modal-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: stretch;\\r\\n\\t}\\r\\n\\t.detail-modal-content-element {\\r\\n\\t\\twidth: 50%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+DC,oCAAsB,CACrB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,OACd,CACA,4CAA8B,CAC7B,KAAK,CAAE,GACR"}'
};
const Detail_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canGoBack;
  let canGoForward;
  let $previousRoutes, $$unsubscribe_previousRoutes;
  $$unsubscribe_previousRoutes = subscribe(previousRoutes, (value) => $previousRoutes = value);
  let { showModal } = $$props;
  let { detailOptions } = $$props;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.detailOptions === void 0 && $$bindings.detailOptions && detailOptions !== void 0)
    $$bindings.detailOptions(detailOptions);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    canGoBack = $previousRoutes && $previousRoutes.previous.length > 0;
    canGoForward = $previousRoutes && $previousRoutes.current && $previousRoutes.current.next !== null;
    $$rendered = ` ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer">${slots.footer ? slots.footer({}) : ``}</div>`;
        },
        header: () => {
          return `<h2 slot="header" data-svelte-h="svelte-1pbtsb4">Detail View</h2>`;
        },
        actions: () => {
          return `<div slot="actions"><div style="display: flex;">${validate_component(Back_button, "BackButton").$$render($$result, { disabled: !canGoBack }, {}, {})} ${validate_component(Forward_button, "ForwardButton").$$render($$result, { disabled: !canGoForward }, {}, {})}</div></div>`;
        },
        default: () => {
          return `<fieldset class="detail-modal-content svelte-1nn59ar"><legend data-svelte-h="svelte-1nhoro">Detail View</legend> <div class="detail-modal-content-element svelte-1nn59ar">${slots.content ? slots.content({}) : ``}</div> <div class="detail-modal-content-element detail-modal-folders svelte-1nn59ar"><div><div>${each(detailOptions, (detailOption) => {
            return `<button>${escape(detailOption.title)}</button>`;
          })}</div> ${`${slots.folder0 ? slots.folder0({}) : ``}`}</div></div></fieldset> `;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_previousRoutes();
  return $$rendered;
});
const Team_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const detailOptions = [
    { title: "Feed", position: 0 },
    { title: "Members", position: 1 },
    { title: "Connected Teams", position: 2 }
  ];
  let { team } = $$props;
  let { showModal = false } = $$props;
  if ($$props.team === void 0 && $$bindings.team && team !== void 0)
    $$bindings.team(team);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Detail_modal, "DetailModal").$$render(
      $$result,
      { detailOptions, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        folder2: () => {
          return `<div slot="folder2">${validate_component(Team_table, "TeamTable").$$render($$result, { teams: team.getConnectedTeams() }, {}, {})}</div>`;
        },
        folder1: () => {
          return `<div slot="folder1">${validate_component(User_table, "UserTable").$$render($$result, { users: team.getMembers() }, {}, {})}</div>`;
        },
        folder0: () => {
          return `<div slot="folder0" data-svelte-h="svelte-zo5pi5"><h2>This feature is not enabled in the pre-alpha</h2></div>`;
        },
        content: () => {
          return `<div slot="content"><h2>${escape(team.name)}</h2> <p data-svelte-h="svelte-82moo9">Team Details</p></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Work_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  let { work } = $$props;
  let { showModal = false } = $$props;
  const postedBy = work.getPostedBy();
  const assignedTo = work.getAssignedTo();
  const detailOptions = [{ title: "Feed", position: 0 }];
  const actions = ["Edit", "Delete"];
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Detail_modal, "DetailModal").$$render(
      $$result,
      { actions, detailOptions, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer">${work.status === "Sign-off" ? `<button data-svelte-h="svelte-ow72vs">Sign Off</button>` : `${work.status === "Assigned" ? `<button data-svelte-h="svelte-urizdj">Complete</button>` : `${work.status === "Pending" && work.postedBy !== $loggedUser.id ? `<button data-svelte-h="svelte-ktghph">Accept</button>` : ``}`}`} ${work.postedBy === $loggedUser.id ? `<button data-svelte-h="svelte-wrubx8">Delete</button> <button data-svelte-h="svelte-7kafuw">Cancel</button>` : ``}</div>`;
        },
        folder0: () => {
          return `<div slot="folder0" data-svelte-h="svelte-zo5pi5"><h2>This feature is not enabled in the pre-alpha</h2></div>`;
        },
        content: () => {
          return `<div slot="content"><h2>${escape(work.title)}</h2> <div style="display: flex; flex-direction: row;"><div><h3 data-svelte-h="svelte-110ug2u">Posted by</h3> ${validate_component(Tall_avatar_chip, "TallAvatarChip").$$render($$result, { user: postedBy }, {}, {})}</div> <div><h3 data-svelte-h="svelte-h6fked">Assigned to</h3> ${assignedTo !== null ? `${validate_component(Tall_avatar_chip, "TallAvatarChip").$$render($$result, { user: assignedTo }, {}, {})}` : `<h3 data-svelte-h="svelte-1d0xn4r">Unassigned</h3>`}</div></div> <p>Hours ${escape(work.hours)}</p> <p>Started ${escape(work.startDate)}</p> <p>Billing Folder ${escape(work.billingInfo.projectFolder)}</p> <p>Billing Code ${escape(work.billingInfo.projectCode)}</p> <p>Due ${escape(work.endDate)}</p> <p>Skills ${escape(work.skills)}</p> <p>${escape(work.description)}</p></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_loggedUser();
  return $$rendered;
});
const User_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { showModal = false } = $$props;
  user.team;
  const detailOptions = [
    { title: "Feed", position: 0 },
    { title: "Assigned", position: 1 },
    { title: "Posted", position: 2 }
  ];
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Detail_modal, "DetailModal").$$render(
      $$result,
      { detailOptions, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        folder2: () => {
          return `<div slot="folder2">${validate_component(Work_table, "WorkTable").$$render($$result, { work: user.getWorkPosted() }, {}, {})}</div>`;
        },
        folder1: () => {
          return `<div slot="folder1">${validate_component(Work_table, "WorkTable").$$render($$result, { work: user.getWorkAssigned() }, {}, {})}</div>`;
        },
        folder0: () => {
          return `<div slot="folder0" data-svelte-h="svelte-zo5pi5"><h2>This feature is not enabled in the pre-alpha</h2></div>`;
        },
        content: () => {
          return `<div slot="content">${validate_component(Tall_avatar_chip, "TallAvatarChip").$$render($$result, { user }, {}, {})} <button>${escape(user.getTeam().name)}</button> <h2>${escape(user.email)}</h2> <p>Skills: ${escape(user.skills)}</p></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".app-container.svelte-cpeqkr{display:flex}.app-title.svelte-cpeqkr{flex:1;font-size:4rem;margin:1rem 1rem 1rem 1rem}.app-main.svelte-cpeqkr{flex:8;height:70rem;margin:0rem 0rem}.app-profile.svelte-cpeqkr{flex:1;flex:1;font-size:4rem;margin:1rem 1rem 1rem 1rem;text-align:right}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../styles.css\\";\\nimport * as db from \\"$lib/db\\";\\nimport { loggedUser, mainRoute, previousRoutes } from \\"$lib/db\\";\\nimport { page } from \\"$app/stores\\";\\nimport TeamModal from \\"$lib/modals/team-modal.svelte\\";\\nimport WorkModal from \\"$lib/modals/work-modal.svelte\\";\\nimport UserModal from \\"$lib/modals/user-modal.svelte\\";\\nimport { storedTeams, storedUsers, storedTasks } from \\"$lib/db\\";\\nimport { browser } from \\"$app/environment\\";\\nimport { get } from \\"svelte/store\\";\\nimport TallAvatarChip from \\"$lib/chips/tall-avatar-chip.svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { softRoute } from \\"$lib/SoftRoute\\";\\nexport let data;\\n$:\\n  browser && $storedUsers.length && loggedUser.set(db.getUser(get(storedUsers).find((u) => u.email === data.loggedEmail).id));\\nstoredTeams.subscribe((val) => {\\n  if (browser)\\n    return localStorage.teams = JSON.stringify(val);\\n});\\nstoredUsers.subscribe((val) => {\\n  if (browser)\\n    return localStorage.users = JSON.stringify(val);\\n});\\nstoredTasks.subscribe((val) => {\\n  if (browser)\\n    return localStorage.tasks = JSON.stringify(val);\\n});\\nmainRoute.subscribe((val) => {\\n  previousRoutes.set({ current: null, previous: [] });\\n  if (browser && val)\\n    return localStorage.mainRoute = JSON.stringify(val);\\n});\\npreviousRoutes.subscribe((val) => {\\n  if (browser && val)\\n    return localStorage.previousRoutes = JSON.stringify(val);\\n});\\n$:\\n  browser && localStorage.mainRoute && localStorage.getItem(\\"mainRoute\\") !== \\"undefined\\" && mainRoute.set(JSON.parse(localStorage.mainRoute));\\n$:\\n  browser && localStorage.getItem(\\"previousRoutes\\") !== \\"undefined\\" && previousRoutes.set(JSON.parse(localStorage.previousRoutes));\\n$:\\n  showModal = $page.state.selected;\\n$:\\n  team = browser && $page.state.selected && $page.state.selected.team && db.getTeam($page.state.selected.team);\\n$:\\n  work = browser && $page.state.selected && $page.state.selected.work && db.getTask($page.state.selected.work);\\n$:\\n  user = browser && $page.state.selected && $page.state.selected.user && db.getUser($page.state.selected.user);\\n<\/script>\\r\\n\\r\\n<div class=\\"app-container\\">\\r\\n\\t<div>\\r\\n\\t\\t<h1 class=\\"app-title\\">Post</h1>\\r\\n\\t\\t<h1 class=\\"app-title\\">Work</h1>\\r\\n\\t</div>\\r\\n\\r\\n\\t<div class=\\"app-main\\">\\r\\n\\t\\t<slot />\\r\\n\\t</div>\\r\\n\\t<div style=\\"display: flex; flex-direction:column;\\" class=\\"app-profile\\">\\r\\n\\t\\t{#if $loggedUser}\\r\\n\\t\\t\\t<TallAvatarChip user={$loggedUser} />\\r\\n\\t\\t\\t<button on:click={(e) => softRoute(e, 'user', $loggedUser.id)}>View Profile</button>\\r\\n\\t\\t\\t<button on:click={() => goto('/logout')}>Logout</button>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n</div>\\r\\n{#if $page.state.selected}\\r\\n\\t{#if $page.state.selected.team && team}\\r\\n\\t\\t<TeamModal\\r\\n\\t\\t\\t{team}\\r\\n\\t\\t\\t{showModal}\\r\\n\\t\\t\\ton:close={() => {\\r\\n\\t\\t\\t\\thistory.back();\\r\\n\\t\\t\\t}}\\r\\n\\t\\t/>\\r\\n\\t{:else if $page.state.selected.work && work}\\r\\n\\t\\t<WorkModal\\r\\n\\t\\t\\t{work}\\r\\n\\t\\t\\t{showModal}\\r\\n\\t\\t\\ton:close={() => {\\r\\n\\t\\t\\t\\thistory.back();\\r\\n\\t\\t\\t}}\\r\\n\\t\\t/>\\r\\n\\t{:else if $page.state.selected.user && user}\\r\\n\\t\\t<UserModal\\r\\n\\t\\t\\t{user}\\r\\n\\t\\t\\t{showModal}\\r\\n\\t\\t\\ton:close={() => {\\r\\n\\t\\t\\t\\thistory.back();\\r\\n\\t\\t\\t}}\\r\\n\\t\\t/>\\r\\n\\t{/if}\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t.app-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t}\\r\\n\\t.app-title {\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tfont-size: 4rem;\\r\\n\\t\\tmargin: 1rem 1rem 1rem 1rem;\\r\\n\\t}\\r\\n\\t.app-main {\\r\\n\\t\\tflex: 8;\\r\\n\\t\\theight: 70rem;\\r\\n\\t\\tmargin: 0rem 0rem;\\r\\n\\t}\\r\\n\\t.app-profile {\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tfont-size: 4rem;\\r\\n\\t\\tmargin: 1rem 1rem 1rem 1rem;\\r\\n\\t\\ttext-align: right;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiGC,4BAAe,CACd,OAAO,CAAE,IACV,CACA,wBAAW,CACV,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IACxB,CACA,uBAAU,CACT,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CAAC,IACd,CACA,0BAAa,CACZ,IAAI,CAAE,CAAC,CACP,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,UAAU,CAAE,KACb"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal;
  let team;
  let work;
  let user;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_storedUsers;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_storedUsers = subscribe(storedUsers, (value) => value);
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  let { data } = $$props;
  storedTeams.subscribe((val) => {
  });
  storedUsers.subscribe((val) => {
  });
  storedTasks.subscribe((val) => {
  });
  mainRoute.subscribe((val) => {
    previousRoutes.set({ current: null, previous: [] });
  });
  previousRoutes.subscribe((val) => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  showModal = $page.state.selected;
  team = browser;
  work = browser;
  user = browser;
  $$unsubscribe_page();
  $$unsubscribe_storedUsers();
  $$unsubscribe_loggedUser();
  return `<div class="app-container svelte-cpeqkr"><div data-svelte-h="svelte-1gsm7fs"><h1 class="app-title svelte-cpeqkr">Post</h1> <h1 class="app-title svelte-cpeqkr">Work</h1></div> <div class="app-main svelte-cpeqkr">${slots.default ? slots.default({}) : ``}</div> <div style="display: flex; flex-direction:column;" class="app-profile svelte-cpeqkr">${$loggedUser ? `${validate_component(Tall_avatar_chip, "TallAvatarChip").$$render($$result, { user: $loggedUser }, {}, {})} <button data-svelte-h="svelte-1olnyxj">View Profile</button> <button data-svelte-h="svelte-17j222t">Logout</button>` : ``}</div></div> ${$page.state.selected ? `${$page.state.selected.team && team ? `${validate_component(Team_modal, "TeamModal").$$render($$result, { team, showModal }, {}, {})}` : `${$page.state.selected.work && work ? `${validate_component(Work_modal, "WorkModal").$$render($$result, { work, showModal }, {}, {})}` : `${$page.state.selected.user && user ? `${validate_component(User_modal, "UserModal").$$render($$result, { user, showModal }, {}, {})}` : ``}`}`}` : ``}`;
});
export {
  Layout as default
};
