import type { ApplicationContract } from "@ioc:Adonis/Core/Application";

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    // Register your own bindings

    /**************************************************************************/
    /******************************** SERVICES ********************************/
    /**************************************************************************/
    const CitizenService = await import("App/Services/CitizenService");
    const SapienciaService = await import("App/Services/SapienciaService");
    const BeneficiaryService = await import("App/Services/BeneficiaryService");
    /**************************************************************************/
    /************************ EXTERNAL SERVICES ********************************/
    /**************************************************************************/

    const CitizenAttentionService = await import("App/Services/External/CitizenAttentionService"); 

    /**************************************************************************/
    /******************************** REPOSITORIES ****************************/
    /**************************************************************************/
    const CitizenRepository = await import(
      "App/Repositories/CitizenRepository"
    );

    const CallPeriodRepository = await import(
      "App/Repositories/Sapiencia/CallPeriodRepository"
    );

    const CallModalityRepository = await import(
      "App/Repositories/Sapiencia/CallModalityRepository"
    );

    const CallFoundRepository = await import(
      "App/Repositories/Sapiencia/CallFoundRepository"
    );

    const CallCreditStatusRepository = await import(
      "App/Repositories/Sapiencia/CallCreditStatusRepository"
    );

    const BeneficiaryRepository = await import(
      "App/Repositories/BeneficiaryRepository"
    );
    /**************************************************************************/
    /******************************** CORE  ***********************************/
    /**************************************************************************/

    this.app.container.singleton(
      "core.CitizenProvider",
      () => new CitizenService.default(new CitizenRepository.default())
    );

    this.app.container.singleton(
      "core.SapienciaProvider",
      () =>
        new SapienciaService.default(
          new CallPeriodRepository.default(),
          new CallModalityRepository.default(),
          new CallFoundRepository.default(),
          new CallCreditStatusRepository.default()
        )
    );

    this.app.container.singleton(
      "core.BeneficiaryProvider",
      () => new BeneficiaryService.default(new BeneficiaryRepository.default(), new CitizenAttentionService.default())
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
