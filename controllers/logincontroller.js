const jwt = require("jsonwebtoken");
const secretKey = "secetKey";

exports.create = async (req, res) => {
  const user = req.body;
  jwt.sign({ user }, secretKey, { expiresIn: "86400s" }, (err, token) => {
    res.json({ token });
  });
};




exports.createProfile = (req, res, next) => {
  
  const bearerHeader=(req.headers['authorization'])
//   res.setHeader('Access-Control-Allow-Origin','*')
//   const bearerHeader = req.body.headers.Authorization;
  console.log(bearerHeader)
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  console.log(token);

  jwt.verify(token, secretKey, (err, authData) => {
    if (err) {
      res.send({result:'Invalid Token'});
    } else {
      res.json({ message: "Profile accessed", authData });
    }
  });
};

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   console.log(bearerHeader);
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader(" ");
//     const token = bearer[1];
//     req.token = token;
//     next();
//   } else {
//     res.send("Token is not valid");
//   }
// }
