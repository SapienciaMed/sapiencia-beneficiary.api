import { HttpContext } from "@adonisjs/core/build/standalone";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SapienciaProvider from "@ioc:core.SapienciaProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class SapienciaController {
  public async getAllCallPeriod({ response }: HttpContextContract) {
    try {
      return response.send(await SapienciaProvider.getAllCallPeriod());
    } catch (err) {
      response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getAllCallModality({ response }: HttpContextContract) {
    try {
      return response.send(await SapienciaProvider.getAllCallModality());
    } catch (err) {
      response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getAllCallFounds({ response }: HttpContextContract) {
    try {
      return response.send(await SapienciaProvider.getAllCallFound());
    } catch (err) {
      response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getAllCallCreditStatus({ response }: HttpContextContract) {
    try {
      return response.send(await SapienciaProvider.getAllCallCreditStatus());
    } catch (err) {
      response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getFoundByUser(cxt: HttpContext) {
    const { request, response, logger } = cxt;
    const { document } = request.body();

    try {
      const getFound = await SapienciaProvider.getFoundByUser(document)
      return response.ok(getFound)
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }
}
