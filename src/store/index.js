import { createStore } from 'vuex'

export default createStore({
  state: {
    image: '',
    video: ''
  },
  mutations: {
    onOpen () {
      console.log('connected')
    },
    handWsRes (state, payload) {
      if (payload.id) {
        payload.content.forEach(item => {
          switch (item.type) {
            case 'image' :
              state.image = item.content
              console.log('if image', state.image)
              break
            case 'video' :
              state.video = `https://www.youtube.com/embed/${item.content}?wmode=opaque&autohide=1&autoplay=1&mute=1&loop=1&playlist=${item.content}`
              console.log('if video', state.video)
              break
          }
        })
      } else {
        switch (payload.type) {
          case 'image' :
            state.image = payload.content
            console.log('else image', state.image)
            break
          case 'video' :
            state.video = `https://www.youtube.com/embed/${payload.content}?wmode=opaque&autohide=1&autoplay=1&mute=1&loop=1&playlist=${payload.content}`
            console.log('else video', state.video)
            break
        }
      }
    }
  },
  actions: {
    onOpen ({ commit }) {
      commit('onOpen')
    },
    handWsRes ({ commit }, wsMessages) {
      commit('handWsRes', wsMessages)
    }
  },
  getters: {
    image (state) {
      return state.image
    },
    video (state) {
      return state.video
    }
  }
})
