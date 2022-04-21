<template>
  <div class="wrap">
    <div class="bg-cover banner">
      <!-- <div class="video full-size bg-cover" style="background-image:url('https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')">
      </div> -->
      <img v-show="isLoading" class="loading" src="~@/assets/load.gif" alt="">
      <div v-show="showImage" class="video full-size bg-cover" :style="{backgroundImage:'url(' +image+ ')'}"></div>
      <div class="video" v-show="!showImage">
        <YoutubeVue3 ref="youtube" :videoid="video" :width="width" :height="height"
          @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
      </div>

      <a id="C--top-center-1" class="top-1 d-block smart-city-web-btn" target="_blank" href="https://www.oexpo.io/vb/61f35acfb62f2dec9646b5c8"></a>
      <a id="C--top-center-2" class="top-2 d-block smart-city-web-btn" target="_blank" href="https://smartcityonline.org.tw/pavilion.php?vip=secom"></a>
      <a id="C--top-center-3" class="top-3 d-block smart-city-web-btn" target="_blank" href="https://www.kymco.com.tw/"></a>
      <a id="C--top-center-4" class="top-4 d-block smart-city-web-btn" target="_blank" href="https://www.oexpo.io/vb/61f35acfb62f2dec9646b5c6"></a>

      <a id="C--mid-center-1" class="left-1 d-block smart-city-web-btn"  target="_blank" href="https://smartcityonline.org.tw/pavilion.php?vip=cht"></a>
      <a id="C--mid-center-2" class="left-2 d-block smart-city-web-btn"  target="_blank" href="https://smartcityonline.org.tw/pavilion.php?vip=kaohsiung"></a>
      <a id="C--mid-center-3" class="left-3 d-block smart-city-web-btn"  target="_blank" href="https://smartcityonline.org.tw/pavilion.php?vip=taipei"></a>
      <a id="C--mid-center-4" class="left-4 d-block smart-city-web-btn"  target="_blank" href="https://smartcityonline.org.tw/pavilion.php?vip=fet"></a>

      <a id="C--connect-exhibition-area" class="bottom d-block smart-city-web-btn" target="_blank" href="https://www.oexpo.io/vb/61f35acfb62f2dec9646b5ca"></a>

    </div>
  </div>
</template>

<script>
import { connectSocket } from '@/webSocket/webSocket'
import YoutubeVue3 from '@/components/YoutubeVue3.vue'
export default {
  components: {
    YoutubeVue3
  },
  data () {
    return {
      showImage: false,
      isLoading: true
    }
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    image () {
      return this.$store.getters.image
    },
    video () {
      return this.$store.getters.video
    }
  },
  watch: {
    image () {
      if (this.image) {
        this.showImage = true
        this.isLoading = false
        // console.log('watch, image', this.image, this.showImage)
      }
    },
    video () {
      if (this.video) {
        this.showImage = false
        this.isLoading = false
        // console.log('watch,video', this.video, !this.showImage)
      }
    }
  },
  methods: {
    onPlayed () {
      console.log('## OnPlayed')
    },
    onEnded () {
      console.log('## OnEnded')
      this.$refs.youtube.player.seekTo(0)
    },
    onPaused () {
      console.log('## OnPaused')
    }
  },
  mounted () {
    this.$http.get(`${process.env.VUE_APP_URL}/template/${this.$route.query.uuid}`)
      .then(res => {
        // console.log(res)
        connectSocket(res.data.uuid)
        this.$refs.youtube.player.mute()
      })
    // console.log(process.env.VUE_APP_GTM)
  }
}
</script>

<style lang="scss" scoped>
*{
  position: relative;
}
.bg-cover{
  background-position: center center;
  background-size: cover;
}
.full-size{
  width: 100%;
  height: 100%;
}
.d-block{
  display: block;
}
.banner{
  background-image: url('~@/assets/智慧程式展_web_confirm.png');
  padding-top: 56.25%;
  .top-1{
    // background-color: green;
    position: absolute;
    top: 8%;
    left: 10%;
    width: 8%;
    height: 20%;
  }
  .top-2{
    // background-color: green;
    position: absolute;
    transform-style:  preserve-3d;
    transform:rotate(-15deg);
    top: 13%;
    left: 41.5%;
    width: 7%;
    height: 13.5%;
  }
  .top-3{
    // background-color: green;
    position: absolute;
    transform-style:  preserve-3d;
    transform:rotate(15deg);
    top: 13%;
    right: 41.5%;
    width: 7%;
    height: 13.5%;
  }
  .top-4{
    // background-color: green;
    position: absolute;
    transform-style:  preserve-3d;
    transform: rotate(-1.5deg);
    top: 8%;
    right: 15.5%;
    width: 8%;
    height: 20%;
  }
  .rect-1{
    // background-color: red;
    position: absolute;
    top: 32.5%;
    left: 0.8%;
    width: 4.5%;
    height: 28.5%;
  }
  .left-1{
    // background-color: orange;
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .left-2{
    // background-color: orange;
    position: absolute;
    top: 50%;
    left: 20.5%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .left-3{
    // background-color: yellow;
    position: absolute;
    top: 50%;
    right: 21%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .left-4{
    // background-color: yellow;
    position: absolute;
    top: 50%;
    right: 6.5%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .rect-2{
    // background-color: red;
    position: absolute;
    top: 32.5%;
    right: 0.8%;
    width: 4.5%;
    height: 28.5%;
  }
  .video{
    position: absolute;
    top: 31.3%;
    left: 36.15%;
    width: 27%;
    height: 27%;
  }
  .bottom{
    // background-color: skyblue;
    position: absolute;
    bottom: 22%;
    left: 15%;
    right: 20%;
    width: 69.5%;
    height: 19%;
  }
}
.loading{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media(max-width:560px) {
    width: 20px;
    height: 20px;
  }
}

</style>
