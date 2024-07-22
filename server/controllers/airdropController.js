const Airdrop = require('../models/Airdrop');

// Get Airdrop Info
exports.getAirdropInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const airdrop = await Airdrop.findOne({ userId });
    if (!airdrop) {
      return res.status(404).json({ msg: 'Airdrop info not found' });
    }
    res.json(airdrop);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Claim Airdrop
exports.claimAirdrop = async (req, res) => {
  try {
    const { userId } = req.params;
    const airdrop = await Airdrop.findOne({ userId });
    if (!airdrop) {
      return res.status(404).json({ msg: 'Airdrop info not found' });
    }
    if (airdrop.claimed) {
      return res.status(400).json({ msg: 'Airdrop already claimed' });
    }
    // Integrate with wallet to transfer tokens
    const transferSuccess = true; // Replace with actual transfer logic
    if (transferSuccess) {
      airdrop.claimed = true;
      await airdrop.save();
      res.json({ msg: 'Airdrop claimed and tokens transferred successfully' });
    } else {
      res.status(500).json({ msg: 'Failed to transfer tokens' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Add Airdrop Points
exports.addAirdropPoints = async (req, res) => {
  try {
    const { userId, points, ageDays, isPremium } = req.body;
    let airdrop = await Airdrop.findOne({ userId });
    if (!airdrop) {
      airdrop = new Airdrop({ userId, points, ageDays, isPremium });
    } else {
      airdrop.points += points;
    }
    await airdrop.save();
    res.json(airdrop);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
