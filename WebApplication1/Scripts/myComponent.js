// dotNet MVC 不能使用 .vue 文件，所以使用 .js 文件代替
// 放在 cshtml 會導致排版完全失效
const componentSource = /* <!-- */`
      <template>
        <span class="example">{{ msg }}</span>
      </template>
      <script>
        export default {
          data () {
            return {
              msg: 'world!'
            }
          }
        }
      </script>

      <style scoped>
        .example {
          color: red;
        }
      </style>
    `/* --> */;

export { componentSource };