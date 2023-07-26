import app from "./app.js";
import connectToDB from "./utils/connectMongo.js";

(async () => {
  await connectToDB();
})();

app.listen(process.env.PORT, () => {
  console.log("listening on localhost:" + process.env.PORT);
});
