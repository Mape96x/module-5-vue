<template>
  <LayoutHeader />
  <main>
    <div id="app" class="inside">
      <BookList />
    </div>
  </main>
</template>

<script>
import BookList from "./components/BookList.vue";
import LayoutHeader from "./components/LayoutHeader.vue";

export default {
  name: "App",
  components: {
    BookList,
    LayoutHeader,
  },
};
</script>

<style>
:root {
  --primary: #6a1cc3;
  --primary-dark: #370b68;
  --secondary: #f39c12;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
