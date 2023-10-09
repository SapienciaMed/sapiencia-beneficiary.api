import test from "japa";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import CitizenService from "App/Services/CitizenService";
import { CitizenRepositoryFake } from "./FakeClass/CitizenRepositoryFake";
import { ApiResponse } from "App/Utils/ApiResponses";

const service = new CitizenService(new CitizenRepositoryFake());

test.group("RolService TEST for getCitizenById", () => {
  test("class service must have a method getCitizenById with a return", async (assert) => {
    const result = service.getCitizenById(1);
    assert.isNotNull(result);
  });

  test("the method getCitizenById must be a promise", async (assert) => {
    const result = service.getCitizenById(1);
    assert.typeOf(result, "Promise");
  });

  test("the method getCitizenById must return a ApiResponse", async (assert) => {
    const result = await service.getCitizenById(1);
    assert.instanceOf(result, ApiResponse);
  });

  test("the method getCitizenById must return a OK code ", async (assert) => {
    const result = await service.getCitizenById(1);
    assert.isTrue(result.operation.code === EResponseCodes.OK);
  });

  test("the method getCitizenById must return a array", async (assert) => {
    const result = await service.getCitizenById(1);

    assert.isArray(result.data);
  });
});
