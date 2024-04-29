import { c as create_ssr_component, e as escape, d as add_attribute, a as each, v as validate_component, s as subscribe } from "./ssr.js";
import "devalue";
import "./client.js";
import { l as loggedUser } from "./db.js";
import { M as Modal } from "./modal.js";
const css$2 = {
  code: ".skill-chip.svelte-1gxhhge{border-radius:4px;padding:3px;display:inline-block;border:1px solid black;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:5rem;font-size:0.55rem;margin:0 1px}",
  map: '{"version":3,"file":"skill-chip.svelte","sources":["skill-chip.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let skill;\\nexport let size = 5;\\n<\/script>\\r\\n\\r\\n<span class=\\"skill-chip\\">{skill}</span>\\r\\n\\r\\n<style>\\r\\n\\t.skill-chip {\\r\\n\\t\\tborder-radius: 4px;\\r\\n\\t\\tpadding: 3px;\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\tborder: 1px solid black;\\r\\n\\t\\ttext-overflow: ellipsis;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\twhite-space: nowrap;\\r\\n\\t\\tmax-width: 5rem;\\r\\n\\t\\tfont-size: 0.55rem;\\r\\n\\t\\tmargin: 0 1px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAOC,0BAAY,CACX,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,QAAQ,CACvB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,OAAO,CAClB,MAAM,CAAE,CAAC,CAAC,GACX"}'
};
const Skill_chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  let { size = 5 } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$2);
  return `<span class="skill-chip svelte-1gxhhge">${escape(skill)}</span>`;
});
const css$1 = {
  code: ".chips.svelte-gbsk9l{border:1px solid #ccc;border-radius:2px;padding:10px;display:block;width:400px;max-width:100%}input.svelte-gbsk9l{border:none;appearance:none}",
  map: `{"version":3,"file":"skill-chip-input.svelte","sources":["skill-chip-input.svelte"],"sourcesContent":["<script lang=\\"ts\\">import SkillChip from \\"./skill-chip.svelte\\";\\nexport let skills = [];\\nlet value = \\"\\";\\n<\/script>\\r\\n\\r\\n<label for=\\"chips-input\\" class=\\"chips\\">\\r\\n\\t<input\\r\\n\\t\\tbind:value\\r\\n\\t\\ton:keyup|stopPropagation={(e) => {\\r\\n\\t\\t\\te.preventDefault();\\r\\n\\t\\t\\te.stopPropagation();\\r\\n\\t\\t\\tif (e.key === 'Enter') {\\r\\n\\t\\t\\t\\tskills = [...skills, value];\\r\\n\\t\\t\\t\\tvalue = '';\\r\\n\\t\\t\\t}\\r\\n\\t\\t}}\\r\\n\\t\\ttype=\\"text\\"\\r\\n\\t\\tid=\\"chips-input\\"\\r\\n\\t/>\\r\\n\\t{#each skills as skill}\\r\\n\\t\\t<SkillChip {skill} />\\r\\n\\t{/each}\\r\\n</label>\\r\\n\\r\\n<style>\\r\\n\\t.chips {\\r\\n\\t\\tborder: 1px solid #ccc;\\r\\n\\t\\tborder-radius: 2px;\\r\\n\\t\\tpadding: 10px;\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\twidth: 400px;\\r\\n\\t\\tmax-width: 100%;\\r\\n\\t}\\r\\n\\tinput {\\r\\n\\t\\tborder: none;\\r\\n\\t\\tappearance: none;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyBC,oBAAO,CACN,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IACZ,CACA,mBAAM,CACL,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IACb"}`
};
const Skill_chip_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skills = [] } = $$props;
  let value = "";
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  $$result.css.add(css$1);
  return `<label for="chips-input" class="chips svelte-gbsk9l"><input type="text" id="chips-input" class="svelte-gbsk9l"${add_attribute("value", value, 0)}> ${each(skills, (skill) => {
    return `${validate_component(Skill_chip, "SkillChip").$$render($$result, { skill }, {}, {})}`;
  })} </label>`;
});
const css = {
  code: ".form-container.svelte-h3yb4y{display:flex;flex-direction:row;justify-content:space-around}.column.svelte-h3yb4y{display:flex;flex-direction:column;justify-content:space-between}.row.svelte-h3yb4y{display:flex;justify-content:space-between}",
  map: `{"version":3,"file":"post-task-form.svelte","sources":["post-task-form.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { enhance } from \\"$app/forms\\";\\nimport { page } from \\"$app/stores\\";\\nimport SkillChipInput from \\"$lib/chips/skill-chip-input.svelte\\";\\nimport * as db from \\"$lib/db\\";\\nimport { loggedUser } from \\"$lib/db\\";\\nimport Modal from \\"$lib/modals/modal.svelte\\";\\n$:\\n  showModal = false;\\n$:\\n  billable = false;\\nlet form;\\nlet skills = [];\\nconst currentDate = /* @__PURE__ */ new Date();\\nconst formattedDate = \`\${currentDate.getMonth() + 1}/\${currentDate.getDate()}/\${currentDate.getFullYear()}\`;\\n<\/script>\\r\\n\\r\\n<button on:click={() => (showModal = true)}> Post Task </button>\\r\\n\\r\\n<Modal bind:showModal>\\r\\n\\t<form\\r\\n\\t\\tbind:this={form}\\r\\n\\t\\tmethod=\\"POST\\"\\r\\n\\t\\tuse:enhance={({ formData }) => {\\r\\n\\t\\t\\tconst task = {\\r\\n\\t\\t\\t\\tid: 2000 + Math.floor(Math.random() * 1000),\\r\\n\\t\\t\\t\\ttitle: formData.get('title'),\\r\\n\\t\\t\\t\\tdescription: formData.get('description'),\\r\\n\\t\\t\\t\\tskills: formData.get('skills').split(','),\\r\\n\\t\\t\\t\\trole: formData.get('role'),\\r\\n\\t\\t\\t\\thours: Number(formData.get('hours')),\\r\\n\\t\\t\\t\\tbillable: formData.get('billable') === 'true' ? true : false,\\r\\n\\t\\t\\t\\tbillingInfo: {\\r\\n\\t\\t\\t\\t\\tbillingType: formData.get('billingType'),\\r\\n\\t\\t\\t\\t\\tprojectFolder: formData.get('projectFolder'),\\r\\n\\t\\t\\t\\t\\tprojectCode: formData.get('projectCode')\\r\\n\\t\\t\\t\\t},\\r\\n\\t\\t\\t\\tpostedBy: $loggedUser.id,\\r\\n\\t\\t\\t\\tassignedTo: null,\\r\\n\\t\\t\\t\\tapplicants: [],\\r\\n\\t\\t\\t\\tstatus: 'Pending',\\r\\n\\t\\t\\t\\tstartDate: formData.get('startDate'),\\r\\n\\t\\t\\t\\tendDate: formData.get('endDate')\\r\\n\\t\\t\\t};\\r\\n\\t\\t\\tdb.postTask(task);\\r\\n\\t\\t}}\\r\\n\\t>\\r\\n\\t\\t<fieldset id=\\"post-task\\">\\r\\n\\t\\t\\t<legend>Post Task</legend>\\r\\n\\t\\t\\t<div class=\\"row\\">\\r\\n\\t\\t\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<label for=\\"description\\">Description</label>\\r\\n\\t\\t\\t\\t\\t\\t<textarea id=\\"description\\" name=\\"description\\" />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<label for=\\"title\\">Title</label>\\r\\n\\t\\t\\t\\t\\t\\t<input id=\\"title\\" name=\\"title\\" />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<label for=\\"role\\">Role</label>\\r\\n\\t\\t\\t\\t\\t\\t<select id=\\"role\\" name=\\"role\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"Associate\\">Associate</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"Senior Associate\\">Senior Associate</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"Supervisor\\">Supervisor</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"Manager\\">Manager</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"Senior Manager\\">Senior Manager</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"Director\\">Director</option>\\r\\n\\t\\t\\t\\t\\t\\t</select>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<label for=\\"skills\\">Skills</label>\\r\\n\\t\\t\\t\\t\\t\\t<input type=\\"hidden\\" id=\\"skills\\" name=\\"skills\\" bind:value={skills} />\\r\\n\\t\\t\\t\\t\\t\\t<SkillChipInput bind:skills></SkillChipInput>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\"form-container\\">\\r\\n\\t\\t\\t\\t\\t\\t<div style=\\"display: flex; flex-direction: column;\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\"hours\\">Hours</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t<input value=\\"0\\" style=\\"width: 3rem;\\" type=\\"number\\" id=\\"hours\\" name=\\"hours\\" />\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t<div style=\\"display: flex; flex-direction: column; \\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\"billable\\">Billable</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t<input\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"margin-top: .3rem; height: .8rem\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tid=\\"billable\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"billable\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tbind:checked={billable}\\r\\n\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\"billingType\\">Billing Type</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t<select disabled={!billable} id=\\"billingType\\" name=\\"billingType\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"SolidBill\\">SolidBill</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"RSSupport\\">RSSupport</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t</select>\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\"projectFolder\\">Project Folder</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t<input disabled={!billable} id=\\"projectFolder\\" name=\\"projectFolder\\" />\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\"projectCode\\">Project Code</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t<input disabled={!billable} id=\\"projectCode\\" name=\\"projectCode\\" />\\r\\n\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\"column\\">\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<label for=\\"startDate\\">Start Date</label>\\r\\n\\t\\t\\t\\t\\t\\t<input type=\\"date\\" value=\\"2024-04-22\\" id=\\"startDate\\" name=\\"startDate\\" />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<label for=\\"endDate\\">Due Date</label>\\r\\n\\t\\t\\t\\t\\t\\t<input type=\\"date\\" id=\\"endDate\\" name=\\"endDate\\" />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<fieldset class=\\"form-container\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<legend>Posting Type</legend>\\r\\n\\t\\t\\t\\t\\t\\t\\t<div style=\\"display: flex; flex-direction: column; margin-right: .5rem\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<label style=\\"font-size: .8rem\\" for=\\"radio1\\">Instant</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<input checked id=\\"radio1\\" name=\\"radio\\" type=\\"radio\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t\\t<div style=\\"display: flex; flex-direction: column; margin-left: .5rem\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<label style=\\"font-size: .8rem\\" for=\\"radio2\\">Request</label>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<input disabled id=\\"radio2\\" name=\\"radio\\" type=\\"radio\\" />\\r\\n\\t\\t\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t\\t</fieldset>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\r\\n\\t\\t\\t\\t\\t\\ton:click={(e) => {\\r\\n\\t\\t\\t\\t\\t\\t\\tform.requestSubmit();\\r\\n\\t\\t\\t\\t\\t\\t\\tshowModal = false;\\r\\n\\t\\t\\t\\t\\t\\t}}>Submit</button\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</fieldset>\\r\\n\\t</form>\\r\\n</Modal>\\r\\n\\r\\n<style>\\r\\n\\t.header {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\t.form-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t\\tjustify-content: space-around;\\r\\n\\t}\\r\\n\\t.column {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n\\t.row {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsJC,6BAAgB,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,YAClB,CACA,qBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAClB,CACA,kBAAK,CACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB"}`
};
const Post_task_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal;
  let billable;
  let $$unsubscribe_loggedUser;
  $$unsubscribe_loggedUser = subscribe(loggedUser, (value) => value);
  let form;
  let skills = [];
  const currentDate = /* @__PURE__ */ new Date();
  `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    showModal = false;
    billable = false;
    $$rendered = `<button data-svelte-h="svelte-1k6yybn">Post Task</button> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form method="POST"${add_attribute("this", form, 0)}><fieldset id="post-task"><legend data-svelte-h="svelte-vq5kjz">Post Task</legend> <div class="row svelte-h3yb4y"><div class="column svelte-h3yb4y"><div data-svelte-h="svelte-1dt0okb"><label for="description">Description</label> <textarea id="description" name="description"></textarea></div> <div data-svelte-h="svelte-7jdl1f"><label for="title">Title</label> <input id="title" name="title"></div> <div><label for="role" data-svelte-h="svelte-thaj42">Role</label> <select id="role" name="role"><option value="Associate" data-svelte-h="svelte-191ms4u">Associate</option><option value="Senior Associate" data-svelte-h="svelte-10mi7bu">Senior Associate</option><option value="Supervisor" data-svelte-h="svelte-30x86a">Supervisor</option><option value="Manager" data-svelte-h="svelte-1c0d6gg">Manager</option><option value="Senior Manager" data-svelte-h="svelte-13w8ygq">Senior Manager</option><option value="Director" data-svelte-h="svelte-137yaum">Director</option></select></div> <div><label for="skills" data-svelte-h="svelte-1phw9ze">Skills</label> <input type="hidden" id="skills" name="skills"${add_attribute("value", skills, 0)}> ${validate_component(Skill_chip_input, "SkillChipInput").$$render(
            $$result,
            { skills },
            {
              skills: ($$value) => {
                skills = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <div class="column svelte-h3yb4y"><div class="form-container svelte-h3yb4y"><div style="display: flex; flex-direction: column;" data-svelte-h="svelte-1bbrojq"><label for="hours">Hours</label> <input value="0" style="width: 3rem;" type="number" id="hours" name="hours"></div> <div style="display: flex; flex-direction: column; "><label for="billable" data-svelte-h="svelte-mu58z6">Billable</label> <input style="margin-top: .3rem; height: .8rem" type="checkbox" id="billable" name="billable"${add_attribute("checked", billable, 1)}></div></div> <div><div><label for="billingType" data-svelte-h="svelte-cbbxd8">Billing Type</label> <select ${!billable ? "disabled" : ""} id="billingType" name="billingType"><option value="SolidBill" data-svelte-h="svelte-11maeby">SolidBill</option><option value="RSSupport" data-svelte-h="svelte-1p44i6">RSSupport</option></select></div> <div><label for="projectFolder" data-svelte-h="svelte-cxz0ao">Project Folder</label> <input ${!billable ? "disabled" : ""} id="projectFolder" name="projectFolder"></div> <div><label for="projectCode" data-svelte-h="svelte-wmcbp0">Project Code</label> <input ${!billable ? "disabled" : ""} id="projectCode" name="projectCode"></div></div></div> <div class="column svelte-h3yb4y"><div data-svelte-h="svelte-159djw0"><label for="startDate">Start Date</label> <input type="date" value="2024-04-22" id="startDate" name="startDate"></div> <div data-svelte-h="svelte-700gcb"><label for="endDate">Due Date</label> <input type="date" id="endDate" name="endDate"></div> <div data-svelte-h="svelte-1jimd45"><fieldset class="form-container svelte-h3yb4y"><legend>Posting Type</legend> <div style="display: flex; flex-direction: column; margin-right: .5rem"><label style="font-size: .8rem" for="radio1">Instant</label> <input checked id="radio1" name="radio" type="radio"></div> <div style="display: flex; flex-direction: column; margin-left: .5rem"><label style="font-size: .8rem" for="radio2">Request</label> <input disabled id="radio2" name="radio" type="radio"></div></fieldset></div> <button type="button" data-svelte-h="svelte-jv0u2b">Submit</button></div></div></fieldset></form>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_loggedUser();
  return $$rendered;
});
export {
  Post_task_form as P,
  Skill_chip as S
};
