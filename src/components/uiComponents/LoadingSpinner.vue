<template>
  <div class="spinner_loading">
    <ProgressSpinner aria-label="Basic ProgressSpinner" />
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.spinner_loading {
  position: relative;
}

.p-progress-spinner {
  position: fixed;
  left: calc(50vw - 50px);
  top: calc(50vh - 50px);
  width: 100px;
  height: 100px;
}
</style>
