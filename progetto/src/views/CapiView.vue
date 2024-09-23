<template>
  <div class="about">
    <h1>Capi</h1>
    <CapiDettaglio :id="$route.params.id" />
  </div>
</template>

<script>
import CapiDettaglio from "@/components/CapiDettaglio.vue";

// @ is an alias to /src

export default {
  components: {
    CapiDettaglio,
  },
};
</script>
