exports.submitPartnership = async (req, res) => {
    try {
      const { name, email, message } = req.body;
      // Save partnership request to database
  
      res.json({ msg: 'Partnership request submitted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  