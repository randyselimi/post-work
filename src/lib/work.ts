import type { User } from './User';

export interface WorkItem {
	title: string;
	description: string;
	skils: number;
	hours: number;
	billable: boolean;
	poster: User;
	applicants: User[] | null;
	assigned: User | null;
	status: WorkItemStatus;
	startDate: Date;
	dueDate: Date;
}

export enum WorkItemStatus {
	Invalid,
	Posted,
	Assigned,
	PendingSignoff,
	Complete,
	Cancelled
}
