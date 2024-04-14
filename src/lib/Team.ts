import type { User } from './User';

export interface TeamData {
	id: number;
	name: string;
	members: number[];
	connectedTeams: number[];
}

export interface Team {
	id: number;
	name: string;
	members: User[] | number[];
	connectedTeams: Team[] | number[];
}
