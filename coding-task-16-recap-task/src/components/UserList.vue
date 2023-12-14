<template>
  <section class="user-list">
    <nav class="user-list__nav">
      <p>{{ users.length }} Users</p>
      <button
        class="user-list__nav-filter"
        @click="sortUserASC()"
        :class="{ 'user-list__nav-filter--active': sort === 1 }"
      >
        Asc ⇧
      </button>
      <button
        class="user-list__nav-filter"
        @click="sortUserDESC()"
        :class="{ 'user-list__nav-filter--active': sort === 2 }"
      >
        Desc ⇩
      </button>
      <div v-for="(user, index) in users" :key="user.id">
        <a
          @click="(activeButton = index), giveActualUser()"
          :class="{ 'user-list__nav-item--active': activeButton === index }"
          class="user-list__nav-item"
          >{{ user.name }}</a
        >
      </div>
    </nav>
    <UserListDetail :user="currentuser" />
  </section>
</template>

<script>
import UserListDetail from "./UserListDetail.vue";
import json from "./users.json";
export default {
  components: {
    UserListDetail,
  },
  data() {
    return {
      users: json,
      activeButton: Number,
      sort: Number,
      currentuser: {
        name: "",
        email: "",
        phone: "",
        company: {
          name: "",
        },
      },
    };
  },
  methods: {
    giveActualUser() {
      this.currentuser = this.users[this.activeButton];
      console.log(this.users[this.activeButton]);
    },
    sortUserDESC() {
      this.sort = 2;
      this.users = this.users.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      });
    },
    sortUserASC() {
      this.sort = 1;
      this.users = this.users.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameB > nameA) {
          return -1;
        }
        return 0;
      });
    },
  },
  created() {
    this.sortUserDESC();
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.user-list {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 80%;
  margin: 0 auto;
  border: 3px solid #00a8ff;
  border-radius: 5px;
}
.user-list__nav {
  width: 40%;
  padding: 1rem;
}
.user-list__nav-filter {
  text-transform: uppercase;
  font-size: 0.7rem;
  line-height: 1;
  color: #00a8ff;
  border: 2px solid #00a8ff;
  background-color: transparent;
  padding: 2px;
  margin-right: 5px;
  margin-bottom: 15px;
}
.user-list__nav-filter--active {
  color: #fff;
  border-color: transparent;
  background-color: #00a8ff;
}
.user-list__nav-item {
  display: block;
  text-decoration: none;
  color: #00a8ff;
  padding: 5px;
  border: 2px solid transparent;
  border-radius: 3px;
  margin-bottom: 2px;
}
.user-list__nav-item:hover {
  border-color: #00a8ff;
}
.user-list__nav-item--active {
  background-color: #00a8ff;
  color: #fff;
  border-color: transparent;
}
</style>
