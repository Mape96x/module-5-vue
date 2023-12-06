Vue.createApp({
  data() {
    return {
      todos: [],
      filter: "all",
      input: "",
      API: "http://localhost:4730/todos",
      newTodo: {},
    };
  },
  methods: {
    addObj() {
      const actualTodo = this.trimValue(this.input);
      if (
        this.duplicateCheck(actualTodo) ||
        !actualTodo.length > 0 ||
        actualTodo.length < 5
      ) {
        this.input = "";
        this.$refs.myInput.focus();
        return;
      }
      this.newTodo.description = this.input;
      this.newTodo.done = false;
      this.addTodoAPI(this.newTodo);
      this.input = "";
      this.$refs.myInput.focus();
    },
    addTodoAPI(newTodo) {
      fetch(this.API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      })
        .then((Response) => Response.json())
        .then((JSONData) => {
          this.getTodosAPI();
        });
    },
    trimValue(input) {
      const trimmedInput = input.trim();
      return trimmedInput;
    },
    duplicateCheck(actualDescription) {
      for (const currentTodo of this.todos) {
        if (
          currentTodo.description.toLowerCase() ===
          actualDescription.toLowerCase()
        ) {
          return true;
        }
      }
      return false;
    },
    changeState(todo) {
      this.changeTodoAPI(todo.id, todo);
    },
    changeTodoAPI(id, updatedTodo) {
      fetch(this.API + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      })
        .then((Response) => Response.json())
        .then((JSONData) => {
          this.getTodosAPI();
        });
    },
    deleteTodoAPI(id) {
      return fetch(this.API + "/" + id, {
        method: "DELETE",
      })
        .then((Response) => Response.json())
        .then((JSONData) => {
          this.getTodosAPI();
        });
    },
    removeDone() {
      const fetches = [];
      for (const currentTodo of this.todos) {
        if (currentTodo.done) {
          fetches.push(this.deleteTodoAPI(currentTodo.id));
        }
      }
      Promise.all(fetches).then((values) => {
        if (values.indexOf(undefined) != -1) {
          this.getTodosAPI();
        }
      });
    },
    getTodosAPI() {
      fetch(this.API)
        .then((Response) => Response.json())
        .then((JSONData) => {
          this.todos = JSONData;
        });
    },
  },
  computed: {
    renderFilter() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "open") {
        return this.todos.filter((todo) => todo.done === false);
      } else {
        return this.todos.filter((todo) => todo.done === true);
      }
    },
  },
  created() {
    fetch(this.API)
      .then((Response) => Response.json())
      .then((JSONData) => {
        this.todos = JSONData;
      });
  },
}).mount("#app");
