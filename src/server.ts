import { app } from "./app";

console.log("APP TYPE:", typeof app);
console.log("APP LISTEN:", typeof (app as any).listen);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
