import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "./ssr.js";
const css$2 = {
  code: ".enabled.svelte-2ysmrb{fill:#000000}.disabled.svelte-2ysmrb{fill:rgba(135, 133, 134, 0.43)}.no-hover.svelte-2ysmrb{pointer-events:none}",
  map: '{"version":3,"file":"back-button.svelte","sources":["back-button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"./button.css\\";\\nexport let disabled = false;\\n<\/script>\\r\\n\\r\\n<button class:no-hover={disabled} class=\\"invisible-button\\" on:click>\\r\\n\\t<svg\\r\\n\\t\\tclass:disabled\\r\\n\\t\\tclass:enabled={!disabled}\\r\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\theight=\\"1em\\"\\r\\n\\t\\tviewBox=\\"0 0 320 512\\"\\r\\n\\t\\t><style>\\r\\n\\t\\t\\tsvg {\\r\\n\\t\\t\\t\\tfill: #000000;\\r\\n\\t\\t\\t}\\r\\n\\t\\t</style><path\\r\\n\\t\\t\\td=\\"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z\\"\\r\\n\\t\\t/></svg\\r\\n\\t>\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\t.enabled {\\r\\n\\t\\tfill: #000000;\\r\\n\\t}\\r\\n\\t.disabled {\\r\\n\\t\\tfill: rgba(135, 133, 134, 0.43);\\r\\n\\t}\\r\\n\\t.no-hover {\\r\\n\\t\\tpointer-events: none;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsBC,sBAAS,CACR,IAAI,CAAE,OACP,CACA,uBAAU,CACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAC/B,CACA,uBAAU,CACT,cAAc,CAAE,IACjB"}'
};
const Back_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$2);
  return `<button class="${["invisible-button svelte-2ysmrb", disabled ? "no-hover" : ""].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" class="${[
    "svelte-2ysmrb",
    (disabled ? "disabled" : "") + " " + (!disabled ? "enabled" : "")
  ].join(" ").trim()}"><style>svg {
				fill: #000000;
			}
		</style><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg> </button>`;
});
const css$1 = {
  code: ".enabled.svelte-2ysmrb{fill:#000000}.disabled.svelte-2ysmrb{fill:rgba(135, 133, 134, 0.43)}.no-hover.svelte-2ysmrb{pointer-events:none}",
  map: '{"version":3,"file":"forward-button.svelte","sources":["forward-button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"./button.css\\";\\nexport let disabled = false;\\n<\/script>\\r\\n\\r\\n<button class:no-hover={disabled} class=\\"invisible-button\\" on:click>\\r\\n\\t<svg\\r\\n\\t\\tclass:disabled\\r\\n\\t\\tclass:enabled={!disabled}\\r\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\theight=\\"1em\\"\\r\\n\\t\\tviewBox=\\"0 0 320 512\\"\\r\\n\\t\\t><path\\r\\n\\t\\t\\td=\\"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z\\"\\r\\n\\t\\t/></svg\\r\\n\\t>\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\t.enabled {\\r\\n\\t\\tfill: #000000;\\r\\n\\t}\\r\\n\\t.disabled {\\r\\n\\t\\tfill: rgba(135, 133, 134, 0.43);\\r\\n\\t}\\r\\n\\t.no-hover {\\r\\n\\t\\tpointer-events: none;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkBC,sBAAS,CACR,IAAI,CAAE,OACP,CACA,uBAAU,CACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAC/B,CACA,uBAAU,CACT,cAAc,CAAE,IACjB"}'
};
const Forward_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$1);
  return `<button class="${["invisible-button svelte-2ysmrb", disabled ? "no-hover" : ""].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" class="${[
    "svelte-2ysmrb",
    (disabled ? "disabled" : "") + " " + (!disabled ? "enabled" : "")
  ].join(" ").trim()}"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg> </button>`;
});
const api = "https://api.dicebear.com/8.x/personas/svg?";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 1 } = $$props;
  let { email = "" } = $$props;
  let seed = email;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  return `<img style="border-radius: 50%; box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.2);" width="${escape(size, true) + "rem"}" height="${escape(size, true) + "rem"}" src="${escape(api, true) + "seed=" + escape(seed, true)}"${add_attribute("alt", email, 0)}>`;
});
const Team_color_chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color;
  let { team } = $$props;
  if ($$props.team === void 0 && $$bindings.team && team !== void 0)
    $$bindings.team(team);
  color = team == 1 ? "purple" : "blue";
  return `<svg style="margin: 0 2px;" height=".5rem" width=".5rem"><circle cx="50%" cy="50%" r=".25rem"${add_attribute("fill", color, 0)}></circle></svg>`;
});
const css = {
  code: ".tall-avatar-chip-title.svelte-sbbktq{font-size:0.7rem;margin-top:0;margin-bottom:0}.tall-avatar-chip-container.svelte-sbbktq{display:flex;justify-content:space-evenly;align-items:center;flex-direction:column}.tall-avatar-chip-element.svelte-sbbktq{font-size:0.6rem;margin-top:0;margin-bottom:0;margin-left:1px;text-overflow:clip;overflow:hidden}.tall-avatar-chip-element-container.svelte-sbbktq{display:flex;align-items:baseline}",
  map: '{"version":3,"file":"tall-avatar-chip.svelte","sources":["tall-avatar-chip.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Avatar from \\"$lib/avatar.svelte\\";\\nimport TeamColorChip from \\"./team-color-chip.svelte\\";\\nexport let user;\\n<\/script>\\r\\n\\r\\n<div class=\\"tall-avatar-chip-container\\">\\r\\n\\t<h4 class=\\"tall-avatar-chip-title\\">{user.fullName}</h4>\\r\\n\\t<Avatar size={60} email={user.email} />\\r\\n\\t<div class=\\"tall-avatar-chip-element-container\\">\\r\\n\\t\\t<TeamColorChip team={user.team} />\\r\\n\\t\\t<p class=\\"tall-avatar-chip-element\\">\\r\\n\\t\\t\\t{user.role}\\r\\n\\t\\t</p>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.tall-avatar-chip-title {\\r\\n\\t\\tfont-size: 0.7rem;\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tmargin-bottom: 0;\\r\\n\\t}\\r\\n\\t.tall-avatar-chip-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-evenly;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t}\\r\\n\\t.tall-avatar-chip-element {\\r\\n\\t\\tfont-size: 0.6rem;\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t\\tmargin-bottom: 0;\\r\\n\\t\\tmargin-left: 1px;\\r\\n\\t\\ttext-overflow: clip;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.tall-avatar-chip-element-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: baseline;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiBC,qCAAwB,CACvB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CAChB,CACA,yCAA4B,CAC3B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MACjB,CACA,uCAA0B,CACzB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,CAAC,CAChB,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MACX,CACA,iDAAoC,CACnC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QACd"}'
};
const Tall_avatar_chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `<div class="tall-avatar-chip-container svelte-sbbktq"><h4 class="tall-avatar-chip-title svelte-sbbktq">${escape(user.fullName)}</h4> ${validate_component(Avatar, "Avatar").$$render($$result, { size: 60, email: user.email }, {}, {})} <div class="tall-avatar-chip-element-container svelte-sbbktq">${validate_component(Team_color_chip, "TeamColorChip").$$render($$result, { team: user.team }, {}, {})} <p class="tall-avatar-chip-element svelte-sbbktq">${escape(user.role)}</p></div> </div>`;
});
export {
  Avatar as A,
  Back_button as B,
  Forward_button as F,
  Tall_avatar_chip as T,
  Team_color_chip as a
};
