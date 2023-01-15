import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { Renewed } from "../generated/schema"
import { Renewed as RenewedEvent } from "../generated/BBSubscriptionsUSDC/BBSubscriptionsUSDC"
import { handleRenewed } from "../src/bb-subscriptions-usdc"
import { createRenewedEvent } from "./bb-subscriptions-usdc-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let subscriptionId = BigInt.fromI32(234)
    let newRenewedEvent = createRenewedEvent(subscriptionId)
    handleRenewed(newRenewedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Renewed created and stored", () => {
    assert.entityCount("Renewed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Renewed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "subscriptionId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
