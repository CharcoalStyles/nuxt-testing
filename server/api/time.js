export default defineEventHandler((event) => {
    return {
        timestamp: Date.now(),
        rendered: 'server'
    };
});
