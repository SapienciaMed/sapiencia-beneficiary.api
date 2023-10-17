/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return "Api de servicios beneficiarios de SAPIENCIA";
});


Route.group(() => {
  Route.get("/call-periods/get-all", "SapienciaController.getAllCallPeriod");
}).prefix("/api/v1/sapiencia")


Route.group(() => {
  Route.get(
    "/get-by-id/:id",
    "CitizenController.getCitizenById"
  );
  Route.get("/get-by-parent", "CitizenController.getCitizenByAdditionalField");
  Route.get("/get-by-ids", "CitizenController.getCitizenByIds");
}).prefix("/api/v1/generic-list");
// .middleware("auth");


