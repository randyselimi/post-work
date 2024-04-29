

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.lTLe1qHS.js","_app/immutable/chunks/13.D5uV4OiT.js","_app/immutable/chunks/index.DzC80FCd.js"];
export const stylesheets = [];
export const fonts = [];
