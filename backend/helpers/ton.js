const { TonClient } = require('ton-client-node-js');

const client = new TonClient({
  network: {
    server_address: 'main.ton.dev'
  }
});

module.exports = client;
