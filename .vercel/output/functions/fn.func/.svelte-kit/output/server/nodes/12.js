import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.DvUKd4XF.js","_app/immutable/chunks/13.D5uV4OiT.js","_app/immutable/chunks/index.DzC80FCd.js"];
export const stylesheets = ["_app/immutable/assets/12.N3OeN2RR.css"];
export const fonts = [];
