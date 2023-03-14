const jwt = require("jsonwebtoken");
const secretKey = "secetKey";

exports.create = async (req, res) => {
  const user = req.body;
  jwt.sign({ user }, secretKey, { expiresIn: "86400s" }, (err, token) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({ token });
  });
};




exports.createProfile = (req, res, next) => {
  
  const bearerHeader=(req.headers['authorization'])
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

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
