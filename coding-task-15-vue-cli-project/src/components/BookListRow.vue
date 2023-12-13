<template>
  <tr class=".table-item__table td">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <BaseButton
        name="actonCol"
        :btntext="btntext"
        :variant="variant"
        @press="handleAddBookmark"
      />
    </td>
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
      btntext: "Add Bookmark",
      variant: true,
      isBookmarked: false,
    };
  },
  methods: {
    handleAddBookmark() {
      this.isBookmarked = !this.isBookmarked;
      if (this.btntext === "Add Bookmark") {
        this.btntext = "Remove Bookmark";
      } else {
        this.btntext = "Add Bookmark";
      }
    },
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
