import type { User } from './User';

export interface TeamData {
	id: number;
	name: string;
	members: number[];
	connectedTeams: number[];
	color: string;
}

export interface Team {
	id: number;
	name: string;
	members: User[] | number[];
	connectedTeams: Team[] | number[];
	color: string;
}
