
declare module "@ioc:core.ExternalProvider" {
    import { IExternalService } from "App/Services/ExternalServices"

    const ExternalProvider: IExternalService
    export default ExternalProvider
}