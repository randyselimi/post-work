

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/user/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.gcnupjVP.js","_app/immutable/chunks/13.D5uV4OiT.js","_app/immutable/chunks/index.DzC80FCd.js","_app/immutable/chunks/entry.h2LGm7Q3.js","_app/immutable/chunks/db.93En-UYZ.js"];
export const stylesheets = [];
export const fonts = [];
