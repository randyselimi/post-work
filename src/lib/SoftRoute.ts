import { pushState } from '$app/navigation';

export async function softRoute(e: Event, name: string, id: number) {
	// prevent navigation
	e.preventDefault();

	// run `load` functions (or rather, get the result of the `load` functions
	// that are already running because of `data-sveltekit-preload-data`)
	//const result = await preloadData(route);
	let results = {};
	results[name] = id;
	pushState('/' + name + '/' + id, { selected: results });
}
