const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected.');

    socket.write('Hello from the other side!\n');

    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);

        socket.write(`You said: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});