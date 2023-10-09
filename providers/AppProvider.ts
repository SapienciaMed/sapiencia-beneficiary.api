import type { ApplicationContract } from "@ioc:Adonis/Core/Application";

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    // Register your own bindings

    /**************************************************************************/
    /******************************** SERVICES ********************************/
    /**************************************************************************/
    const CitizenService = await import("App/Services/CitizenService");

    /**************************************************************************/
    /************************ EXTERNAL SERVICES ********************************/
    /**************************************************************************/

    /**************************************************************************/
    /******************************** REPOSITORIES ****************************/
    /**************************************************************************/
    const CitizenRepository = await import(
      "App/Repositories/CitizenRepository"
    );

    /**************************************************************************/
    /******************************** CORE  ***********************************/
    /**************************************************************************/

    this.app.container.singleton(
      "core.CitizenProvider",
      () => new CitizenService.default(new CitizenRepository.default())
    );
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
