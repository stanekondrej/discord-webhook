import { FormContents } from './stores';

export async function handleSubmit(url: string, formContents: FormContents) {
	const json = JSON.stringify(formContents);

	// TODO: display the request result somehow
	const _ = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: json
	});
}
