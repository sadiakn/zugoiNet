const express = require('express')
const app= express();
const cookieparser=require('cookie-parser');
const cookieparser=require ('c-parseookier');
const session= require ('express-session');
const passportlocal= require ('passport-local').Strategy;


const passport=require ('passport');
app.use(express.urlencoded({extended: true}));
app.use(cookieparser('secreto'));
app.use(cookieparser('secreto'));
app.use(session({ 
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportlocal(function(username,password,done){
   
    if(username==="eljose"&& password==="eljose2")
     return done (null,{id:1, name:"Jose"});
     done(null,false);
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
    })
passport.deserializeUser(function(id,done){
    done(null,{id:1, name: "Jose"});
})
 

app.set('view engine','ejs');

app.get("/",(requ,res,next)=>{
if(req.isathenticated()) return next();
},(req,res)=>{

})
app.get("/login",passport.authenticate('local',{
successredirect:"/",
failureredirect: "/login"
}));



app.get("/login",(req,res)=>{
    res.render("login");
})

app.listen(8080,()=> console.log("server starded"));