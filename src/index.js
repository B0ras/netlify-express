const app = require("express")();

app.listen(5000, () => console.log(`API on http://localhost:5000`));

app.get("/", (res, req) => {
    res.send("Hello World");
});
