<script setup lang="ts">
import {cn} from "../../utils";

const props = defineProps<{
  headerClass?: string;
  navClass?: string;
}>();

const navs = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  {text: "Pricing", href: "/pricing"},
  { text: "Services", href: "/services" },
  { text: "Contact", href: "/contact" },
];

</script>

<template>
  <header :class='cn("full-bleed grid grid-cols-12 gap-2 p-3", headerClass)' >
    <div class="col-span-9 h-full md:col-span-3 place-self-center w-full ">
      <slot name="logo" />
    </div>
    <div class="col-span-3 place-self-center md:hidden">
      <button class="inline-flex justify-center px-3 py-3 bg-accent border-none items-center space-y-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </div>
    <div class="col-span-12 md:col-span-9 place-self-center w-full">
      <nav :class='cn("hidden p-3 md:flex flex-col items-start md:flex-row md:items-center md:justify-end", navClass)'>
        <a v-for="nav in navs" :href="nav.href" class="md:px-3 lg:px-5 pl-5 md:pl-0 py-2 rounded-md text-lg md:text-sm lg:text-xl font-medium hover:underline">
          {{nav.text}}
        </a>
      </nav>
    </div>
  </header>
</template>

