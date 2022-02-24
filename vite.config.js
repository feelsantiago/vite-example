import { defineConfig } from 'vite';
import path from 'path';
import htmlTemplate from 'vite-plugin-html-template';
import mpa from 'vite-plugin-mpa';

export default defineConfig({
    plugins: [
        mpa({
            open: '/home'
        }),
        // htmlTemplate(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
