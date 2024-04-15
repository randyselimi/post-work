import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies, url }) => {
		cookies.set('logged_in', 'true', { path: '/' });
        console.log('a', cookies.get('logged_in'))
		throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
	}
};
