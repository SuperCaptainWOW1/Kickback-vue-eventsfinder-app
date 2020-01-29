<template>
  <button>
    <span class="callout">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

button {
  background-color: #e9eaff;
  border-radius: 0.7rem;
  padding: 1rem 2.5rem;
  color: $c-font_accent;
  display: inline-block;
}
</style>