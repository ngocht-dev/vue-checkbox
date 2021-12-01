<template>
  <div>
    <input v-model="status" type="checkbox" />
    <div>
      <slot name="extra"></slot>
      <label>
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      status: false,
    };
  },
  watch: {
    status(value) {
      this.$emit("input", value);
    },
  },
};
</script>
