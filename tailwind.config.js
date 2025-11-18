/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 👈 이 줄 추가!
  theme: {
    extend: {
      colors: {
        // 커스텀 색상 (선택사항)
        primary: {
          light: '#3b82f6',
          dark: '#1e40af',
        },
      },
      screens: {
        // 추가 브레이크포인트 (선택사항)
        xs: '475px',
        // sm: 640px (기본값)
        // md: 768px (기본값)
        // lg: 1024px (기본값)
        // xl: 1280px (기본값)
      },
    },
  },
  plugins: [],
};
