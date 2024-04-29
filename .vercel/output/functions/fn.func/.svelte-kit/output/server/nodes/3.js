import * as server from '../entries/pages/(authed)/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(authed)/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.gFyDWPU8.js","_app/immutable/chunks/13.D5uV4OiT.js","_app/immutable/chunks/index.DzC80FCd.js","_app/immutable/chunks/db.93En-UYZ.js","_app/immutable/chunks/entry.h2LGm7Q3.js","_app/immutable/chunks/SoftRoute.CPS-vAZn.js","_app/immutable/chunks/tall-avatar-chip.Dnxh1IFI.js","_app/immutable/chunks/post-task-form.CKonM5J8.js","_app/immutable/chunks/modal.DMkcgoJ8.js","_app/immutable/chunks/dashboard.PGWvSRzj.js","_app/immutable/chunks/update-hours-form.DnBk2f8y.js"];
export const stylesheets = ["_app/immutable/assets/3.eycFV3nn.css","_app/immutable/assets/tall-avatar-chip.C7haArWG.css","_app/immutable/assets/post-task-form.CCy8Qj3J.css","_app/immutable/assets/modal.BcF2yT3k.css","_app/immutable/assets/dashboard.90vw-YYx.css","_app/immutable/assets/update-hours-form.hqr97NXS.css"];
export const fonts = [];
