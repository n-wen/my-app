import {createStore, action} from 'easy-peasy';

const store = createStore({
  user: {
    username: "",
    loginAs: action((state, payload) =>{
      state.username = payload
    })
  }
});

export default store;