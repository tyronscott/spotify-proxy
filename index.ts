// redirect requests to spotify's api using bun

Bun.serve({
    fetch(request, server) {
        // redirect request to spotify's api
        return new Response('Hello, World!');
    },
})