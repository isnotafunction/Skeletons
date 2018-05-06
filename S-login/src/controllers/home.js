exports.get = (req, res, next) => {
  console.log('home route reached');
  res.render('home');
};
