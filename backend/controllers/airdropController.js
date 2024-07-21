const User = require('../models/User');
const tonClient = require('../helpers/ton');

exports.getUserAirdrop = async (req, res) => {
  try {
    const user = await User.findOne({ telegramId: req.params.telegramId });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user.airdrop);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.claimAirdrop = async (req, res) => {
  try {
    const { telegramId } = req.body;
    let user = await User.findOne({ telegramId });

    if (!user) return res.status(404).json({ msg: 'User not found' });

    // Logic to claim airdrop and interact with TON blockchain
    if (!user.walletAddress) return res.status(400).json({ msg: 'Wallet not connected' });

    const result = await tonClient.processing.process_message({
      send_events: false,
      message_encode_params: {
        address: user.walletAddress,
        abi: { type: 'Contract', value: userContractAbi },
        call_set: { function_name: 'claimAirdrop', input: {} },
        signer: { type: 'Keys', keys: user.keys },
      },
    });

    res.json({ msg: 'Airdrop claimed successfully', result });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
