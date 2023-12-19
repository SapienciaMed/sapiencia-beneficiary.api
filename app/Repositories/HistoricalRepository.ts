
export interface IHistoricalRepository {
    getHistoricalPaginated(payload)
}

export default class HistoricalRepository implements IHistoricalRepository {
    async getHistoricalPaginated(payload) {
        console.log(payload)
    }
}
