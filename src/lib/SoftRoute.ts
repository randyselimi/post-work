import { preloadData, pushState } from '$app/navigation';

export async function softRoute(e: Event, route: string) {
	// prevent navigation
	e.preventDefault();

	// run `load` functions (or rather, get the result of the `load` functions
	// that are already running because of `data-sveltekit-preload-data`)
	const result = await preloadData(route);

	if (result.type === 'loaded' && result.status === 200) {
		pushState(route, { selected: result.data });
	}
}
