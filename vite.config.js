import vue from '@vitejs/plugin-vue'
const path = require('path')

export default {
    plugins: [vue()],
    resolve: { dedupe: ['vue'] },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'uicons-vue',
            fileName: (format) => `uicons-vue.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
}