const Invite = require('../models/Invite');

exports.generateInviteLink = async (req, res) => {
  try {
    const { telegramId } = req.body;
    const inviteLink = `https://t.me/your_bot?start=${telegramId}`;

    const invite = new Invite({ telegramId, link: inviteLink });
    await invite.save();

    res.json({ link: inviteLink });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getInvites = async (req, res) => {
  try {
    const { telegramId } = req.params;
    const invites = await Invite.find({ telegramId });

    res.json(invites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
