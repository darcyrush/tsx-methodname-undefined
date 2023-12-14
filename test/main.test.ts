import * as bootstrap from "../src/bootstrap"
import { describe, it, mock } from "node:test"
import { equal } from "node:assert/strict"

describe('Main', async () => {
  it('Example', async () => {
    const stub = mock.method(bootstrap, 'bootstrap', async () => undefined)

    await import("../src/main")

    equal(stub.mock.callCount(), 1)
   })
})