import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  }
}
