exports.uploadFile = (req, res) => {
  res.json({ imgurl: req.file.location});
};
