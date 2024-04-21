<script setup lang="ts">
import {z} from "zod"
import type {FormSubmitEvent} from "#ui/types"

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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await $fetch("/api/github/commit-link", {
    method: "POST",
    params: event.data
  })
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

    <UButton type="submit" color="pink">
      Submit
    </UButton>
  </UForm>
</template>
