//import { user } from '$lib/stores';
import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	cookies.set('logged_in', 'false', { path: '/' });
	cookies.set('loggedEmail', 'null', { path: '/' });
	//user.set(null);
	throw redirect(303, `/login`);
}
