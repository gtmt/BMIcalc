const express =require("express");
const app = express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("views","./views");
app.set("view engine","ejs");
app.get("/",(req,res)=>{

    res.render("index",{value:""});
});
app.post("/",(req,res)=>{
    let weight=Number(req.body.weight);
    let height=Number(req.body.height);
    let bmi=(weight/((height)*(height)));
    let value=bmi.toFixed(2);
    res.render("index",{value:value});
    
});
app.listen(3000,()=>{
    console.log("the server is running in port 3000");
});