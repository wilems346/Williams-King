const net = require('net');


const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to server!');
    client.write('i think have called a thousand times, to tell u am sorry! for breaking your heart!\n');
});

client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
    client.end(); 
});

client.on('end', () => {
    console.log('Disconnected from server.');
});