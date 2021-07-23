const app = require("express")();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));

app.get("/", (req, res) => {
    res.send("Hello World");
});
