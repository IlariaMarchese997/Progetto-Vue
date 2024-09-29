<template>
  <div class="container-fluid">
    <div class="row">
      <CapiDettaglio :id="$route.params.id" />
    </div>
    <hr class="w-50 mx-auto my-4" />
    <div>
      <AccessVisual />
    </div>
    <div class="row">
      <FormCommenti />
    </div>
  </div>
</template>

<script>
import AccessVisual from "@/components/AccessVisual.vue";
import CapiDettaglio from "@/components/CapiDettaglio.vue";
import FormCommenti from "@/components/FormCommenti.vue";

// @ is an alias to /src

export default {
  components: {
    CapiDettaglio,
    FormCommenti,
    AccessVisual,
  },
};
</script>
