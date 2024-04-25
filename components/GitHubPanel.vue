<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const runtimeConfig = useRuntimeConfig()
const isOpen = ref(false)
const authorized = ref(false)
const user = ref()
const forked = ref(false)

const response = await $fetch("/api/github/user")
if (response !== "Error") {
  authorized.value = true
  user.value = response as People
}

function auth() {
  navigateTo(`https://github.com/login/oauth/authorize?client_id=${runtimeConfig.public.github.clientId}&redirect_uri=${runtimeConfig.public.site.uri}/github/callback`, {
    external: true
  })
}

function logout() {
  $fetch("/api/github/logout")
  location.reload()
}

async function forkRepo() {
  const success = await $fetch("/api/github/fork-repo")
  if (success === "Success") {
    forked.value = true
  }
}
</script>

<template>
  <div>
    <UButton label="Add yours" variant="outline" @click="isOpen = true"/>

    <UModal v-model="isOpen">
      <div class="p-4 flex justify-center items-center">
        <div class="flex flex-col items-center">
          <div v-if="authorized">
            <div class="container flex flex-row justify-between items-center">
              <UButton>
                <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
                {{ user.username }}
              </UButton>
              <UButton color="white" @click="logout">
                <FontAwesomeIcon :icon="['fas', 'right-from-bracket']" size="lg"/>
              </UButton>
            </div>

            <UDivider class="flex py-3" label="Step 1"/>

            <div class="container flex flex-row justify-between items-center">
              <UButton :disabled="forked" @click="forkRepo">
                <FontAwesomeIcon :icon="['fas', 'code-fork']" size="lg"/>
                Fork repo
              </UButton>
              <FontAwesomeIcon v-if="forked" :icon="['fas', 'check']" size="lg"/>
            </div>

            <UDivider class="flex py-3" label="Step 2"/>
            <LinkForm :disabled="!forked"/>
          </div>

          <div v-else class="container flex flex-row justify-center items-center space-x-2">
            <UButton @click="auth">
              <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
              Auth with GitHub
            </UButton>

            <div>
              OR
            </div>

              <UButton :padded="false" variant="link" to="https://github.com/NanamiNakano/flowing-time/edit/main/assets/data/links.json" target="_blank">
                Edit manually on GitHub
                <FontAwesomeIcon :icon="['fas', 'up-right-from-square']"/>
              </UButton>
          </div>
        </div>
      </div>
    </UModal>
  </div>
</template>
