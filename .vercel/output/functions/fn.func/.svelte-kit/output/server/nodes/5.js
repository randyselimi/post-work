

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/get-work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BHpC6ySm.js","_app/immutable/chunks/13.D5uV4OiT.js","_app/immutable/chunks/index.DzC80FCd.js","_app/immutable/chunks/db.CEl33ZWi.js","_app/immutable/chunks/entry.BSLr-600.js","_app/immutable/chunks/dashboard.DqRgHnpb.js","_app/immutable/chunks/update-hours-form.BJ7uXiWJ.js","_app/immutable/chunks/modal.CNX8hgEv.js","_app/immutable/chunks/work-table.D8WZlBQQ.js","_app/immutable/chunks/table.D3CkrGKu.js","_app/immutable/chunks/SoftRoute.D3LLhFaY.js"];
export const stylesheets = ["_app/immutable/assets/4.PEX5aeBa.css","_app/immutable/assets/dashboard.90vw-YYx.css","_app/immutable/assets/update-hours-form.hqr97NXS.css","_app/immutable/assets/modal.BcF2yT3k.css"];
export const fonts = [];
