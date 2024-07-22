<script lang="ts">
	import MessageForm from '$lib/MessageForm.svelte';
	import { result } from '$lib/stores';
</script>

<main>
	<h1 id="main-title">Discord webhook client</h1>
	<MessageForm />
	{#if $result !== undefined}
		Result: {$result}
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}

	#main-title {
		font-size: 3rem;
	}
</style>
