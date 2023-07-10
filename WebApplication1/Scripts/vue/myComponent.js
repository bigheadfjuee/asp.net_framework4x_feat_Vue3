// dotNet MVC 不能使用 .vue 文件，所以使用 .js 文件代替
// 而 vue scf 的內容 ` `若放在 cshtml 會導致排版完全失效

const myComponentVue = /* <!-- */`
      <template>
        <div>
            <button class="my-button" @click="count++" > count++: {{count}} </button>
        </div>
      </template>

      <script setup>
        import { ref } from 'vue'

        const count = ref(0)
      </script>

      <style scoped>
        .my-button {
          color: red;
        }
      </style>
    `/* --> */;

export { myComponentVue };