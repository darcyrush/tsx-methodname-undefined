import * as Parameters from "../../../src/application/bootstrap/parameters"
import { describe, it, mock } from "node:test"
import { equal } from "node:assert/strict"

describe('Main', async () => {
  it('The entry point to the application', async () => {
    const parametersStub = mock.method(Parameters, 'parameters')
    parametersStub.mock.mockImplementation(async () => undefined)

    await import("../../../src/application/main")

    equal(parametersStub.mock.callCount(), 1, 'is called correctly')
   })
})