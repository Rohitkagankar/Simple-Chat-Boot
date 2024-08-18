const mongoose=require("mongoose")
const Chat=require("./models/chat.js");
const path=require("path");
const methodOverride=require("method-override");

const app=express();
const port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//mongodb connection----

main()
.then(()=>{
    console.log("connection successfull.");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/insta");
}



// listning port----
app.listen(port,()=>{
    console.log(`app is listning on port ${port}`);
    
})