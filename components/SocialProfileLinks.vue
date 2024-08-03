<template>
	<div class="flex justify-start space-x-4">
		<NuxtLink
			to="https://github.com/NanamiNakano"
			class="rounded-full bg-gray-800 text-white p-2 flex items-center justify-center w-12 h-12"
			target="_blank"
			alt="GitHub Profile"
		>
			<FontAwesomeIcon
				:icon="['fab', 'github']"
				size="xl"
			/>
		</NuxtLink>
		<NuxtLink
			to="https://x.com/thynanami"
			class="rounded-full bg-blue-400 text-white p-2 flex items-center justify-center w-12 h-12"
			target="_blank"
			alt="X(Twitter) Profile"
		>
			<FontAwesomeIcon
				:icon="['fab', 'twitter']"
				size="lg"
			/>
		</NuxtLink>
		<NuxtLink
			to="https://patreon.com/thynanami"
			class="rounded-full bg-orange-500 text-white p-2 flex items-center justify-center w-12 h-12"
			target="_blank"
			alt="Patreon"
		>
			<FontAwesomeIcon
				:icon="['fab', 'patreon']"
				size="lg"
			/>
		</NuxtLink>
		<NuxtLink
			to="https://thynanami.t.me"
			class="rounded-full bg-blue-300 text-white p-2 flex items-center justify-center w-12 h-12"
			target="_blank"
			alt="Telegram"
		>
			<FontAwesomeIcon
				:icon="['fab', 'telegram']"
				size="xl"
			/>
		</NuxtLink>
		<NuxtLink
			to="https://steamcommunity.com/id/thynanami"
			class="rounded-full bg-gray-800 text-white p-2 flex items-center justify-center w-12 h-12"
			target="_blank"
			alt="Steam Profile"
		>
			<FontAwesomeIcon
				:icon="['fab', 'steam']"
				size="xl"
			/>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>
