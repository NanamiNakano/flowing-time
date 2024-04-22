<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const runtimeConfig = useRuntimeConfig()
const isOpen = ref(false)
const authorized = ref(false)
const user = ref()

const response = await $fetch("/api/github/user")
if (response !== "Error") {
  authorized.value = true
  user.value = response as User
}

function auth() {
  navigateTo(`https://github.com/login/oauth/authorize?client_id=${runtimeConfig.public.github.clientId}&scope=user&redirect_uri=${runtimeConfig.public.site.uri}/github/callback`, {
    external: true
  })
}

function logout() {
  $fetch("/api/github/logout")
  location.reload()
}
</script>

<template>
  <div>
    <UButton label="Add yours" color="pink" variant="outline" @click="isOpen = true"/>

    <UModal v-model="isOpen">
      <div class="container p-4 flex flex-col justify-center items-center">
        <div class="flex flex-col items-center">
          <div v-if="authorized">
            <div class="container flex-row items-center space-x-2">
            <UButton color="pink">
              <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
              {{ user.login }}
            </UButton>
            <UButton @click="logout" color="white" variant="ghost">
              <FontAwesomeIcon :icon="['fas', 'right-from-bracket']" size="lg"/>
            </UButton>
            </div>

            <UDivider class="flex py-3"/>
            <LinkForm/>
          </div>

          <div v-else>
            <UButton color="pink" @click="auth">
              <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
              Auth with GitHub
            </UButton>
          </div>
        </div>
      </div>
    </UModal>
  </div>
</template>
