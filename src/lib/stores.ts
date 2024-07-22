import { writable } from 'svelte/store';

export class FormContents {
	content?: string;
	username?: string;
	avatar_url?: string;
}

export const formContents = writable(new FormContents());
export const webhookURL = writable('');
export const result = writable(undefined);
