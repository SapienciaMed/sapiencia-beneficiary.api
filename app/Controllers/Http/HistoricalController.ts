import { HttpContext } from "@adonisjs/core/build/standalone";
import HistoricalProvider from "@ioc:core.HistoricalProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { IHistoricalFilter } from "App/Interfaces/HistoricalInterfaces";
import { ApiResponse } from "App/Utils/ApiResponses";
import { DBException } from "App/Utils/DbHandlerError";
import { filtersHistoricalSchema } from "App/Validators/filterHistoricalSchema";

export default class HistoricalController {
    public async getHistoricalPaginated(ctx: HttpContext) {
        const { request, response, logger } = ctx;
        let payload: IHistoricalFilter;

        try {
            payload = await request.validate({ schema: filtersHistoricalSchema })
        } catch (err) {
            return DBException.badRequest(ctx, err);
        }

        try {

            const HistoricalFound = await HistoricalProvider.getAllHistoricalPaginated(payload)
            return response.ok(HistoricalFound)
        } catch (err) {
            logger.error(err);
            const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
            return response.badRequest(apiResp);
        }

    }
}