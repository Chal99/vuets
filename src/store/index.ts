import { createStore } from 'vuex'
export interface State {
  id: number,
  users: string[]
}

export default createStore<State>({
  state: {
    id: 1,
    users:[]
  },
  getters: {
  },
  mutations: {
    add_User (state, userLoad) {
      state.users.push(userLoad)
    },
    // delete_User (state, name:string) {
    //   state.users= state.users.filter(t => t !==name)
    // }
  },
  actions: {
    addUser ({commit}, userLoad) {
      commit("add_User", 
      {
        id: "ID:"+ this.state.id++,
        name: userLoad.name,
        gender: userLoad.gender,
        email: userLoad.email,
        address: userLoad.address,
        db: userLoad.db,
        age: userLoad.age, 
        role: userLoad.role,
      })
    },
    // deleteUser ({commit}, name:string) {
    //   commit("delete_User", name)
    // },
  },
})
