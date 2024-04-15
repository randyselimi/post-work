import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	if (cookies.get('logged_in') === 'false') {
		throw redirect(303, `/login`);
	}
}
