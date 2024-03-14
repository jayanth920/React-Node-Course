import {
  createTRPCProxyClient,
  httpBatchLink
} from "@trpc/client";
// import { AppRouter } from "../../server/api";


const client = createTRPCProxyClient({
  links: [
    httpBatchLink({
        url: "http://localhost:8080/trpc",
      }),
  ],
});

// // Retrieve elements
const iD = document.getElementById("inputData") as HTMLInputElement;
const button = document.getElementById("submit");

button?.addEventListener("click", async () => {
  const inputData = iD.value;
  console.log(inputData);

// sayHi
const result0 = await client.sayHi.query();
console.log(result0);

// log
const result1 = await client.log.mutate(inputData);
console.log(result1);

// getUser
const result2 = await client.getUser.query({
  userId: "234"
});
console.log(result2);

// update
const result3 = await client.update.mutate({userId: "234", name: "jeff"});
console.log(result3);

// secretData
const result4 = await client.secretData.query();
console.log(result4);

});


