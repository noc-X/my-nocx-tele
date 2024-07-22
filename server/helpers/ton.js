const { TonClient } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");

TonClient.useBinaryLibrary(libNode);

async function initializeClient() {
  try {
    const client = new TonClient({
      network: {
        endpoints: ['https://main.ton.dev']
      }
    });

    console.log("TON Client initialized");
    // Perform additional operations with the client if needed
  } catch (err) {
    console.error("Failed to initialize TON Client", err);
  }
}

initializeClient();
