const User = require('../models/User');

exports.connectWallet = async (req, res) => {
  try {
    const { telegramId, walletAddress } = req.body;
    let user = await User.findOne({ telegramId });

    if (!user) {
      user = new User({ telegramId, walletAddress });
      await user.save();
    } else {
      user.walletAddress = walletAddress;
      await user.save();
    }

    res.json({ msg: 'Wallet connected successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
