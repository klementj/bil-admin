<template>
  <div class="loader" @change="change" @dragover="dragover" @drop="drop">
    <p>Drop image here or
      <label for="file" class="browse">browse...
        <input id="file" class="sr-only" type="file" accept="image/*">
      </label>
    </p>
  </div>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example%3a_Using_object_URLs_to_display_images
const URL = window.URL || window.webkitURL

export default {
  name: 'ImageInput',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    read(files) {
      return new Promise((resolve, reject) => {
        if (!files || files.length === 0) {
          resolve()
          return
        }

        const file = files[0]

        if (/^image\/\w+$/.test(file.type)) {
          if (URL) {
            resolve({
              loaded: true,
              name: file.name,
              type: file.type,
              url: URL.createObjectURL(file)
            })
          } else {
            reject(new Error('Your browser is not supported.'))
          }
        } else {
          reject(new Error('Please choose an image file.'))
        }
      })
    },

    change({ target }) {
      this.read(target.files)
        .then( data => {
          target.value = ''
          this.update(data)
        })
        .catch( error => {
          target.value = ''
          this.alert(error)
        })
    },

    dragover(event) {
      event.preventDefault()
    },

    drop(event) {
      event.preventDefault()
      this.read(event.dataTransfer.files).catch(this.alert)
    },

    alert(event) {
      window.alert(event && event.message ? event.message : event)
    },

    update(data) {
      Object.assign(this.data, data);
    }
  }
}
</script>

<style scoped>
.loader {
  display: table;
  height: 0;
  overflow: hidden;
  width: 100%;

  min-height: 400px;
  background: white;
  border: 1px dotted lightgray;
}

.loader > p {
  color: #999;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.browse {
  color: #0074d9;
  cursor: pointer;
  /* margin-left: .25rem; */
}

.browse:hover {
  color: #08f;
  text-decoration: underline;
}

.sr-only{
  display: none;
}
</style>
