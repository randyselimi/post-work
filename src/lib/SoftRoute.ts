import { pushState } from '$app/navigation';
import { previousRoutes } from './db';

export async function softRoute(e: Event, name: string, id: number) {
	// prevent navigation
	e.preventDefault();

	// run `load` functions (or rather, get the result of the `load` functions
	// that are already running because of `data-sveltekit-preload-data`)
	//const result = await preloadData(route);
	let results = {};
	results[name] = id;

	let newRoute = { name, id };
	previousRoutes.update((routes) => {
		// If the new route is a previous route, pop it
		if (
			routes.previous.length &&
			newRoute.name === routes.previous[routes.previous.length - 1].name &&
			newRoute.id === routes.previous[routes.previous.length - 1].id
		) {
			routes.next = routes.current;
			routes.current = routes.previous.pop()!;
		}
		// If the new route is the next route, push it to the previous routes
		else if (routes.next && newRoute.id === routes.next.id && newRoute.name === routes.next.name) {
			routes.previous.push(routes.current!);
			routes.current = routes.next!;
		} else {
			const newCurrent = { name: newRoute.name, id: newRoute.id, next: null };
			if (routes.current) {
				routes.current.next = newCurrent;
				routes.previous.push(routes.current);
			}
			routes.current = newCurrent;
			routes.next = null;
		}
		// Current becomes the new route
		debugger;
		return routes;
	});
	pushState('/' + name + '/' + id, { selected: results });
}

export async function softRouteBack(e: Event) {
	// prevent navigation
	e.preventDefault();

	let newRoute = { name: '', id: 0 };
	previousRoutes.update((routes) => {
		// If there are no previous routes, do nothing
		if (!routes.previous.length) {
			return routes;
		}
		// Pop the previous route
		routes.next = routes.current;
		routes.current = routes.previous.pop();
		newRoute = routes.current;
		return routes;
	});
	let results = {};
	results[newRoute.name] = newRoute.id;
	pushState('/' + newRoute.name + '/' + newRoute.id, { selected: results });
}

export async function softRouteNext(e: Event) {
	// prevent navigation
	e.preventDefault();

	let newRoute = { name: '', id: 0 };
	previousRoutes.update((routes) => {
		// If there are no next routes, do nothing
		if (!routes.current || !routes.current.next) {
			return routes;
		}
		// Push the next route
		routes.previous.push(routes.current);
		const temp = routes.current.next?.next;
		routes.current = routes.current.next;
		routes.current.next = temp;
		newRoute = routes.current;
		return routes;
	});
	let results = {};
	results[newRoute.name] = newRoute.id;
	pushState('/' + newRoute.name + '/' + newRoute.id, {
		selected: results
	});
}
