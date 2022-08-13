<script>
	import AudioRecorder from '$lib/components/AudioRecorder.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="audio recording is fun" />
</svelte:head>

<section>
	<AudioRecorder />
</section>

<style>
	:global(body) {
		color: hsl(0, 0%, 98%);
		background: hsl(240, 72%, 17%);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
	}
</style>
