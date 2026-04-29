import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
console.log(__dirname, "dirname");

//make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
