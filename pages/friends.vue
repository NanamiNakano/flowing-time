<script setup lang="ts">
import links from "assets/data/links.json"

useHead({
	title: "Friends",
})

definePageMeta({
	layout: "friends",
})
</script>

<template>
	<div class="container mx-auto px-8 lg:px-16">
		<div class="text-left py-4">
			<h1 class="text-5xl font-light">
				Friends
			</h1>
		</div>
		<div class="space-y-6">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<LinkCard
					v-for="link in links"
					:key="link.link"
					:title="link.title"
					:link="link.link"
					:icon-url="link.iconUrl"
					:description="link.description"
				/>
			</div>
		</div>
	</div>
</template>
