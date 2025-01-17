import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    /*server: {
        port: 5173,
        host: '192.168.1.128',
    },*/
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@styles': path.resolve(__dirname, './src/styles'),
            /*'@utils': path.resolve(__dirname, './src/utils'),*/
            /*'@types': path.resolve(__dirname, './src/types'),*/
        },
    },
    build: {
        outDir: 'dist',
        minify: 'terser',
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
    },
});
