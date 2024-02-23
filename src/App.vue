<script setup>
import { RouterView } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
    <SiteHeader />

    <div class="container">
        <RouterView />
    </div>
</template>
