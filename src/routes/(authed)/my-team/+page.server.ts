import * as db from '$lib/db';
import type { User } from '$lib/User';

export function load() {
	const loggedId = 43;

	const users: User[] = db.getUser(loggedId).team.members;
	return {
		myTeamUsers: users
	};
}
