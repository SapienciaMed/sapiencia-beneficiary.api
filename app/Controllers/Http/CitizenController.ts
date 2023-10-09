import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CitizenProvider from "@ioc:core.CitizenProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class CitizenController {
  public async getCitizenById({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { id } = request.params();
      return response.send(
        await CitizenProvider.getCitizenById(id)
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
}
