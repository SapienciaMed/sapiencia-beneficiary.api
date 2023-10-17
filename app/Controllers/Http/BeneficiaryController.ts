import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BeneficiaryProvider from "@ioc:core.BeneficiaryProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class BeneficiaryConntroller{
    public async getBeneficiaryById({
        request,response,
    }: HttpContextContract){
        try {
            const { id } = request.params();
            return response.send(
              await BeneficiaryProvider
            );
          } catch (err) {
            return response.badRequest(
              new ApiResponse(null, EResponseCodes.FAIL, String(err))
            );
          }
    }
}