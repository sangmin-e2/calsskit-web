import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { copyFileSync, existsSync, mkdirSync } from 'fs';

// 빌드 후 설정 파일 복사 플러그인
const copyConfigFiles = () => {
  return {
    name: 'copy-config-files',
    writeBundle() {
      const distPath = path.resolve(__dirname, 'dist');
      const filesToCopy = ['.htaccess', 'web.config'];
      
      // dist 폴더가 없으면 생성
      if (!existsSync(distPath)) {
        mkdirSync(distPath, { recursive: true });
      }
      
      filesToCopy.forEach((file) => {
        const srcPath = path.resolve(__dirname, file);
        const destPath = path.resolve(distPath, file);
        
        if (existsSync(srcPath)) {
          try {
            copyFileSync(srcPath, destPath);
            console.log(`✓ 복사됨: ${file} → dist/${file}`);
          } catch (error) {
            console.warn(`⚠ 복사 실패: ${file}`, error);
          }
        }
      });
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), copyConfigFiles()],
    resolve: {
      alias: {
        // 🚨 수정된 부분: './src'가 아니라 현재 폴더('.')를 가리키게 했습니다.
        '@': path.resolve(__dirname, '.'),
      },
    },
    // 브라우저 호환성을 위한 설정
    define: {
      'process.env': {},
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || ''),
      'process.env.VITE_GOOGLE_API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY || process.env.VITE_GOOGLE_API_KEY || ''),
    },
    // 배포 경로 설정
    base: '/',
    // 빌드 최적화 설정
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              if (id.includes('lucide-react')) {
                return 'icon-vendor';
              }
              return 'vendor';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  };
});
