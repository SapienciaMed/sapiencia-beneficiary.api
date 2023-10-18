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

  public async getAllCallCreditStatus({response}:HttpContextContract){
    try {
      return response.send(await SapienciaProvider.getAllCallCreditStatus());
    } catch (err) {
      response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
}
