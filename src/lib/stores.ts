import { writable, type Writable } from 'svelte/store';
import type { User } from './User';

export const user: Writable<User | null> = writable(null);
