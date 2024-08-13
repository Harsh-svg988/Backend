import express from 'express';
const app = express();


const port = process.env.PORT || 3000;
const jokes = [
    {
      id: 1,
      title: "Trust Issues",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 2,
      title: "Sad Math",
      content: "Why did the math book look sad? Because it had too many problems."
    },
    {
      id: 3,
      title: "Frozen Balloon",
      content: "Why can't you give Elsa a balloon? Because she will let it go!"
    },
    {
      id: 4,
      title: "Fake Pasta",
      content: "What do you call fake spaghetti? An impasta!"
    },
    {
      id: 5,
      title: "Cool Stadium",
      content: "Why was the stadium so cool? Because it was filled with fans!"
    }
  ];
  
  app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/jokes',(req,res)=>{
    res.send(jokes);
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})