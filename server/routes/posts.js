const router = require("express").Router()
const Post = require("./../models/Post")

//CREATE POST - route and controller combined
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
      
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost) 

    } catch(err){
        res.status(500).json(err)
    }
})

//GET POST by Id
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id) 
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})

//GET ALL POST by Username or Category
router.get("/", async (req, res) => {
    const username = req.query.user  
    const catName = req.query.cat  
    const imageUrl = '' 

    try {
        let posts
        if(username) {  
             posts = await Post.find({ username })  
         } else if(catName){  
            posts = await Post.find({ 
                categories: { 
                    $in:[catName], 
                },
            })
        } else {  
            posts = await Post.find() 
        }
        res.status(200).json(posts)
    } catch(err){
        res.status(500).json(err)
    }
})
        
module.exports = router