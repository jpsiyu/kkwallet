<template>
  <div class="cr">
    <CreateWallet />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CreateWallet from "@/components/CreateWallet.vue";
@Component({
  components: { CreateWallet }
})
export default class Create extends Vue {}
</script>
