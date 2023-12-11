const express=require("express");
const app= express();
const path=require("path");
const port=8080;
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.listen(port,()=>{
    console.log(`hgjk`)

})
app.get("/ig/:username",(req,res)=>{
    let {user}=req.params;
   console.log(user);
})