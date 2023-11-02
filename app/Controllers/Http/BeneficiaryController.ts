import { HttpContext } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BeneficiaryProvider from "@ioc:core.BeneficiaryProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import {
  IAttentionsFilter,
  IBeneficiaryFilter,
  IBenefitsFilter,
} from "App/Interfaces/BeneficiaryInterfaces";
import { IPqrsdfFilters } from "App/Interfaces/CitizenAttentionInterfaces";
import { ApiResponse } from "App/Utils/ApiResponses";
import { DBException } from "App/Utils/DbHandlerError";
import { filterAttentionsSchema } from "App/Validators/filterAttentionsSchema";
import { filtersBeneficiarySchema } from "App/Validators/filterBeneficiarySchema";
import { filterBenfitsSchema } from "App/Validators/filterBenfitisSchema";
import { filterPQRSDFSchema } from "App/Validators/filterPQRSDFSchema";

export default class BeneficiaryController {
  public async getBeneficiaryPaginated(ctx: HttpContext) {
    const { request, response, logger } = ctx;
    let payload: IBeneficiaryFilter;
    try {
      payload = await request.validate({ schema: filtersBeneficiarySchema });
    } catch (err) {
      return DBException.badRequest(ctx, err);
    }
    try {
      const beneficiaryFound =
        await BeneficiaryProvider.getAllBeneficiarysPaginated(payload);
      return response.ok(beneficiaryFound);
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }

  public async getBeneficiaryByDocument(ctx: HttpContext) {
    const { request, response, logger } = ctx;

    try {
      const { document, foundId } = request.body();
      const beneficiaryFound =
        await BeneficiaryProvider.getBeneficiaryByDocument(document, foundId);
      return response.ok(beneficiaryFound);
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }

  public async generateXLSX(ctx: HttpContextContract) {
    const { request, response, logger } = ctx;
    let filters: IBeneficiaryFilter;

    try {
      filters = await request.validate({ schema: filtersBeneficiarySchema });
    } catch (err) {
      return DBException.badRequest(ctx, err);
    }

    try {
      const resp = await BeneficiaryProvider.generateXLSXBeneficiary(filters)
      response.header(
        "Content-Disposition",
        "attachment; filename=Beneficiarios.xlsx"
      )
      return response.download(resp.data)
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }

  public async getPqrsdfPaginated(ctx: HttpContext) {
    const { request, response, logger } = ctx;

    let payload: IPqrsdfFilters;
    try {
      payload = await request.validate({ schema: filterPQRSDFSchema });
    } catch (err) {
      return DBException.badRequest(ctx, err);
    }
    try {
      const res = await BeneficiaryProvider.getPqrsdfPaginated(payload);
      return response.ok(res);
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }

  public async getAttentionsPaginated(ctx: HttpContext) {
    const { request, response, logger } = ctx;
    let payload: IAttentionsFilter;
    try {
      payload = await request.validate({ schema: filterAttentionsSchema });
    } catch (err) {
      return DBException.badRequest(ctx, err);
    }
    try {
      const AttentionsFound = await BeneficiaryProvider.getAttentionsPaginated(
        payload
      );
      return response.ok(AttentionsFound);
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }

  public async getBeneftisPaginated(ctx: HttpContextContract) {
    const { request, response, logger } = ctx;
    let payload: IBenefitsFilter
    try {
      payload = await request.validate({ schema: filterBenfitsSchema });
    } catch (err) {
      return DBException.badRequest(ctx, err);
    }

    try {
      const BenefitsBeneficiary = await BeneficiaryProvider.getBeneftisPaginated(payload);
      return response.ok(BenefitsBeneficiary)
    } catch (err) {
      logger.error(err);
      const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
      return response.badRequest(apiResp);
    }
  }

  // public async getSocialServices(ctx: HttpContextContract) {
  //   const { request, response, logger } = ctx;
  //   let payload: ISocialServicesFound
  //   try {
  //     payload = await request.validate({ schema: socialServicesSchema });
  //   } catch (err) {
  //     return DBException.badRequest(ctx, err);
  //   }

  //   try {
  //     const BenefitsBeneficiary = await BeneficiaryProvider.getSocialServices(payload);
  //     return response.ok(BenefitsBeneficiary)
  //   } catch (err) {
  //     logger.error(err);
  //     const apiResp = new ApiResponse(null, EResponseCodes.FAIL, err.message);
  //     return response.badRequest(apiResp);
  //   }
  // }

  public async getProgramas({ response }: HttpContextContract) {
    try {
      return response.send(await BeneficiaryProvider.getPrograms());
    } catch (err) {
      response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }
}
