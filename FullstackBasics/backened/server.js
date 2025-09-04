import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

//get a list of five jokes 
app.get("/api/jokes", (req, res) => {
    const jokes = [
        { id: 1,title:"Joke 1", content : "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 2,title:"Joke 2", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 3,title: "Joke 3", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 4,title: "Joke 4", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 5,title: "Joke 5", content: "Why don't scientists trust atoms? Because they make up everything!" },
    ];
    res.send(jokes);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server address is http://localhost:${PORT}`);
});

