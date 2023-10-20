import { HttpContext } from "@adonisjs/core/build/standalone";
import BeneficiaryProvider from "@ioc:core.BeneficiaryProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { IBeneficiaryFilter } from "App/Interfaces/BeneficiaryInterfaces";
import { ApiResponse } from "App/Utils/ApiResponses";
import { DBException } from "App/Utils/DbHandlerError";
import { filtersBeneficiarySchema } from "App/Validators/filterBeneficiarySchema";

export default class BeneficiaryController {
  public async getBeneficiaryPaginated(ctx: HttpContext) {
    const {request,response,logger} = ctx
    let payload : IBeneficiaryFilter
    try{
        payload = await request.validate({schema : filtersBeneficiarySchema})
    }catch (err){
        return DBException.badRequest(ctx, err);
    }
    try {
        const beneficiaryFound = await BeneficiaryProvider.getAllBeneficiarysPaginated(payload)
        return response.ok(beneficiaryFound)
    } catch (err) {
        logger.error(err);
        const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
        return response.badRequest(apiResp);
      
    }
  }
}
