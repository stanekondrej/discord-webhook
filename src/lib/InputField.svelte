<script lang="ts">
	/*
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
    */

	export let name: string;
	export let id: string;
	export let boundValue: string;
	export let onInput: () => void;
</script>

<input
	{name}
	alt={name}
	{id}
	placeholder={name}
	bind:value={boundValue}
	on:input={onInput}
	autocomplete="off"
/>
