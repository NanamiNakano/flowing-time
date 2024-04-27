<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: "Example Domain",
	},
	link: {
		type: String,
		default: "https://example.com/",
	},
	iconUrl: {
		type: String,
		default: "https://www.iana.org/_img/bookmark_icon.ico",
	},
	description: {
		type: String,
		default: "This domain is for use in illustrative examples in documents.",
	},
})
</script>

<template>
	<NuxtLink
		:to="link"
		class="bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-800 flex"
		target="_blank"
	>
		<div class="p-4 space-y-2 flex-1">
			<div class="flex items-center space-x-3">
				<div class="rounded-lg overflow-hidden">
					<NuxtImg
						:src="iconUrl"
						alt="Site Icon"
						width="32"
						height="32"
					/>
				</div>
				<h2 class="text-lg font-semibold">
					{{ title }}
				</h2>
			</div>
			<p class="text-gray-500 dark:text-gray-400">
				{{ description }}
			</p>
		</div>
	</NuxtLink>
</template>
