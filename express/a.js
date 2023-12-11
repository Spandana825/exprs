const express=require("express");
const app=express();
let port=3000;
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>{
    console.log(`app is listenong ${port}`);
})
app.get("/:user",(req,res)=>{
    let {user}=req.params;
    console.log(user);
    res.send(`${user}`);

})
app.get("/",(req,res)=>{
    res.send("asdf");
})
app.get("/jack",(req,res)=>{
    res.send("jackiee");
})
app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(q);

})

// app.use((req,res)=>{
//     res.send("hello");
// })