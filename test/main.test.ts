// import * as Parameters from "../src/parameters"
import * as bootstrap from "../src/bootstrap"
import { describe, it, mock } from "node:test"
import { equal } from "node:assert/strict"

describe('Main', async () => {
  it('The entry point to the application', async () => {
    const stub = mock.method(bootstrap, 'bootstrap', async () => undefined)

    await import("../src/main")

    equal(stub.mock.callCount(), 1, 'is called correctly')
   })
})