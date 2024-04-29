import { c as create_ssr_component, v as validate_component, a as each, e as escape, s as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import { l as loggedUser, m as mainRoute, b as storedTasks, g as getTeam } from "../../../chunks/db.js";
import { B as Back_button, F as Forward_button, A as Avatar, a as Team_color_chip, T as Tall_avatar_chip } from "../../../chunks/tall-avatar-chip.js";
import "../../../chunks/client.js";
import { S as Skill_chip, P as Post_task_form } from "../../../chunks/post-task-form.js";
import { D as Dashboard, a as Dashboard_tile } from "../../../chunks/dashboard.js";
import { U as Update_hours_form } from "../../../chunks/update-hours-form.js";
const css$b = {
  code: ".carousel.svelte-l271gb{display:flex;justify-content:space-between;align-items:center}.carousel-content.svelte-l271gb{flex:2;overflow-x:auto;overflow-y:hidden;display:flex;justify-content:center}",
  map: '{"version":3,"file":"carousel.svelte","sources":["carousel.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BackButton from \\"$lib/buttons/back-button.svelte\\";\\nimport ForwardButton from \\"$lib/buttons/forward-button.svelte\\";\\nexport let items;\\nlet index = 0;\\nlet size = 5;\\n$:\\n  current = items.length && getSlice(index);\\n$:\\n  canGoBack = index - size >= 0;\\n$:\\n  canGoForward = index + size < items.length;\\nfunction getSlice() {\\n  let sliceAmount = size;\\n  if (items.length < index + size) {\\n    sliceAmount = items.length;\\n  }\\n  return items.slice(index, index + sliceAmount);\\n}\\nfunction next() {\\n  if (index + size < items.length) {\\n    index += size;\\n  }\\n  console.log(index);\\n}\\nfunction previous() {\\n  if (index - size >= 0) {\\n    index -= size;\\n  }\\n  console.log(index);\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"carousel\\">\\r\\n\\t<BackButton disabled={!canGoBack} on:click={() => previous()} />\\r\\n\\t<!-- <fieldset> -->\\r\\n\\t<div class=\\"carousel-content\\">\\r\\n\\t\\t{#if current && current.length > 0}\\r\\n\\t\\t\\t{#each current as item}\\r\\n\\t\\t\\t\\t<slot {item} />\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t{:else}\\r\\n\\t\\t\\t<p>No items to display</p>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\t<!-- </fieldset> -->\\r\\n\\t<ForwardButton disabled={!canGoForward} on:click={() => next()} />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.carousel {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\t.carousel-content {\\r\\n\\t\\tflex: 2;\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t\\toverflow-y: hidden;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiDC,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACd,CACA,+BAAkB,CACjB,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAClB"}'
};
let size = 5;
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current;
  let canGoBack;
  let canGoForward;
  let { items } = $$props;
  let index = 0;
  function getSlice() {
    let sliceAmount = size;
    if (items.length < index + size) {
      sliceAmount = items.length;
    }
    return items.slice(index, index + sliceAmount);
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$b);
  current = items.length && getSlice();
  canGoBack = index - size >= 0;
  canGoForward = index + size < items.length;
  return `<div class="carousel svelte-l271gb">${validate_component(Back_button, "BackButton").$$render($$result, { disabled: !canGoBack }, {}, {})}  <div class="carousel-content svelte-l271gb">${current && current.length > 0 ? `${each(current, (item) => {
    return `${slots.default ? slots.default({ item }) : ``}`;
  })}` : `<p data-svelte-h="svelte-1uhmx2i">No items to display</p>`}</div>  ${validate_component(Forward_button, "ForwardButton").$$render($$result, { disabled: !canGoForward }, {}, {})} </div>`;
});
const css$a = {
  code: ".card.svelte-1ova7rs{background-color:#ffffff;display:flex;flex-direction:column;align-items:center;box-shadow:rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,\r\n			rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;margin:0.25em;padding:0.5em;border-radius:10px;height:12rem;width:9rem}",
  map: '{"version":3,"file":"card.svelte","sources":["card.svelte"],"sourcesContent":["<script>\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"card\\">\\r\\n\\t<slot />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.card {\\r\\n\\t\\tbackground-color: #ffffff;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tbox-shadow:\\r\\n\\t\\t\\trgba(9, 30, 66, 0.25) 0px 4px 8px -2px,\\r\\n\\t\\t\\trgba(9, 30, 66, 0.08) 0px 0px 0px 1px;\\r\\n\\t\\tmargin: 0.25em;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t\\tborder-radius: 10px;\\r\\n\\t\\theight: 12rem;\\r\\n\\t\\twidth: 9rem;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAQC,oBAAM,CACL,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CACT,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC;AAC1C,GAAG,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACtC,MAAM,CAAE,MAAM,CACd,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IACR"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<div class="card svelte-1ova7rs">${slots.default ? slots.default({}) : ``} </div>`;
});
const css$9 = {
  code: ".divider-container.svelte-951wp6{display:flex;align-items:center;justify-content:center;width:100%;height:1rem}.dash.svelte-951wp6{border:1px solid rgb(0, 0, 0);width:100%;height:0px}",
  map: '{"version":3,"file":"medium-divider.svelte","sources":["medium-divider.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let text = \\"\\";\\n<\/script>\\r\\n\\r\\n<!-- <div class=\\"container\\"> -->\\r\\n\\r\\n{#if text}\\r\\n\\t<div class=\\"divider-container\\">\\r\\n\\t\\t<div class=\\"dash\\" />\\r\\n\\t\\t<p style=\\"padding: 0 8px; font-size: .6rem; white-space: nowrap;\\">{text}</p>\\r\\n\\t\\t<div class=\\"dash\\" />\\r\\n\\t</div>\\r\\n{:else}\\r\\n\\t<div class=\\"divider-container\\">\\r\\n\\t\\t<div class=\\"dash\\" />\\r\\n\\t</div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t.divider-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 1rem;\\r\\n\\t}\\r\\n\\t.dash {\\r\\n\\t\\tborder: 1px solid rgb(0, 0, 0);\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 0px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkBC,gCAAmB,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT,CACA,mBAAM,CACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC9B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GACT"}'
};
const Medium_divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$9);
  return ` ${text ? `<div class="divider-container svelte-951wp6"><div class="dash svelte-951wp6"></div> <p style="padding: 0 8px; font-size: .6rem; white-space: nowrap;">${escape(text)}</p> <div class="dash svelte-951wp6"></div></div>` : `<div class="divider-container svelte-951wp6" data-svelte-h="svelte-o8dtqw"><div class="dash svelte-951wp6"></div></div>`}`;
});
const css$8 = {
  code: ".content.svelte-vf3pnq{height:75%}.footer.svelte-vf3pnq{height:25%;display:flex;justify-content:center;align-items:flex-end}",
  map: `{"version":3,"file":"action-card.svelte","sources":["action-card.svelte"],"sourcesContent":["<script>\\r\\n\\timport Card from './card.svelte';\\r\\n\\timport MediumDivider from '$lib/dividers/medium-divider.svelte';\\r\\n<\/script>\\r\\n\\r\\n<Card>\\r\\n\\t<div class=\\"content\\">\\r\\n\\t\\t<slot />\\r\\n\\t</div>\\r\\n\\t<MediumDivider text=\\"\\"></MediumDivider>\\r\\n\\t<div class=\\"footer\\">\\r\\n\\t\\t<slot name=\\"footer\\" />\\r\\n\\t</div>\\r\\n</Card>\\r\\n\\r\\n<style>\\r\\n\\t.content {\\r\\n\\t\\theight: 75%;\\r\\n\\t}\\r\\n\\t.footer {\\r\\n\\t\\theight: 25%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: flex-end;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgBC,sBAAS,CACR,MAAM,CAAE,GACT,CACA,qBAAQ,CACP,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,QACd"}`
};
const Action_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="content svelte-vf3pnq">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Medium_divider, "MediumDivider").$$render($$result, { text: "" }, {}, {})} <div class="footer svelte-vf3pnq">${slots.footer ? slots.footer({}) : ``}</div>`;
    }
  })}`;
});
const css$7 = {
  code: ".tall-avatar-chip-title.svelte-fljbbo{font-size:0.7rem;margin-top:0;margin-bottom:0}.tall-avatar-chip-container.svelte-fljbbo{display:flex;justify-content:space-evenly;align-items:center;flex-direction:row}.tall-avatar-chip-element.svelte-fljbbo{font-size:0.6rem;margin-top:0;margin-bottom:0;margin-left:1px;text-overflow:clip;overflow:hidden}.tall-avatar-chip-element-container.svelte-fljbbo{display:flex;align-items:baseline}",
  map: '{"version":3,"file":"wide-avatar-chip.svelte","sources":["wide-avatar-chip.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Avatar from \\"$lib/avatar.svelte\\";\\nimport TeamColorChip from \\"./team-color-chip.svelte\\";\\nexport let user;\\n<\/script>\\r\\n\\r\\n<div class=\\"tall-avatar-chip-container\\">\\r\\n\\t<Avatar size={32} email={user.email} />\\r\\n\\t<div>\\r\\n\\t\\t<h4 class=\\"tall-avatar-chip-title\\">{user.fullName}</h4>\\r\\n\\t\\t<div class=\\"tall-avatar-chip-element-container\\">\\r\\n\\t\\t\\t<TeamColorChip team={user.team} />\\r\\n\\t\\t\\t<p class=\\"tall-avatar-chip-element\\">{user.role}</p>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.tall-avatar-chip-title {\\r\\n\\t\\tfont-size: 0.7rem;\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tmargin-bottom: 0;\\r\\n\\t}\\r\\n\\t.tall-avatar-chip-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-evenly;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t}\\r\\n\\t.tall-avatar-chip-element {\\r\\n\\t\\tfont-size: 0.6rem;\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tmargin-bottom: 0;\\r\\n\\t\\tmargin-left: 1px;\\r\\n\\t\\ttext-overflow: clip;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.tall-avatar-chip-element-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: baseline;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiBC,qCAAwB,CACvB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CAChB,CACA,yCAA4B,CAC3B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACjB,CACA,uCAA0B,CACzB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CAAC,CAChB,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MACX,CACA,iDAAoC,CACnC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QACd"}'
};
const Wide_avatar_chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$7);
  return `<div class="tall-avatar-chip-container svelte-fljbbo">${validate_component(Avatar, "Avatar").$$render($$result, { size: 32, email: user.email }, {}, {})} <div><h4 class="tall-avatar-chip-title svelte-fljbbo">${escape(user.fullName)}</h4> <div class="tall-avatar-chip-element-container svelte-fljbbo">${validate_component(Team_color_chip, "TeamColorChip").$$render($$result, { team: user.team }, {}, {})} <p class="tall-avatar-chip-element svelte-fljbbo">${escape(user.role)}</p></div></div> </div>`;
});
const css$6 = {
  code: ".detail-container.svelte-1byyxxc{display:flex;justify-content:space-between}",
  map: `{"version":3,"file":"assigned-to-you-card.svelte","sources":["assigned-to-you-card.svelte"],"sourcesContent":["<script lang=\\"ts\\">import * as db from \\"$lib/db\\";\\nimport \\"./card.css\\";\\nimport ActionCard from \\"./action-card.svelte\\";\\nimport { softRoute } from \\"../SoftRoute\\";\\nimport WideAvatarChip from \\"$lib/chips/wide-avatar-chip.svelte\\";\\nimport MediumDivider from \\"$lib/dividers/medium-divider.svelte\\";\\nimport SkillChip from \\"$lib/chips/skill-chip.svelte\\";\\nexport let work;\\nexport let user;\\n<\/script>\\r\\n\\r\\n<ActionCard>\\r\\n\\t<div tabindex=\\"0\\" role=\\"button\\" on:click={(e) => softRoute(e, 'work', work.id)}>\\r\\n\\t\\t<h4>{work.title}</h4>\\r\\n\\t\\t<div>\\r\\n\\t\\t\\t<div class=\\"detail-container\\">\\r\\n\\t\\t\\t\\t<div class=\\"vertical-detail\\">\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-top\\">Hours</p>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-bottom\\">{work.hours}</p>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-top\\">Due</p>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-bottom\\">{work.endDate}</p>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"horizontal-detail\\">\\r\\n\\t\\t\\t\\t<p class=\\"horizontal-detail-right\\">\\r\\n\\t\\t\\t\\t\\t<span style=\\"padding-bottom:1px\\">Skills:</span>\\r\\n\\t\\t\\t\\t\\t{#each work.skills as skill}\\r\\n\\t\\t\\t\\t\\t\\t<SkillChip {skill} />\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t{#if work.status === 'Sign-off'}\\r\\n\\t\\t<MediumDivider text=\\"Pending Sign-off\\"></MediumDivider>\\r\\n\\t{:else}\\r\\n\\t\\t<MediumDivider text=\\"Doing for\\"></MediumDivider>\\r\\n\\t{/if}\\r\\n\\t<div tabindex=\\"0\\" role=\\"button\\" on:click={(e) => softRoute(e, 'user', user.id)}>\\r\\n\\t\\t<WideAvatarChip {user}></WideAvatarChip>\\r\\n\\t</div>\\r\\n\\r\\n\\t<div slot=\\"footer\\">\\r\\n\\t\\t{#if work.status === 'Assigned'}\\r\\n\\t\\t\\t<button on:click={() => db.updateState(work.id, 'Sign-off')}>Complete</button>\\r\\n\\t\\t{:else if work.status === 'Late'}\\r\\n\\t\\t\\t<button disabled>Contact</button>\\r\\n\\t\\t{:else}\\r\\n\\t\\t\\t<button disabled>No Action</button>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n</ActionCard>\\r\\n\\r\\n<style>\\r\\n\\t.detail-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwDC,gCAAkB,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB"}`
};
const Assigned_to_you_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { work } = $$props;
  let { user } = $$props;
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$6);
  return `${validate_component(Action_card, "ActionCard").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="footer">${work.status === "Assigned" ? `<button data-svelte-h="svelte-urizdj">Complete</button>` : `${work.status === "Late" ? `<button disabled data-svelte-h="svelte-eu3yya">Contact</button>` : `<button disabled data-svelte-h="svelte-6pe005">No Action</button>`}`}</div>`;
    },
    default: () => {
      return `<div tabindex="0" role="button"><h4>${escape(work.title)}</h4> <div><div class="detail-container svelte-1byyxxc"><div class="vertical-detail"><p class="vertical-detail-top" data-svelte-h="svelte-wn1sjs">Hours</p> <p class="vertical-detail-bottom">${escape(work.hours)}</p></div> <div><p class="vertical-detail-top" data-svelte-h="svelte-1133ni5">Due</p> <p class="vertical-detail-bottom">${escape(work.endDate)}</p></div></div> <div class="horizontal-detail"><p class="horizontal-detail-right"><span style="padding-bottom:1px" data-svelte-h="svelte-1gb83ms">Skills:</span> ${each(work.skills, (skill) => {
        return `${validate_component(Skill_chip, "SkillChip").$$render($$result, { skill }, {}, {})}`;
      })}</p></div></div></div> ${work.status === "Sign-off" ? `${validate_component(Medium_divider, "MediumDivider").$$render($$result, { text: "Pending Sign-off" }, {}, {})}` : `${validate_component(Medium_divider, "MediumDivider").$$render($$result, { text: "Doing for" }, {}, {})}`} <div tabindex="0" role="button">${validate_component(Wide_avatar_chip, "WideAvatarChip").$$render($$result, { user }, {}, {})}</div>`;
    }
  })}`;
});
const Assigned_to_you_carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { assignedToYouItems } = $$props;
  console.log(assignedToYouItems);
  if ($$props.assignedToYouItems === void 0 && $$bindings.assignedToYouItems && assignedToYouItems !== void 0)
    $$bindings.assignedToYouItems(assignedToYouItems);
  return `${validate_component(Carousel, "Carousel").$$render($$result, { items: assignedToYouItems }, {}, {
    default: ({ item: card }) => {
      return `${validate_component(Assigned_to_you_card, "AssignedToYouCard").$$render($$result, { work: card, user: card.getPostedBy() }, {}, {})}`;
    }
  })}`;
});
const css$5 = {
  code: ".detail-container.svelte-1byyxxc{display:flex;justify-content:space-between}",
  map: `{"version":3,"file":"opportunity-card.svelte","sources":["opportunity-card.svelte"],"sourcesContent":["<script lang=\\"ts\\">import * as db from \\"$lib/db\\";\\nimport { softRoute } from \\"../SoftRoute\\";\\nimport ActionCard from \\"./action-card.svelte\\";\\nimport WideAvatarChip from \\"$lib/chips/wide-avatar-chip.svelte\\";\\nimport MediumDivider from \\"$lib/dividers/medium-divider.svelte\\";\\nimport { loggedUser } from \\"$lib/db\\";\\nimport SkillChip from \\"$lib/chips/skill-chip.svelte\\";\\nexport let work;\\nexport let user;\\n<\/script>\\r\\n\\r\\n<ActionCard>\\r\\n\\t<div tabindex=\\"0\\" role=\\"button\\" on:click={(e) => softRoute(e, 'work', work.id)}>\\r\\n\\t\\t<h4>{work.title}</h4>\\r\\n\\t\\t<div>\\r\\n\\t\\t\\t<div class=\\"detail-container\\">\\r\\n\\t\\t\\t\\t<div class=\\"vertical-detail\\">\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-top\\">Hours</p>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-bottom\\">{work.hours}</p>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-top\\">Due</p>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-bottom\\">{work.endDate}</p>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"horizontal-detail\\">\\r\\n\\t\\t\\t\\t<p class=\\"horizontal-detail-right\\">\\r\\n\\t\\t\\t\\t\\tSkills: {#each work.skills as skill}\\r\\n\\t\\t\\t\\t\\t\\t<SkillChip {skill} />\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t<MediumDivider text=\\"Posted By\\"></MediumDivider>\\r\\n\\t<div tabindex=\\"0\\" role=\\"button\\" on:click={(e) => softRoute(e, 'user', user.id)}>\\r\\n\\t\\t<WideAvatarChip {user}></WideAvatarChip>\\r\\n\\t</div>\\r\\n\\t<div slot=\\"footer\\">\\r\\n\\t\\t<button on:click={() => db.assignTask(work.id, $loggedUser.id)}>Accept</button>\\r\\n\\t</div>\\r\\n</ActionCard>\\r\\n\\r\\n<style>\\r\\n\\t.detail-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4CC,gCAAkB,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB"}`
};
const Opportunity_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => value);
  let { work } = $$props;
  let { user } = $$props;
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$5);
  $$unsubscribe_loggedUser();
  return `${validate_component(Action_card, "ActionCard").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="footer"><button data-svelte-h="svelte-ktghph">Accept</button></div>`;
    },
    default: () => {
      return `<div tabindex="0" role="button"><h4>${escape(work.title)}</h4> <div><div class="detail-container svelte-1byyxxc"><div class="vertical-detail"><p class="vertical-detail-top" data-svelte-h="svelte-wn1sjs">Hours</p> <p class="vertical-detail-bottom">${escape(work.hours)}</p></div> <div><p class="vertical-detail-top" data-svelte-h="svelte-1133ni5">Due</p> <p class="vertical-detail-bottom">${escape(work.endDate)}</p></div></div> <div class="horizontal-detail"><p class="horizontal-detail-right">Skills: ${each(work.skills, (skill) => {
        return `${validate_component(Skill_chip, "SkillChip").$$render($$result, { skill }, {}, {})}`;
      })}</p></div></div></div> ${validate_component(Medium_divider, "MediumDivider").$$render($$result, { text: "Posted By" }, {}, {})} <div tabindex="0" role="button">${validate_component(Wide_avatar_chip, "WideAvatarChip").$$render($$result, { user }, {}, {})}</div>`;
    }
  })}`;
});
function hasAvailability(weeks2) {
  return weeks2.find((week) => week.days.find((day) => day.hours));
}
const Opportunities_carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let weeks;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  let { opportunityItems } = $$props;
  if ($$props.opportunityItems === void 0 && $$bindings.opportunityItems && opportunityItems !== void 0)
    $$bindings.opportunityItems(opportunityItems);
  weeks = $loggedUser && $loggedUser.availability;
  $$unsubscribe_loggedUser();
  return `${weeks && !hasAvailability(weeks) ? `<h3 style="text-align: center;" data-svelte-h="svelte-cxw8p7">Please update available hours to see opportunities</h3>` : `${validate_component(Carousel, "Carousel").$$render($$result, { items: opportunityItems }, {}, {
    default: ({ item: card }) => {
      return `${validate_component(Opportunity_card, "OpportunityCard").$$render($$result, { work: card, user: card.getPostedBy() }, {}, {})}`;
    }
  })}`}`;
});
const css$4 = {
  code: ".get-work-content.svelte-12vce71{display:flex;flex-direction:column;height:100%}",
  map: '{"version":3,"file":"get-work-dashboard.svelte","sources":["get-work-dashboard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import AssignedToYouCarousel from \\"../carousel/assigned-to-you-carousel.svelte\\";\\nimport DashboardTile from \\"./dashboard-tile.svelte\\";\\nimport Dashboard from \\"./dashboard.svelte\\";\\nimport OpportunitiesCarousel from \\"../carousel/opportunities-carousel.svelte\\";\\nimport UpdateHoursForm from \\"$lib/forms/update-hours-form.svelte\\";\\nexport let opportunityItems;\\nexport let assignedToYouItems;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"Get Work\\" redirect=\\"get-work\\">\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<UpdateHoursForm />\\r\\n\\t</div>\\r\\n\\t<div class=\\"get-work-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"Opportunities\\" redirect=\\"get-work\\">\\r\\n\\t\\t\\t<p slot=\\"subtext\\" style=\\"margin-top: 0; margin-bottom: .5rem\\" class=\\"dashboard-tile-subtitle\\">\\r\\n\\t\\t\\t\\t{opportunityItems.length} tasks available\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<OpportunitiesCarousel {opportunityItems} />\\r\\n\\t\\t</DashboardTile>\\r\\n\\t\\t<DashboardTile title=\\"Assigned to You\\" redirect=\\"get-work\\">\\r\\n\\t\\t\\t<p slot=\\"subtext\\" style=\\"margin-top: 0; margin-bottom: .5rem\\" class=\\"dashboard-tile-subtitle\\">\\r\\n\\t\\t\\t\\t{assignedToYouItems.length} tasks assigned to you\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<AssignedToYouCarousel {assignedToYouItems} />\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.get-work-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8BC,gCAAkB,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACT"}'
};
const Get_work_dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { opportunityItems } = $$props;
  let { assignedToYouItems } = $$props;
  if ($$props.opportunityItems === void 0 && $$bindings.opportunityItems && opportunityItems !== void 0)
    $$bindings.opportunityItems(opportunityItems);
  if ($$props.assignedToYouItems === void 0 && $$bindings.assignedToYouItems && assignedToYouItems !== void 0)
    $$bindings.assignedToYouItems(assignedToYouItems);
  $$result.css.add(css$4);
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, { title: "Get Work", redirect: "get-work" }, {}, {
    content: () => {
      return `<div class="get-work-content svelte-12vce71" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render(
        $$result,
        {
          title: "Opportunities",
          redirect: "get-work"
        },
        {},
        {
          subtext: () => {
            return `<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">${escape(opportunityItems.length)} tasks available</p>`;
          },
          default: () => {
            return `${validate_component(Opportunities_carousel, "OpportunitiesCarousel").$$render($$result, { opportunityItems }, {}, {})}`;
          }
        }
      )} ${validate_component(Dashboard_tile, "DashboardTile").$$render(
        $$result,
        {
          title: "Assigned to You",
          redirect: "get-work"
        },
        {},
        {
          subtext: () => {
            return `<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">${escape(assignedToYouItems.length)} tasks assigned to you</p>`;
          },
          default: () => {
            return `${validate_component(Assigned_to_you_carousel, "AssignedToYouCarousel").$$render($$result, { assignedToYouItems }, {}, {})}`;
          }
        }
      )}</div>`;
    },
    actions: () => {
      return `<div slot="actions">${validate_component(Update_hours_form, "UpdateHoursForm").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
const css$3 = {
  code: ".detail-container.svelte-1byyxxc{display:flex;justify-content:space-between}",
  map: `{"version":3,"file":"currently-posted-card.svelte","sources":["currently-posted-card.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ActionCard from \\"./action-card.svelte\\";\\nimport { softRoute } from \\"../SoftRoute\\";\\nimport SkillChip from \\"$lib/chips/skill-chip.svelte\\";\\nexport let work;\\n<\/script>\\r\\n\\r\\n<ActionCard>\\r\\n\\t<div tabindex=\\"0\\" role=\\"button\\" on:click={(e) => softRoute(e, 'work', work.id)}>\\r\\n\\t\\t<h4>{work.title}</h4>\\r\\n\\t\\t<div>\\r\\n\\t\\t\\t<div class=\\"detail-container\\">\\r\\n\\t\\t\\t\\t<div class=\\"vertical-detail\\">\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-top\\">Hours</p>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-bottom\\">{work.hours}</p>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\"vertical-detail\\">\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-top\\">Due</p>\\r\\n\\t\\t\\t\\t\\t<p class=\\"vertical-detail-bottom\\">{work.endDate}</p>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"horizontal-detail\\">\\r\\n\\t\\t\\t\\t<p class=\\"horizontal-detail-right\\">\\r\\n\\t\\t\\t\\t\\tSkills: {#each work.skills as skill}\\r\\n\\t\\t\\t\\t\\t\\t<SkillChip {skill} />\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t<div slot=\\"footer\\">\\r\\n\\t\\t<button disabled>No Action</button>\\r\\n\\t</div>\\r\\n</ActionCard>\\r\\n\\r\\n<style>\\r\\n\\t.detail-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmCC,gCAAkB,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB"}`
};
const Currently_posted_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { work } = $$props;
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  $$result.css.add(css$3);
  return `${validate_component(Action_card, "ActionCard").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="footer" data-svelte-h="svelte-6gpt63"><button disabled>No Action</button></div>`;
    },
    default: () => {
      return `<div tabindex="0" role="button"><h4>${escape(work.title)}</h4> <div><div class="detail-container svelte-1byyxxc"><div class="vertical-detail"><p class="vertical-detail-top" data-svelte-h="svelte-wn1sjs">Hours</p> <p class="vertical-detail-bottom">${escape(work.hours)}</p></div> <div class="vertical-detail"><p class="vertical-detail-top" data-svelte-h="svelte-1133ni5">Due</p> <p class="vertical-detail-bottom">${escape(work.endDate)}</p></div></div> <div class="horizontal-detail"><p class="horizontal-detail-right">Skills: ${each(work.skills, (skill) => {
        return `${validate_component(Skill_chip, "SkillChip").$$render($$result, { skill }, {}, {})}`;
      })}</p></div></div></div>`;
    }
  })}`;
});
const Currently_posted_carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentlyPostedItems } = $$props;
  if ($$props.currentlyPostedItems === void 0 && $$bindings.currentlyPostedItems && currentlyPostedItems !== void 0)
    $$bindings.currentlyPostedItems(currentlyPostedItems);
  return `${validate_component(Carousel, "Carousel").$$render($$result, { items: currentlyPostedItems }, {}, {
    default: ({ item: card }) => {
      return `${validate_component(Currently_posted_card, "CurrentlyPostedCard").$$render($$result, { work: card }, {}, {})}`;
    }
  })}`;
});
const In_progress_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { work } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  return `${validate_component(Action_card, "ActionCard").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="footer">${work.status === "Sign-off" ? `<button data-svelte-h="svelte-ow72vs">Sign Off</button>` : `${work.status === "Late" ? `<button disabled data-svelte-h="svelte-eu3yya">Contact</button>` : `<button disabled data-svelte-h="svelte-6pe005">No Action</button>`}`}</div>`;
    },
    default: () => {
      return `<div tabindex="0" role="button">${validate_component(Tall_avatar_chip, "TallAvatarChip").$$render($$result, { user }, {}, {})}</div> ${work.status === "Sign-off" ? `${validate_component(Medium_divider, "MediumDivider").$$render($$result, { text: "Has completed" }, {}, {})}` : `${validate_component(Medium_divider, "MediumDivider").$$render($$result, { text: "Is Working On" }, {}, {})}`} <div tabindex="0" role="button"><h4>${escape(work.title)}</h4> <p class="segment-element">Hours: ${escape(work.hours)} Due: 7 days</p></div>`;
    }
  })}`;
});
const In_progress_carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inProgressItems } = $$props;
  if ($$props.inProgressItems === void 0 && $$bindings.inProgressItems && inProgressItems !== void 0)
    $$bindings.inProgressItems(inProgressItems);
  return `${validate_component(Carousel, "Carousel").$$render($$result, { items: inProgressItems }, {}, {
    default: ({ item: card }) => {
      return `${validate_component(In_progress_card, "InProgressCard").$$render($$result, { user: card.getAssignedTo(), work: card }, {}, {})}`;
    }
  })}`;
});
const css$2 = {
  code: ".post-work-content.svelte-46l5gz{display:flex;flex-direction:column;height:100%}",
  map: '{"version":3,"file":"post-work-dashboard.svelte","sources":["post-work-dashboard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Dashboard from \\"./dashboard.svelte\\";\\nimport PostTaskForm from \\"../forms/post-task-form.svelte\\";\\nimport DashboardTile from \\"./dashboard-tile.svelte\\";\\nimport CurrentlyPostedCarousel from \\"../carousel/currently-posted-carousel.svelte\\";\\nimport InProgressCarousel from \\"../carousel/in-progress-carousel.svelte\\";\\nexport let currentlyPostedItems;\\nexport let inProgressItems;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"Post Work\\" redirect=\\"post-work\\">\\r\\n\\t<div slot=\\"actions\\">\\r\\n\\t\\t<PostTaskForm />\\r\\n\\t\\t<button disabled>Post Project</button>\\r\\n\\t</div>\\r\\n\\t<div class=\\"post-work-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"Currenty Posted\\" redirect=\\"post-work\\">\\r\\n\\t\\t\\t<p slot=\\"subtext\\" style=\\"margin-top: 0; margin-bottom: .5rem\\" class=\\"dashboard-tile-subtitle\\">\\r\\n\\t\\t\\t\\t{currentlyPostedItems.length} tasks unassigned\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<CurrentlyPostedCarousel {currentlyPostedItems} />\\r\\n\\t\\t</DashboardTile>\\r\\n\\t\\t<DashboardTile title=\\"In-Progress\\" redirect=\\"post-work\\">\\r\\n\\t\\t\\t<p slot=\\"subtext\\" style=\\"margin-top: 0; margin-bottom: .5rem\\" class=\\"dashboard-tile-subtitle\\">\\r\\n\\t\\t\\t\\t{inProgressItems.length} tasks being worked on\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<InProgressCarousel {inProgressItems} />\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.post-work-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+BC,gCAAmB,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACT"}'
};
const Post_work_dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentlyPostedItems } = $$props;
  let { inProgressItems } = $$props;
  if ($$props.currentlyPostedItems === void 0 && $$bindings.currentlyPostedItems && currentlyPostedItems !== void 0)
    $$bindings.currentlyPostedItems(currentlyPostedItems);
  if ($$props.inProgressItems === void 0 && $$bindings.inProgressItems && inProgressItems !== void 0)
    $$bindings.inProgressItems(inProgressItems);
  $$result.css.add(css$2);
  return `${validate_component(Dashboard, "Dashboard").$$render(
    $$result,
    {
      title: "Post Work",
      redirect: "post-work"
    },
    {},
    {
      content: () => {
        return `<div class="post-work-content svelte-46l5gz" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render(
          $$result,
          {
            title: "Currenty Posted",
            redirect: "post-work"
          },
          {},
          {
            subtext: () => {
              return `<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">${escape(currentlyPostedItems.length)} tasks unassigned</p>`;
            },
            default: () => {
              return `${validate_component(Currently_posted_carousel, "CurrentlyPostedCarousel").$$render($$result, { currentlyPostedItems }, {}, {})}`;
            }
          }
        )} ${validate_component(Dashboard_tile, "DashboardTile").$$render(
          $$result,
          {
            title: "In-Progress",
            redirect: "post-work"
          },
          {},
          {
            subtext: () => {
              return `<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">${escape(inProgressItems.length)} tasks being worked on</p>`;
            },
            default: () => {
              return `${validate_component(In_progress_carousel, "InProgressCarousel").$$render($$result, { inProgressItems }, {}, {})}`;
            }
          }
        )}</div>`;
      },
      actions: () => {
        return `<div slot="actions">${validate_component(Post_task_form, "PostTaskForm").$$render($$result, {}, {}, {})} <button disabled data-svelte-h="svelte-78d47r">Post Project</button></div>`;
      }
    }
  )}`;
});
const User_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `${validate_component(Action_card, "ActionCard").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="footer" data-svelte-h="svelte-5sbc7q"><button>Contact</button></div>`;
    },
    default: () => {
      return `<div tabindex="0" role="button">${validate_component(Tall_avatar_chip, "TallAvatarChip").$$render($$result, { user }, {}, {})} <p class="horizontal-detail-right">Skills: ${each(user.skills, (skill) => {
        return `${validate_component(Skill_chip, "SkillChip").$$render($$result, { skill }, {}, {})}`;
      })}</p></div>`;
    }
  })}`;
});
const User_carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  return `${validate_component(Carousel, "Carousel").$$render($$result, { items: users }, {}, {
    default: ({ item: user }) => {
      return `${validate_component(User_card, "UserCard").$$render($$result, { user }, {}, {})}`;
    }
  })}`;
});
const Team_color_chip_large = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color;
  let { team } = $$props;
  if ($$props.team === void 0 && $$bindings.team && team !== void 0)
    $$bindings.team(team);
  color = team == 1 ? "purple" : "blue";
  return `<svg style="margin: 0 2px;" height=".7rem" width=".7rem"><circle cx="50%" cy="50%" r=".35rem"${add_attribute("fill", color, 0)}></circle></svg>`;
});
const Team_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { team } = $$props;
  if ($$props.team === void 0 && $$bindings.team && team !== void 0)
    $$bindings.team(team);
  return `${validate_component(Action_card, "ActionCard").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="footer" data-svelte-h="svelte-5sbc7q"><button>Contact</button></div>`;
    },
    default: () => {
      return `<div tabindex="0" role="button"><h4>${validate_component(Team_color_chip_large, "TeamColorChipLarge").$$render($$result, { color: team.color }, {}, {})}${escape(team.name)}</h4> <div class="vertical-detail"><p class="vertical-detail-top" data-svelte-h="svelte-1w1l89o">Members</p> <p class="vertical-detail-bottom">${escape(team.members.length)}</p></div></div>`;
    }
  })}`;
});
const Team_carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { teams } = $$props;
  if ($$props.teams === void 0 && $$bindings.teams && teams !== void 0)
    $$bindings.teams(teams);
  return `${validate_component(Carousel, "Carousel").$$render($$result, { items: teams }, {}, {
    default: ({ item: team }) => {
      return `${validate_component(Team_card, "TeamCard").$$render($$result, { team }, {}, {})}`;
    }
  })}`;
});
const css$1 = {
  code: ".network-content.svelte-17odwm8{display:flex;justify-content:space-around;height:100%}",
  map: '{"version":3,"file":"network-dashboard.svelte","sources":["network-dashboard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Dashboard from \\"./dashboard.svelte\\";\\nimport DashboardTile from \\"./dashboard-tile.svelte\\";\\nimport UserCarousel from \\"../carousel/user-carousel.svelte\\";\\nimport TeamCarousel from \\"../carousel/team-carousel.svelte\\";\\nimport TeamColorChipLarge from \\"$lib/chips/team-color-chip-large.svelte\\";\\nexport let myTeam;\\nexport let connectedTeams;\\n<\/script>\\r\\n\\r\\n<Dashboard title=\\"Network\\">\\r\\n\\t<div slot=\\"actions\\"></div>\\r\\n\\t<div class=\\"network-content\\" slot=\\"content\\">\\r\\n\\t\\t<DashboardTile title=\\"\\" redirect=\\"my-team\\">\\r\\n\\t\\t\\t<div slot=\\"title\\">\\r\\n\\t\\t\\t\\t<TeamColorChipLarge team={myTeam.id}></TeamColorChipLarge>{myTeam.name}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<p slot=\\"subtext\\" style=\\"margin-top: 0; margin-bottom: .5rem\\" class=\\"dashboard-tile-subtitle\\">\\r\\n\\t\\t\\t\\t{myTeam.members.length} team members\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<div slot=\\"actions\\">\\r\\n\\t\\t\\t\\t<button>View Team</button>\\r\\n\\t\\t\\t\\t<button disabled>Invite User</button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<UserCarousel users={myTeam.getMembers().slice(0, 5)} />\\r\\n\\t\\t</DashboardTile>\\r\\n\\t\\t<DashboardTile title=\\"Connected Teams\\" redirect=\\"connected-teams\\">\\r\\n\\t\\t\\t<p slot=\\"subtext\\" style=\\"margin-top: 0; margin-bottom: .5rem\\" class=\\"dashboard-tile-subtitle\\">\\r\\n\\t\\t\\t\\t{connectedTeams.length} connected team(s)\\r\\n\\t\\t\\t</p>\\r\\n\\t\\t\\t<div slot=\\"actions\\">\\r\\n\\t\\t\\t\\t<button disabled>Connect Team</button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<TeamCarousel teams={connectedTeams} />\\r\\n\\t\\t</DashboardTile>\\r\\n\\t\\t<DashboardTile title=\\"Organization\\">\\r\\n\\t\\t\\t<h1 style=\\"text-align: center;\\">Please Add An Organization</h1>\\r\\n\\t\\t</DashboardTile>\\r\\n\\t</div>\\r\\n</Dashboard>\\r\\n\\r\\n<style>\\r\\n\\t.network-content {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-around;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyCC,+BAAiB,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,MAAM,CAAE,IACT"}'
};
const Network_dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { myTeam } = $$props;
  let { connectedTeams } = $$props;
  if ($$props.myTeam === void 0 && $$bindings.myTeam && myTeam !== void 0)
    $$bindings.myTeam(myTeam);
  if ($$props.connectedTeams === void 0 && $$bindings.connectedTeams && connectedTeams !== void 0)
    $$bindings.connectedTeams(connectedTeams);
  $$result.css.add(css$1);
  return `${validate_component(Dashboard, "Dashboard").$$render($$result, { title: "Network" }, {}, {
    content: () => {
      return `<div class="network-content svelte-17odwm8" slot="content">${validate_component(Dashboard_tile, "DashboardTile").$$render($$result, { title: "", redirect: "my-team" }, {}, {
        actions: () => {
          return `<div slot="actions" data-svelte-h="svelte-2eji4j"><button>View Team</button> <button disabled>Invite User</button></div>`;
        },
        subtext: () => {
          return `<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">${escape(myTeam.members.length)} team members</p>`;
        },
        title: () => {
          return `<div slot="title">${validate_component(Team_color_chip_large, "TeamColorChipLarge").$$render($$result, { team: myTeam.id }, {}, {})}${escape(myTeam.name)}</div>`;
        },
        default: () => {
          return `${validate_component(User_carousel, "UserCarousel").$$render($$result, { users: myTeam.getMembers().slice(0, 5) }, {}, {})}`;
        }
      })} ${validate_component(Dashboard_tile, "DashboardTile").$$render(
        $$result,
        {
          title: "Connected Teams",
          redirect: "connected-teams"
        },
        {},
        {
          actions: () => {
            return `<div slot="actions" data-svelte-h="svelte-r8n0s5"><button disabled>Connect Team</button></div>`;
          },
          subtext: () => {
            return `<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">${escape(connectedTeams.length)} connected team(s)</p>`;
          },
          default: () => {
            return `${validate_component(Team_carousel, "TeamCarousel").$$render($$result, { teams: connectedTeams }, {}, {})}`;
          }
        }
      )} ${validate_component(Dashboard_tile, "DashboardTile").$$render($$result, { title: "Organization" }, {}, {
        default: () => {
          return `<h1 style="text-align: center;" data-svelte-h="svelte-10xabsi">Please Add An Organization</h1>`;
        }
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions"></div>`;
    }
  })}`;
});
const css = {
  code: ".dashboard-container.svelte-bvecq2{color:#111827;background-color:white;height:100%;display:flex;flex-direction:column}.dashboard-row.svelte-bvecq2{display:flex;flex:1}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import * as db from \\"$lib/db\\";\\nimport GetWorkDashboard from \\"$lib/dashboards/get-work-dashboard.svelte\\";\\nimport PostWorkDashboard from \\"$lib/dashboards/post-work-dashboard.svelte\\";\\nimport NetworkDashboard from \\"$lib/dashboards/network-dashboard.svelte\\";\\nimport { storedUsers, storedTasks, loggedUser, mainRoute } from \\"$lib/db\\";\\nmainRoute.set(\\"/\\");\\nlet test = true;\\nstoredTasks.subscribe((tasks) => {\\n  workPosted = test && $loggedUser && $loggedUser.getWorkPosted();\\n  currentlyPostedItems = test && workPosted && workPosted.filter((task) => task.status === \\"Pending\\");\\n  inProgressItems = test && workPosted && workPosted.filter((task) => task.status === \\"Assigned\\" || task.status === \\"Sign-off\\");\\n  opportunityItems = test && $loggedUser && $loggedUser.getWorkAvailable();\\n  assignedToYouItems = test && $loggedUser && $loggedUser.getWorkAssigned().filter((task) => task.status === \\"Assigned\\" || task.status === \\"Sign-off\\");\\n});\\n$:\\n  workPosted = test && $loggedUser && $loggedUser.getWorkPosted();\\n$:\\n  currentlyPostedItems = test && workPosted && workPosted.filter((task) => task.status === \\"Pending\\");\\n$:\\n  inProgressItems = test && workPosted && workPosted.filter((task) => task.status === \\"Assigned\\" || task.status === \\"Sign-off\\");\\n$:\\n  opportunityItems = test && $loggedUser && $loggedUser.getWorkAvailable();\\n$:\\n  assignedToYouItems = test && $loggedUser && $loggedUser.getWorkAssigned().filter((task) => task.status === \\"Assigned\\" || task.status === \\"Sign-off\\");\\n$:\\n  myTeam = $loggedUser && db.getTeam($loggedUser.team);\\n$:\\n  connectedTeams = myTeam && myTeam.getConnectedTeams();\\n<\/script>\\r\\n\\r\\n{#if !$loggedUser || !myTeam || !connectedTeams}\\r\\n\\t<h1>Loading...</h1>\\r\\n{:else}\\r\\n\\t<div class=\\"dashboard-container\\">\\r\\n\\t\\t<div class=\\"dashboard-row\\">\\r\\n\\t\\t\\t<PostWorkDashboard {currentlyPostedItems} {inProgressItems} />\\r\\n\\t\\t\\t<GetWorkDashboard {opportunityItems} {assignedToYouItems} />\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"dashboard-row\\">\\r\\n\\t\\t\\t<NetworkDashboard {myTeam} {connectedTeams} />\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t.dashboard-container {\\r\\n\\t\\tcolor: #111827;\\r\\n\\t\\tbackground-color: white;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t}\\r\\n\\r\\n\\t.dashboard-row {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex: 1;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6CC,kCAAqB,CACpB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAEA,4BAAe,CACd,OAAO,CAAE,IAAI,CACb,IAAI,CAAE,CACP"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let workPosted;
  let currentlyPostedItems;
  let inProgressItems;
  let opportunityItems;
  let assignedToYouItems;
  let myTeam;
  let connectedTeams;
  let $loggedUser, $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => $loggedUser = value);
  mainRoute.set("/");
  storedTasks.subscribe((tasks) => {
    workPosted = $loggedUser && $loggedUser.getWorkPosted();
    currentlyPostedItems = workPosted && workPosted.filter((task) => task.status === "Pending");
    inProgressItems = workPosted && workPosted.filter((task) => task.status === "Assigned" || task.status === "Sign-off");
    opportunityItems = $loggedUser && $loggedUser.getWorkAvailable();
    assignedToYouItems = $loggedUser && $loggedUser.getWorkAssigned().filter((task) => task.status === "Assigned" || task.status === "Sign-off");
  });
  $$result.css.add(css);
  workPosted = $loggedUser && $loggedUser.getWorkPosted();
  currentlyPostedItems = workPosted && workPosted.filter((task) => task.status === "Pending");
  inProgressItems = workPosted && workPosted.filter((task) => task.status === "Assigned" || task.status === "Sign-off");
  opportunityItems = $loggedUser && $loggedUser.getWorkAvailable();
  assignedToYouItems = $loggedUser && $loggedUser.getWorkAssigned().filter((task) => task.status === "Assigned" || task.status === "Sign-off");
  myTeam = $loggedUser && getTeam($loggedUser.team);
  connectedTeams = myTeam && myTeam.getConnectedTeams();
  $$unsubscribe_loggedUser();
  return `${!$loggedUser || !myTeam || !connectedTeams ? `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>` : `<div class="dashboard-container svelte-bvecq2"><div class="dashboard-row svelte-bvecq2">${validate_component(Post_work_dashboard, "PostWorkDashboard").$$render($$result, { currentlyPostedItems, inProgressItems }, {}, {})} ${validate_component(Get_work_dashboard, "GetWorkDashboard").$$render($$result, { opportunityItems, assignedToYouItems }, {}, {})}</div> <div class="dashboard-row svelte-bvecq2">${validate_component(Network_dashboard, "NetworkDashboard").$$render($$result, { myTeam, connectedTeams }, {}, {})}</div></div>`}`;
});
export {
  Page as default
};
