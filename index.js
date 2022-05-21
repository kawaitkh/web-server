const express = require('express');
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: false}))
//console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
// //    console.log(req);
//     res.send("");
// });


// app.get('/about', function (req, res) {
//     res.send('Aboutページ');
// });

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if(answer === "坂本真凛"){
        res.send("<h1>正解!!</h1>");
//        res.redirect()
    }else{
        res.send("不正解");
//        res.redirect()
}
  });


app.get('/api/v1/users', function (req, res) {
    res.send({
        name: "Kawai",
        age: 49
    });
  });

app.listen(3000, function(){
    console.log("I am running!");
});

console.log("最終行");

