import { readable, writable } from 'svelte/store';

export class FormContents {
	content: string = '';
	username: string = '';
	avatar_url: string = '';
}

export const formContents = writable(new FormContents());
export const webhookURL = writable('');
// stores the error messages, so that they can be used to block the submit button
export const errorMessages = readable(new Set<string>());
// stores the result of the sent request
export const result = writable(undefined);
