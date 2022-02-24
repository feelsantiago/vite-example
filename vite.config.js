import { defineConfig } from 'vite';
import path from 'path';
import htmlTemplate from 'vite-plugin-html-template';
import mpa from 'vite-plugin-mpa';
import requireConfig from 'vite-plugin-require';

export default defineConfig({
    plugins: [
        requireConfig(),
        mpa({
            open: '/home',
        }),
        htmlTemplate({
            pagesDir: 'src/pages',
            pages: {
                home: {
                    template: './src/layouts/home-layout.html',
                    title: 'HomePage',
                    page: 'home',
                },
                about: {
                    template: './src/layouts/about-layout.html',
                    title: 'AboutPage',
                    page: 'about',
                },
            },
            data: {
                title: 'HomePage',
                page: 'home',
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
