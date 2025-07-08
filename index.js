import express, { response } from "express";

const app = express();
const PORT = 3002;
const key = process.env.key
const obj = [
  {
    msg: "Hi from get endpoint",
  },
];

app.use(express.json());

//exe1

app.get("/obj", (req, res) => {
  const time = new Date();
  const message = "Hi from get endpoint - " + time.toLocaleString("he-IL");
  console.log(message);
  res.json({ msg: message });
});

//exe2
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  console.log(`i got name: ${name}`);
  res.json({ msg: `got name: ${name}` });
});

//exe3
app.get("/test", async (req, res) => {
  try {
    const response = await fetch("http://localhost:3002/greet/yonatan");
    const data = await response.json();
    if (data.msg.includes("yonatan")) {
      res.json({ result: "ok" });
    } else {
      res.json({ result: "fail" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//exe4
app.post("/action", async (req, res) => {
  if (!req.body || !req.body.action) {
    return res.status(400).json({ msg: "body is malformed" });
  }

  const action = req.body.action;

  try {
    if (action === "joke") {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      const joke = `${data.setup} ${data.punchline}`;
      res.status(200).json({ joke: joke.toUpperCase() });
    } else if (action === "cat fact") {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=12",
        {
          headers: {
            "x-api-key": key
        }}
      );
      const data = await response.json();
      res.status(200).json({ length: data.length.toString() });
    } else {
      res.status(400).json({ msg: "body is malformed" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});



app.listen(PORT, () => {
  console.log("its runing...");
});
