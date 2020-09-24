const User = require("../modals/user");


exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
          console.log(err);
        return res.status(400).json({
          err: "NOT able to save user in DB"
        });
      }
      res.json({
        name: user.name,
        email: user.email,
        id: user._id
      });
    });
  };


exports.signout = (req,res) =>{
    res.send("user signout from controller successfully");
};
