import express from "express";
import { client } from "@repo/prismadb/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi there");
})

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const user = await client.user.create({
        data: {
            email,
            password
        }
    })

    res.json({
        msg: "signed up successfully",
        id: user.id
    })
})


app.listen( 3001, () => {
    console.log("running on port 3001");
})