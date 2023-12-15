declare module "@ioc:core.HistoricalProvider" {
    import { IHistoricalService } from "App/Services/HistoricalServices";

    const HistoricalProvider: IHistoricalService

    export default HistoricalProvider
}