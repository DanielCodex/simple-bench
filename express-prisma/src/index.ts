import prisma from "./client";
import express, { Express, Request, Response } from "express";
import benchMark from "./seed";

const app: Express = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  let data = await benchMark()
  console.log(data);
  res.json(data);
});

app.post("/create", async (req: Request, res:Response) => {
  let username = req.query.username;
  let email = req.query.email;
  let createUser = await prisma.user.create({
    data: {
      email: email as string,
      name: username as string
    }
  });
  console.log(`username=${username} email=${email}`);
  res.json(createUser);
})

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
