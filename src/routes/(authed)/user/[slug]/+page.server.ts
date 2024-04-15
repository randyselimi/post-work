import * as db from '$lib/db';
import type { User } from '$lib/User';

export function load({ params }) {
	const user: User = db.getUser(Number(params.slug));

	return {
		user
	};
}
