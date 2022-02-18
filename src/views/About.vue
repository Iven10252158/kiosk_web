<template>
  <div class="wrap">
    <div class="bg-cover banner">
      <div v-show="showImage" class="video full-size bg-cover" :style="{backgroundImage:'url(' +image+ ')'}"></div>
      <div class="video" v-show="!showImage">
        <iframe class="full-size d-block" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <a class="top-1 d-block" target="_blank" href="https://osensetech.com/"></a>
      <a class="top-2 d-block" target="_blank" href="https://osensetech.com/"></a>
      <a class="top-3 d-block" target="_blank" href="https://osensetech.com/"></a>
      <a class="top-4 d-block" target="_blank" href="https://osensetech.com/"></a>

      <a class="rect-1 d-block" target="_blank" href="https://osensetech.com/"></a>
      <a class="left-1 d-block"  target="_blank" href="https://osensetech.com/"></a>
      <a class="left-2 d-block"  target="_blank" href="https://osensetech.com/"></a>
      <a class="left-3 d-block"  target="_blank" href="https://osensetech.com/"></a>
      <a class="left-4 d-block"  target="_blank" href="https://osensetech.com/"></a>
      <a class="rect-2 d-block" target="_blank" href="https://osensetech.com/"></a>

      <a class="bottom d-block" target="_blank" href="https://osensetech.com/"></a>

    </div>
  </div>
</template>

<script>
import { connectSocket } from '@/webSocket/webSocket'
export default {
  data () {
    return {
      showImage: false
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
      this.showImage = true
      console.log('watch image', this.showImage, this.image)
    },
    video () {
      this.showImage = false
      console.log('watch video', this.showImage, this.video)
    }
  },
  mounted () {
    this.$http.get(`http://20.106.156.149:8080/template/${this.$route.query.uuid}`)
      .then(res => {
        // console.log(res)
        connectSocket(res.data.uuid)
      })
    console.log(this.$route.query.uuid)
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
  background-image: url('~@/assets/banner.png');
  padding-top: 56.25%;
  .top-1{
    background-color: green;
    position: absolute;
    top: 8%;
    left: 10%;
    width: 7.5%;
    height: 27%;
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
    background-color: green;
    position: absolute;
    transform-style:  preserve-3d;
    transform:rotate(15deg);
    top: 13%;
    right: 41.5%;
    width: 7%;
    height: 13.5%;
  }
  .top-4{
    background-color: green;
    position: absolute;
    transform-style:  preserve-3d;
    transform: rotate(-1.5deg);
    top: 8%;
    right: 15.5%;
    width: 7.5%;
    height: 27%;
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
    background-color: orange;
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .left-2{
    background-color: orange;
    position: absolute;
    top: 50%;
    left: 20.5%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .left-3{
    background-color: yellow;
    position: absolute;
    top: 50%;
    right: 21%;
    transform: translateY(-55%);
    width: 14%;
    height: 12%;
  }
  .left-4{
    background-color: yellow;
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
    top:30%;
    left: 36.15%;
    width: 27%;
    height: 28%;
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

</style>
