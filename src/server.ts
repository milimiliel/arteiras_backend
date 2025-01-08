import Fastify, { FastifyInstance } from "fastify";
import { customerProfile, productListing, categories, stores } from "../src/routes/customer/customer.routes"

const app: FastifyInstance = Fastify();

app.register(customerProfile)
app.register(productListing)
app.register(categories)
app.register(stores)

app.listen({ port: 8080 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
