const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // Change if needed

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Render the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 404 Error Page
app.use((req, res) => {
    res.status(404).send("404: Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
