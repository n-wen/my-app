import {createStore, action} from 'easy-peasy';

const store = createStore({
  user: {
    username: "",
    loginAs: action((state, payload) =>{
      state.username = payload
    })
  },
  userlist: {
    userlist: [],
    loadUserlist: action((state, payload) => {
      state.userlist = payload
    })
  }
});

export default store;