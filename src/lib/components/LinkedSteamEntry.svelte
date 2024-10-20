<script lang="ts">
	import { Trash2 } from 'lucide-svelte';

	export let steam_id: string;
	export let steam_personaname: string;
	export let steam_avatar: string;

	// Decode the URL-encoded string to use it in the img tag
	let steam_avatar_url = decodeURIComponent(steam_avatar);
</script>

<div class="card h-16 p-2 gap-4 grid grid-cols-2 items-center">
	<div class="flex gap-4 items-center">
		<img src={steam_avatar_url} alt="Steam Avatar" width="48" />
		<div>
			<span class="text-secondary-500 whitespace-nowrap">Profile Name</span>
			<br />
			<span class="text-primary-500">{steam_personaname}</span>
		</div>
		<span class="divider-vertical h-8" style="border-color: rgb(var(--color-secondary-800));"
		></span>
		<div>
			<span class="text-secondary-500 whitespace-nowrap">Steam Id</span>
			<br />
			<span class="text-primary-500">{steam_id}</span>
		</div>
	</div>
	<div class="justify-self-end">
		<!-- Trash button for the entry -->
		<button type="button" class="btn-icon !bg-transparent">
			<Trash2 class="text-primary-500" />
		</button>
	</div>
</div>
