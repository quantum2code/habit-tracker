import e from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { signup, login, getUser } from "./auth/auth.js";
import { protect } from "./middleware/auth.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import options from "./config/swagger.js";


dotenv.config();
connectDB();
const app = e();
app.use(cors());
app.use(e.json());
const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Habit Tracker API");
});

app.post("/signup", signup);
app.post("/login", login);
app.get("/me", protect, getUser);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
