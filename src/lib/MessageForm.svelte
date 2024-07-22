<script lang="ts">
	import { formContents, webhookURL, result } from './stores';
	import { handleSubmit } from './submitHandler';

	let errorMessages: Set<string> = new Set();

	function validateURL(url?: string) {
		if (url) {
			try {
				new URL(url);
			} catch (e) {
				throw e;
			}
		}
	}
</script>

<form
	on:submit|preventDefault={() => {
		return false;
	}}
>
	<input
		name="Webhook URL"
		alt="Webhook URL"
		id="webhookURL"
		type="password"
		placeholder="Webhook URL"
		autocomplete="off"
		bind:value={$webhookURL}
		on:input={() => {
			const errorMessage = 'The webhook URL is invalid';

			try {
				validateURL($webhookURL);
				errorMessages.delete(errorMessage);
			} catch (e) {
				console.log(e);
				errorMessages.add(errorMessage);
			}

			console.log(errorMessages.size);
		}}
	/>

	<input
		name="Avatar URL"
		alt="Avatar URL"
		id="avatarURL"
		type="text"
		placeholder="Avatar URL"
		autocomplete="off"
		bind:value={$formContents.avatar_url}
		on:input={() => {
			const errorMessage = 'The avatar URL is invalid';

			try {
				validateURL($formContents.avatar_url);
				errorMessages.delete(errorMessage);
			} catch (e) {
				console.log(e);
				errorMessages.add(errorMessage);
			}
		}}
	/>
	<input
		name="Username"
		alt="Username"
		placeholder="Username"
		id="username"
		type="text"
		autocomplete="off"
		bind:value={$formContents.username}
	/>
	<input
		name="Message content"
		alt="Message content"
		placeholder="Message content"
		id="messageContent"
		type="text"
		autocomplete="off"
		bind:value={$formContents.content}
	/>
	{#if errorMessages.size > 0}
		{#each errorMessages.keys() as err}
			<p>Error: {err}</p>
		{/each}
	{:else}
		<button
			on:click={async () => {
				await handleSubmit($webhookURL, $formContents, $result);
			}}>Submit</button
		>
	{/if}
</form>

<style scoped lang="scss">
	form {
		$padding: 0.5rem;
		$border-radius: 0.5rem;

		display: flex;
		margin: 0 auto;
		flex-direction: column;
		gap: 1rem;
		width: fit-content;
		justify-content: center;
		align-items: center;

		input {
			margin: 0 auto;
			padding: $padding;
			border: 0.1rem solid black;
			border-radius: $border-radius;
			font-size: 1.2rem;
		}

		button {
			padding: $padding;
			border-radius: $border-radius;
		}
	}
</style>
