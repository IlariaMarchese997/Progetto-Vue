<template>
  <div class="about">
    <h1>Capi</h1>
    <CapiDettaglio :id="$route.params.id" />
    <FormCommenti />
  </div>
</template>

<script>
import CapiDettaglio from "@/components/CapiDettaglio.vue";
import FormCommenti from "@/components/FormCommenti.vue";

// @ is an alias to /src

export default {
  components: {
    CapiDettaglio,
    FormCommenti,
  },
};
</script>
