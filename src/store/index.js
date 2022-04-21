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
            case 'video':
            // state.video.src = `https://www.youtube.com/embed/${item.content}?wmode=opaque&autohide=1&autoplay=1&mute=0&loop=1&playlist=${item.content}`
              item.content.replace('\n', '')
              state.video = item.content.replace('\n', '')
              // console.log('if video', state.video)
              break
            case 'stream':
            // state.video.src = `https://www.youtube.com/embed/${item.content}?wmode=opaque&autohide=1&autoplay=1&mute=0&loop=1&playlist=${item.content}`
              state.video = item.content.replace('\n', '')
              // console.log('if stream', state.video)
              break
          }
        })
      } else {
        switch (payload.type) {
          case 'image' :
            state.image = payload.content
            state.video = ''
            // console.log('else image', state.image)
            break
          case 'video':
          // payload.content.replace('\n', '')
            state.video = payload.content.replace('\n', '')
            state.image = ''
            // console.log('content', state.video)
            break
          case 'stream':
            state.video = payload.content.replace('\n', '')
            state.image = ''
            // console.log('content', state.video)
            // state.video.src = `https://www.youtube.com/embed/${payload.content}?wmode=opaque&autohide=1&autoplay=1&mute=0&loop=1&playlist=${payload.content}`
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
