import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	if (cookies.get('logged_in') !== 'true' || cookies.get('loggedEmail') === 'null') {
		throw redirect(303, `/login`);
	}
	return { loggedEmail: cookies.get('loggedEmail') };
}
