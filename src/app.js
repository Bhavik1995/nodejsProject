const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/userMessage");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;
const { registerPartials } = require("hbs");

//setting the path
//console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//middleware
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));

app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))

app.use(express.static(staticPath));

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

//routing
app.get("/",(req,res)=>{
    res.render("index");

})



app.post("/contact",async(req,res)=>{
    try{
            //res.send(req.body);
            const userData = new User(req.body);
            await userData.save();
            res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
})

//listen
app.listen(port, ()=>{
    console.log(`Server is running at port no ${port}`);
})