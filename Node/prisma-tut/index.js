const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---------------- USER ------------------------------
app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.post("/", async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body //have also tried this "data: { firstName: req.body.firstName,lastName: req.body.lastName, age: req.body.age,},"
  });
  res.json(newUser);
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const newAge = req.body.age;
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: { age: newAge },
  });
  res.json(updatedUser);
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: { id: id },
  });
  res.json(deletedUser);
});

// ---------------- HOUSE ------------------------------

app.post("/house", async (req,res) => {
    const newHouse = await prisma.house.create({data: req.body});
    res.json(newHouse);
})

app.get("/house", async (req,res)=> {
    const allHouses = await prisma.house.findMany({
        include:{
            owner: true,
            builtBy: true,
        }
    })
    res.json(allHouses)
})

app.get("/house/filter", async (req,res)=> {
  const allHouses = await prisma.house.findMany({
    where:{
      wifiPassword: {
        not: null,
      },
      owner:{
        age:20
      }
    },
      include:{
          owner: true,
          builtBy: true,
      }
  })
  res.json(allHouses)
})



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
