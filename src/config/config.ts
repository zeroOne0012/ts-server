const isDev = process.env.NODE_ENV !== 'production';
const config = {
    url: 'localhost',
    port: 3002,
    dev: isDev,
};
export default config;