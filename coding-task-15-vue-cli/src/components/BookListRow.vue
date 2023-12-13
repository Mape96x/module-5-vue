<template>
  <tr class=".table-item__table td">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td><BaseButton btntext="Add Bookmark" :variant="variant" /></td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  props: {
    title: String,
    isbn: String,
  },
  components: {
    BaseButton,
  },
  data() {
    return {
      variant: true,
    };
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
