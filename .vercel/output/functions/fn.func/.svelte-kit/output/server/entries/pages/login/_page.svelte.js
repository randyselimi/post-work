import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".login-title.svelte-1le39hl{font-size:10rem}.login-container.svelte-1le39hl{display:flex;flex-direction:column;align-items:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\"><\/script>\\n\\n<div class=\\"login-container\\">\\n\\t<h1 class=\\"login-title\\">PostWork</h1>\\n\\t<form method=\\"POST\\">\\n\\t\\t<fieldset id=\\"login\\">\\n\\t\\t\\t<legend>Login</legend>\\n\\t\\t\\t<label for=\\"email\\">Email:</label>\\n\\t\\t\\t<input type=\\"text\\" id=\\"email\\" name=\\"email\\" required />\\n\\t\\t\\t<label for=\\"password\\">Password:</label>\\n\\t\\t\\t<input type=\\"password\\" id=\\"password\\" name=\\"password\\" required />\\n\\t\\t\\t<button>Login</button>\\n\\t\\t</fieldset>\\n\\t</form>\\n\\t<button disabled>Register With Code</button>\\n\\t<button disabled>Create New Team</button>\\n\\n\\t<h2>Notice:</h2>\\n\\t<p>This is a pre-alpha version of PostWork developed by Randy Selimi.</p>\\n\\t<p>\\n\\t\\tIt is important to note various functions of this service have been mocked or disabled for this\\n\\t\\tdemo.\\n\\t</p>\\n\\t<!-- <p>All content contained within is the sole intellectual property of its creator</p> -->\\n</div>\\n\\n<style>\\n\\t.login-title {\\n\\t\\tfont-size: 10rem;\\n\\t}\\n\\t.login-container {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2BC,2BAAa,CACZ,SAAS,CAAE,KACZ,CACA,+BAAiB,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="login-container svelte-1le39hl" data-svelte-h="svelte-12sim0f"><h1 class="login-title svelte-1le39hl">PostWork</h1> <form method="POST"><fieldset id="login"><legend>Login</legend> <label for="email">Email:</label> <input type="text" id="email" name="email" required> <label for="password">Password:</label> <input type="password" id="password" name="password" required> <button>Login</button></fieldset></form> <button disabled>Register With Code</button> <button disabled>Create New Team</button> <h2>Notice:</h2> <p>This is a pre-alpha version of PostWork developed by Randy Selimi.</p> <p>It is important to note various functions of this service have been mocked or disabled for this
		demo.</p>  </div>`;
});
export {
  Page as default
};
