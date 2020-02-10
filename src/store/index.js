import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      /*{
        id: '1',
        title: 'Learn ionic/vue',
        description: '',
        done: false,
      },
      {
        id: '2',
        title: 'Build Todo List',
        description: '',
        done: true
      }*/
    ],
    todo: {
      id: '',
      title: '',
      description: '',
      done: false
    }
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    todo(state) {
      return state.todo;
    },
  },
  mutations: {
    setLocalStorageTodos(state, todos) {
      if (localStorage) {
        localStorage.setItem('todos', todos);
      }
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    setTodo(state, payload) {
      if (payload.mode == 'New') {
        state.todo = {
          id: '',
          title: '',
          description: '',
          done: false
        }
      } else {
        state.todo = payload.todo;
      }
    },
    addTodo(state, payload) {
      payload.todo.id = Date.now();
      state.todos.push(payload.todo);
      this.dispatch('setTodo', payload);
      this.dispatch('setLocalStorageTodos', state.todos);
    },
    editTodo(state, payload) {
      for(var i = 0; i<state.todos.length; i++) {
        if (state.todos[i] == payload.todo.id) {
          state.todos[i] = payload.todo;
          break;
        }
      }
      this.dispatch('setLocalStorageTodos', state.todos);
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter(todo => {
        return todo.id != payload.id;
      });
      this.dispatch('setLocalStorageTodos', state.todos);
    },
    findTodo(state, id) {
      let found = state.todos.filter(todo => {
        return todo.id == id;
      });
      if (found) {
        this.commit('setTodo', {
          mode: 'Edit',
          todo: found[0]
        });
      } else {
        this.commit('setTodo', {
          mode: 'New',
        });
      }
    }
  },
  actions: {
    setTodos(context, todos) {
      const localStorageTodos = todos ? JSON.parse(todos) : [];
      context.commit('setTodos', localStorageTodos);
    },
    setTodo(context, payload) {
      context.commit('setTodo', payload);
    },
    addTodo(context, payload) {
      context.commit('addTodo', payload);
    },
    editTodo(context, payload) {
      context.commit('editTodo', payload)
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo', payload);
    },
    findTodo(context, id) {
      context.commit('findTodo', id);
    },
    setLocalStorageTodos(context, todos) {
      context.commit('setLocalStorageTodos', JSON.stringify(todos));
    },
    showAlert(context, payload) {
      return payload.vm.$ionic.alertController
        .create({
            header: payload.alert.header,
            message: payload.alert.message,
            buttons: ['OK']
        })
        .then(a => a.present());
    }
  },
  modules: {

  }
})
