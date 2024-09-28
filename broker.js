const mosca = require('mosca');
const settings = { port: 1883 };

const broker = new mosca.Server(settings);

broker.on('ready', () => {
  console.log('Broker Up!');
});

broker.on('clientConnected', (client) => {
  console.log('client connected', client.id);
});

broker.on('clientDisconnected', (client) => {
  console.log('client disconnected', client.id);
});

broker.on('published', (packet, client) => {
  console.log('Published', packet.topic, packet.payload.toString());
});