module.exports = {
    signup: (req, res) => {
        console.log(req.body)
    
        return res.status(201).json({ body: req.body })
    }
}