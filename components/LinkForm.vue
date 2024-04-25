<script setup lang="ts">
import {z} from "zod"
import type {FormSubmitEvent} from "#ui/types"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  disabled: Boolean,
})

const schema = z.object({
  title: z.string(),
  link: z.string().url("Invalid URL"),
  iconUrl: z.string().url("Invalid URL"),
  description: z.string(),
})

type Schema = z.output<typeof schema>

const state = ref({
  title: undefined,
  link: undefined,
  iconUrl: undefined,
  description: undefined,
})
const submitted = ref(false)
const submittable = computed(() => {
  if (props.disabled || (!props.disabled && submitted.value)) {
    return true
  } else {
    return false
  }
})

let user: People
const response = await $fetch("/api/github/user")
if (response !== "Error") {
  user = response as People
}


async function onSubmit(event: FormSubmitEvent<Schema>) {
  const result = await $fetch("/api/github/add-link", {
    method: "POST",
    params: {
      data: event.data,
      user: user
    }
  })
  if (result === "Success") {
    submitted.value = true
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Title" name="title">
      <UInput v-model="state.title"/>
    </UFormGroup>

    <UFormGroup label="Link" name="link">
      <UInput v-model="state.link"/>
    </UFormGroup>

    <UFormGroup label="Icon URL" name="iconUrl">
      <UInput v-model="state.iconUrl"/>
    </UFormGroup>

    <UFormGroup label="Description" name="description">
      <UInput v-model="state.description"/>
    </UFormGroup>

    <div class="container flex flex-row justify-between items-center">
      <UButton type="submit" color="pink" :disabled="submittable">
        Submit
      </UButton>
      <FontAwesomeIcon v-if="submitted" :icon="['fas', 'check']" size="lg"/>
    </div>
  </UForm>
</template>
