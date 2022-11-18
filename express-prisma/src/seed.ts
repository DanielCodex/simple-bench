import { faker } from "@faker-js/faker";
import prisma from "./client";
import { Prisma } from "@prisma/client";
import exp from "constants";

const length = 100;

async function benchMark() {
  const user: Prisma.UserCreateInput[] = Array.from({ length }).map(() => ({
    email: faker.internet.email(),
    name: faker.name.firstName()
  }));
  // console.log(user);
  let res = [];
  for (let i = 0; i < user.length; i++){
    res.push(prisma.user.create({ data: user[i] }));
  }
  // ? diff `return await` Vs. `await` i should search
  return await prisma.$transaction(res);
}

async function deleteAllRecords() {
  return await prisma.user.deleteMany({});
}


async function main() {
  console.log("hard mode test");
  // benchMark();
  // deleteAllRecords();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


export default benchMark;