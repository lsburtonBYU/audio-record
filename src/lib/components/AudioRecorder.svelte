<script>
	import { onMount, onDestroy } from 'svelte';

	const MAX_AUDIO_TIME = 600;

	let chunks = [];
	let audioRecorder = null;
	let recordOK = true;
	let isRecording = false;
	let audioSrc = null;

	let buttonClass = 'round';
	let timer = 0;
	let interval;

	onMount(async () => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({ audio: true })
				.then((stream) => {
					audioRecorder = new MediaRecorder(stream);

					audioRecorder.addEventListener('dataavailable', (event) => chunks.push(event.data));

					audioRecorder.addEventListener('stop', () => {
						const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
						audioSrc = window.URL.createObjectURL(blob);
						chunks = [];
					});
				})
				.catch((error) => {
					console.error(`The following getUserMedia error occurred: ${error}`);
					recordOK = false;
				});
		} else {
			console.log('getUserMedia() is not supported in your browser');
			recordOK = false;
		}
	});

	function updateTimer() {
		if (timer++ > MAX_AUDIO_TIME) {
			toggleRecording();
		}
	}

	function pad(value) {
		return value.toString().padStart(2, '0');
	}

	function displayTimer() {
		const minutes = pad(Math.floor(timer / 60));
		const seconds = pad(timer % 60);
		const time = `${minutes}:${seconds}`;
		return time;
	}

	function toggleRecording() {
		isRecording = !isRecording;
		if (isRecording) {
			console.log('Recording');
			audioRecorder.start();
			buttonClass = 'pill';
			interval = setInterval(updateTimer, 1000);
		} else {
			console.log('Stopped recording');
			audioRecorder.stop();
			buttonClass = 'round';
			clearInterval(interval);
			timer = 0;
		}
	}

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="audioRecorder">
	{#if recordOK}
		<button class={buttonClass} on:click={toggleRecording}>
			<svg class="mic" role="img" viewBox="0 0 16 16">
				<title>Record</title>
				<path
					d="M8 11c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3S5 1.343 5 3v5c0 1.657 1.343 3 3 3z"
				/>
				<path
					d="M13 8V6h-1v1.844c0 1.92-1.282 3.688-3.164 4.071C6.266 12.438 4 10.479 4 8V6H3v2c0 2.414 1.721 4.434 4 4.899V15H5v1h6v-1H9v-2.101c2.279-.465 4-2.485 4-4.899z"
				/>
			</svg>
			<div class="stop">
				<svg role="img" viewBox="0 0 16 16">
					<title>Stop</title>
					<rect x="3" y="3" width="10" height="10" />
				</svg>
				<span class="timer">{displayTimer(timer)}</span>
			</div>
		</button>
		<audio controls src={audioSrc} disabled={!audioSrc} />
	{:else}
		<p>Your browser can't record audio</p>
	{/if}
</div>

<style>
	.audioRecorder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		padding: 2rem;
		--recording: #f00;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		appearance: none;
		background-color: transparent;
		padding: 8px;
		border: 4px solid #0008;
	}

	.round {
		border-radius: 50%;
		height: 48px;
		width: 48px;
		background-color: var(--recording);
		transition: transform 0.2s ease, width 0.2s ease;
	}

	.round:hover {
		transform: scale(1.1);
		/* transition: transform 0s ease, width 0.2 ease; */
	}

	.round .mic {
		fill: #fff;
	}

	.round .stop {
		display: none;
	}

	.pill {
		border-radius: 24px;
		border: 2px solid #0008;
		height: 48px;
		width: 100px;
		background-color: var(--recording);

		transition: width 0.2s ease;
	}

	.stop {
		display: flex;
		gap: 0.4rem;
		align-items: center;
	}

	.stop svg {
		min-width: 20px;
		fill: rgb(250, 250, 250);
	}

	.timer {
		color: rgb(250, 250, 250);
		font-size: 1rem;
	}

	.pill .mic {
		display: none;
	}
</style>
