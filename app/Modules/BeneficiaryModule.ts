

declare module "@ioc:core.BeneficiaryProvider" {
    import { IBeneficiaryService } from "App/Services/BeneficiaryService"

    const BenficiaryProvider: IBeneficiaryService
    export default BenficiaryProvider
}