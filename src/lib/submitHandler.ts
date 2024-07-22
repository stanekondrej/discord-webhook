import { FormContents } from './stores';

export async function handleSubmit(
	url: string,
	formContents: FormContents,
	result: number | undefined
) {
	try {
		await validateForm(formContents);
	} catch (e) {
		console.log(e);
		return;
	}

	const json = JSON.stringify(formContents);
	console.log(json);

	const r = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: json
	});

	result = r.status;

	console.log(r.statusText);
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
