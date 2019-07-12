<template>
  <div class="editor">
    <div class="canvas">
      <img :src="data.url" ref="image" :alt="data.name" @load="start"/>
    </div>

    <div class="toolbar" v-if="cropper" @click.prevent="click">
      <div class="item-group v-btn-toggle">
        <!-- <button class="toolbar__button v-btn v-btn--flat" data-action="move" title="Move (M)" type="button">
          <v-icon>mdi-cursor-move</v-icon>
        </button> -->
        <button class="toolbar__button v-btn v-btn--flat" data-action="zoom-in" title="Zoom In (I)" type="button">
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </button>
        <button class="toolbar__button v-btn v-btn--flat" data-action="zoom-out" title="Zoom Out (O)" type="button">
          <v-icon>mdi-magnify-minus-outline</v-icon>
        </button>
        <button class="toolbar__button v-btn v-btn--flat" data-action="rotate-left" title="Rotate Left (L)" type="button">
          <v-icon>mdi-rotate-left</v-icon>
        </button>
        <button class="toolbar__button v-btn v-btn--flat" data-action="rotate-right" title="Rotate Right (R)" type="button">
          <v-icon>mdi-rotate-right</v-icon>
        </button>
      <!-- </div> -->
      <!-- <div class="item-group v-btn-toggle v-btn-toggle--selected"> -->
        <button class="toolbar__button v-btn v-btn--flat" data-action="crop" title="Crop (C)" type="button">
          <span>crop</span>
          <v-icon>mdi-check</v-icon>
        </button>
      </div>
    </div>

    <div class="toolbar" v-else @click.prevent="click">
      <div class="item-group v-btn-toggle">
        <button class="toolbar__button v-btn v-btn--flat" data-action="undo" title="Undo last crop (CTRL + Z)" type="button">
          <span>Undo crop</span>
          <v-icon>mdi-undo-variant</v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      canvasData: null,
      cropBoxData: null,
      croppedData: null,
      cropper: null
    }
  },

  methods: {
    click({ target }) {
      const { cropper } = this
      const action = target.getAttribute('data-action') || target.parentElement.getAttribute('data-action')
    
      switch (action) {
        case 'move':
        case 'crop':
          this.crop()
          break

        case 'undo':
          this.restore()
          break

        case 'zoom-in':
          cropper.zoom(0.1)
          break

        case 'zoom-out':
          cropper.zoom(-0.1)
          break

        case 'rotate-left':
          cropper.rotate(-90)
          break

        case 'rotate-right':
          cropper.rotate(90)
          break

        default:
      }
    },

    keydown(e) {
      const { key } = e
      
      switch (key) {
        case 'z':
          if (e.ctrlKey)
          this.restore()    
          break;
      
        case 'Delete':
          this.reset()
          break

        default:
      }

      const { cropper } = this;

      if (!cropper) {
        return;
      }

      switch (key) {
        case 'Enter':
          this.crop()
          break
        
        default:
          break
      }
    },

    // dblclick(e) {
    //   if (e.target.className.indexOf('cropper-face') >= 0) {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     this.crop()
    //   }
    // },

    start() {
      const { data } = this
      
      if (data.cropped) {
        return
      }

      this.cropper = new Cropper( this.$refs.image, {
        autoCrop: true,
        background: true,
        dragMode: 'move',
        aspectRatio: 16 / 9,

        ready: () => {
          if (!this.croppedData) {
            this.cropper
              .crop()
              .setData(this.cropBoxData)
              .setCanvasData(this.canvasData)
              .setCropBoxData(this.cropBoxData)

            this.croppedData = null
            this.canvasData = null
            this.cropBoxData = null
          }
        },

        crop: ({ detail }) => {
          if (detail.width > 0 && detail.heigh > 0 && !data.cropping) {
            this.update({
              cropping: true
            })
          }
        }
      })
    },

    stop() {
      if (this.cropper) {
        this.cropper.destroy()
        this.cropper = null
      }
    },

    async crop() {
      const { cropper, data } = this

      if (!data.cropping) {
        
        this.croppedData = cropper.getData()
        this.canvasData = cropper.getCanvasData()
        this.cropBoxData = cropper.getCropBoxData()
        this.update({
          cropped: true,
          cropping: false,
          previousUrl: data.url,
          url: cropper.getCroppedCanvas(data.type === 'image/png' ? {} : {
            fillColor: '#fff'
          }).toDataURL(data.type),
          blob: await new Promise(resolve => {
            cropper.getCroppedCanvas().toBlob(resolve)
          })
        })
        this.stop()
      }
    },

    clear() {
      if (this.data.cropping) {
        this.cropper.clear()
        this.update({
          cropping: false
        })
      }
    },

    restore() {
      if (this.data.cropped) {
        this.update({
          cropped: false,
          previousUrl: '',
          url: this.data.previousUrl
        })
      }
    },

    reset() {
      this.stop()
      this.update({
        cropped: false,
        cropping: false,
        loaded: false,
        name: '',
        previousUrl: '',
        type: '',
        url: ''
      })
    },

    update(data) {
      Object.assign(this.data, data)
    }
  },

  mounted() {
    window.addEventListener('keydown', (this.onKeydown = this.keydown.bind(this)))
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeydown)
    this.stop()
  }
}
</script>

<style>
.editor {
    /* height: 100%; */
    overflow: hidden;
    margin-bottom: 1rem;
}

.toolbar {
  /* background: lightgray; */
  border: 1px solid lightgray;
  border-top: 0;
}

.canvas {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

}
.canvas > img {
  max-width: 100%;
}

.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  touch-action: none;
  user-select: none;
}
.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}
.cropper-wrap-box, .cropper-canvas, .cropper-drag-box, .cropper-crop-box, .cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.cropper-wrap-box, .cropper-canvas {
  overflow: hidden;
}
.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}
.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}
.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}
.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}
.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}
.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}
.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}
.cropper-center::before, .cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}
.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}
.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}
.cropper-face, .cropper-line, .cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}
.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}
.cropper-line {
  background-color: #39f;
}
.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}
.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}
.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}
.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}
.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}
.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}
.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}
.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}
.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}
.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}
.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}
@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}
@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}
@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}
.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}
.cropper-invisible {
  opacity: 0;
}
/* .cropper-bg { */
  /* background-image: url('../images/bg.png'); */
/* } */
.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.cropper-hidden {
  display: none !important;
}
.cropper-move {
  cursor: move;
}
.cropper-crop {
  cursor: crosshair;
}
.cropper-disabled .cropper-drag-box, .cropper-disabled .cropper-face, .cropper-disabled .cropper-line, .cropper-disabled .cropper-point {
  cursor: not-allowed;
}

</style>
