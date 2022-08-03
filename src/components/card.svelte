<script>
	export let url;
	export let name;
	export let price;
</script>

<div class="w-36 rounded-lg overflow-hidden shadow-md">
	<img class="rounded-xl w-full" src={url} alt={name} />
	<div class="p-1">
		<h3 class="text-xs text-gray-700">{name}</h3>
		<h1 class="text-sm font-bold">{price}</h1>
	</div>
</div>
