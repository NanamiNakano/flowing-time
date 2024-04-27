<script setup lang="ts">
defineProps({
	path: {
		type: String,
		default: "/typography",
	},
	title: {
		type: String,
		default: "Lorem Ipsum",
	},
	description: {
		type: String,
		default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	date: {
		type: String,
		default: "1980-01-01",
	},
})
</script>

<template>
	<div class="py-2">
		<UButton
			:to="`/blog${path}`"
			color="white"
			variant="link"
			:padded="false"
		>
			<h3 class="text-2xl">
				{{ title }}
			</h3>
		</UButton>
		<p>{{ description }}</p>
		<time
			:datetime="date"
			class="font-light"
		>{{ date }}</time>
	</div>
</template>
