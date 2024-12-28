import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public", {
  setHeaders: (res, path) =>{
      if(path.endsWith(".css")){
          res.set("Content-Type", "text/css")
      }
  }
}))

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "12345",
  port: "5432"
})

db.connect()



app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});



app.post("/register", async (req, res) => {
  const email = req.body.username
  const password = req.body.password

  const checkResult = await db.query("SELECT * FROM users WHERE email = ($1)",
    [email]
  )

  if(checkResult.rows.length > 0){
    res.send("Email already exists. Try logging in.")
  }else{
    const result = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2);",
      [email, password]
    )
    console.log(result)
    res.render("secrets.ejs")
    
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
