import { HttpContext } from "@adonisjs/core/build/standalone";
import ExternalProvider from "@ioc:core.ExternalProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class ExternalController {
    public async getProgramByUser(ctx: HttpContext) {
        const { request, response, logger } = ctx;

        let payload = request.body()

        try {
            const res = await ExternalProvider.getProgramByUser(payload)
            return response.ok(res)
        } catch (err) {
            logger.error(err);
            const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
            return response.badRequest(apiResp);
        }
    }
    public async getSubjectByUser(ctx: HttpContext) {
        const { request, response, logger } = ctx;

        let payload = request.body()

        try {
            const res = await ExternalProvider.getSubjectByUser(payload)
            return response.ok(res)
        } catch (err) {
            logger.error(err);
            const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
            return response.badRequest(apiResp);
        }
    }
}