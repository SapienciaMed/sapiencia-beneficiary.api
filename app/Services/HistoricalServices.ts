import HistoricalRepository from "App/Repositories/HistoricalRepository";

export interface IHistoricalService {
    getAllHistoricalPaginated(payload)
}

export default class HistoricalService implements IHistoricalService {
    constructor(private historicalRepository: HistoricalRepository) { }

    async getAllHistoricalPaginated(payload) {
        const res = await this.historicalRepository
        console.log(res, payload)
    }
}