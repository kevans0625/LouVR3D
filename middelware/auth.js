const jwt =require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token){
            return res.status(401).json({ msg: "Authorization Denied"})
        }
const verification = jwt.verify(token, process.env.JWT_SECRET);

if(!verification){
    return res.status(401).json({msg: "Token is not valid"})
}
req.user = verification.id 
next()
    } catch (err){
        res.status(500).json({error: err.message})
    }
}
module.exports = auth