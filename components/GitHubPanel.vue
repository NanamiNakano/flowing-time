<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import type {UserResponse} from "~/types/github/user";

const runtimeConfig = useRuntimeConfig()
const isOpen = ref(false)
const authorized = ref(false)
const username = ref("")


const oauthResponseCookie = useCookie("GitHubOauthResponse")
if (oauthResponseCookie.value !== undefined) {
  authorized.value = true
  const cookieValue = oauthResponseCookie.value as unknown as OauthResponse
  const response = await $fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${cookieValue.access_token}`
    }
  }) as UserResponse
  username.value = response.name
}

function auth() {
  navigateTo(`https://github.com/login/oauth/authorize?client_id=${runtimeConfig.public.github.clientId}&scope=user&redirect_uri=${runtimeConfig.public.site.uri}/github/callback`, {
    external: true
  })
}
</script>

<template>
  <div>
    <UButton label="Add yours" color="pink" variant="outline" @click="isOpen = true"/>

    <UModal v-model="isOpen">
      <div class="container p-4 flex flex-col justify-center items-center">
        <div class="flex flex-col items-center">
          <UButton v-if="authorized" color="pink">
            <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
            {{ username }}
          </UButton>
          <UButton v-else color="pink" @click="auth">
            <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
            Auth with GitHub
          </UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>
