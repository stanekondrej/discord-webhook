<script lang="ts">
	import { formContents, webhookURL, result, errorMessages } from './stores';
	import { handleSubmit } from './submitHandler';

	$: {
		const errorWebhookURLInvalid = 'The webhook URL is invalid.';
		try {
			new URL($webhookURL);
			$errorMessages.delete(errorWebhookURLInvalid);
		} catch (e) {
			$errorMessages.add(errorWebhookURLInvalid);
		}

		const errorAvatarURLInvalid = 'The avatar URL is invalid.';
		if ($formContents.avatar_url !== '') {
			try {
				new URL($formContents.avatar_url);
				$errorMessages.delete(errorAvatarURLInvalid);
			} catch (e) {
				$errorMessages.add(errorAvatarURLInvalid);
			}
		} else {
			$errorMessages.delete(errorAvatarURLInvalid);
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
		type="password"
		id="webhookURL"
		placeholder="Webhook URL"
		bind:value={$webhookURL}
		autocomplete="url"
	/>
	<input
		name="Avatar URL"
		id="avatarURL"
		placeholder="Avatar URL"
		bind:value={$formContents.avatar_url}
		autocomplete="url"
	/>
	<input
		name="Username"
		id="username"
		placeholder="Username"
		bind:value={$formContents.username}
		autocomplete="username"
	/>

	<!-- TODO: make this a textarea, as it will be resizable -->
	<input
		name="Message content"
		id="messageContent"
		placeholder="Message content"
		bind:value={$formContents.content}
		autocomplete="off"
	/>

	{#if $errorMessages.size > 0}
		{#each $errorMessages.keys() as err}
			<p>Error: {err}</p>
		{/each}
	{:else}
		<button
			on:click={async () => {
				await handleSubmit($webhookURL, $formContents);
			}}>Submit</button
		>
	{/if}
</form>

<style scoped lang="scss">
	%shared {
		padding: 0.5rem;
		border: 0.1rem solid black;
		border-radius: 0.5rem;
	}

	form {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		gap: 1rem;
		width: fit-content;
		justify-content: center;
		align-items: center;

		input {
			@extend %shared;
		}

		button {
			@extend %shared;
		}
	}
</style>
