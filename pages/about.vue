<script setup lang="ts">
useHead({
  title: "About",
})
</script>

<template>
  <div class="container mx-auto px-8 lg:px-16">
    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
      <div class="text-left space-y-4">
        <h1 class="text-5xl font-light">
          World, Hello!
        </h1>
        <h2 class="text-4xl font-semibold">
          I'm Nanami Nakano.
        </h2>
      </div>
      <div class="flex justify-end mt-4 lg:mt-0 lg:ml-4">
        <p
            class="text-right truncate whitespace-normal text-xl"
            style="max-width: 400px;"
        >
          16 y.o. full-stack developer from China, current high school freshman, CS & Math majors(AP Course), want to
          learn art.
        </p>
      </div>
    </div>
    <UDivider class="py-4"/>
    <div class="flex flex-col lg:flex-row justify-between space-y-2 lg:space-x-2">
      <div class="container text-left space-y-4">
        <h1 class="text-6xl font-semibold">
          Skills
        </h1>
        <div class="space-y-2">
          <h2 class="text-5xl font-light">
            Programming Languages
          </h2>
          <article>
            <h3 class="text-3xl">
              Kotlin
            </h3>
            <p>
              I learned Kotlin in the summer of 2023, vacation after graduating from junior high school.
              Kotlin is the language I mainly use. I use it to write back-end and client programs.
            </p>
          </article>
          <article>
            <h3 class="text-3xl">
              TypeScript & Vue
            </h3>
            <p>
              I barely learned TypeScript formally. I learned it(TypeScript) by writing Vue.
              It is a goal of mine to create my own personal website since I was 14 y.o. I did it in my free time in
              high
              school.
            </p>
          </article>
          <article>
            <h3 class="text-3xl">
              Swift
            </h3>
            <p>
              Swift is the first Native language I came into contact with.
              I used it to develop an app for Chinese traffic enthusiasts(Work in progress).
              I planned to release it in the summer of 2024.
            </p>
          </article>
          <article>
            <h3 class="text-3xl">
              Python
            </h3>
            <p>
              Python is the easiest language I have ever learned. I used it in my small machine learning research
              project.
            </p>
          </article>
        </div>
        <div class="space-y-2">
          <h2 class="text-5xl font-light">
            Photography
          </h2>
          <p>
            When I was in junior high school, I got a SLR camera from my dad, a Canon 200D II.
            I was not allowed to use smart phone at school, so I use it to record my life.
            Further more, I developed an interest in photography.
          </p>
          <article>
            <h3 class="text-3xl">
              Adobe Lightroom
            </h3>
            <p>
              I use Lightroom to edit my photos. I think I've got all the basics down.
            </p>
          </article>
        </div>
      </div>
      <div class="container text-left space-y-4">
        <h1 class="text-6xl font-semibold">
          Hobbies
        </h1>
        <article>
          <h2 class="text-3xl">
            Programming
          </h2>
          <p>
            I started writing code in the second grade of junior high school. Now I write code almost every free time I have.
          </p>
        </article>
        <article>
          <h2 class="text-3xl">
            Movies
          </h2>
          <p>
            I joined a local movie club and watched movies with everyone on the weekends.
          </p>
        </article>
        <article>
          <h2 class="text-3xl">
            Musics
          </h2>
          <p>
            I enjoy various kinds of music. Like J-POP, light music, electric music, piano piece.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>
