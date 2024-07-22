import { FormContents } from './stores';

export async function handleSubmit(url: string, formContents: FormContents) {
	try {
		await validateForm(formContents);
	} catch (e) {
		console.log(e);
		return;
	}

	const json = JSON.stringify(formContents);

	// TODO: display the request result somehow
	const _ = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: json
	});
}

async function validateForm(formContents: FormContents) {
	// validate avatar url
	console.log(formContents.avatar_url);
	if (formContents.avatar_url) {
		try {
			new URL(formContents.avatar_url);
		} catch {
			throw new Error('Failed to parse URL');
		}
	}
}
