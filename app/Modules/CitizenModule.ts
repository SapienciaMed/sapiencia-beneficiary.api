declare module "@ioc:core.CitizenProvider" {
  import { ICitizenService } from "App/Services/CitizenService";

  const CitizenProvider: ICitizenService;
  export default CitizenProvider;
}
