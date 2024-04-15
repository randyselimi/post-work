import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    cookies.set('logged_in', 'false', { path: '/' });

	throw redirect(303, `/login`);
}
