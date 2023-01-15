import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { BBSubscriptionsDAIRenewed } from "../generated/schema"
import { BBSubscriptionsDAIRenewed as BBSubscriptionsDAIRenewedEvent } from "../generated/BBSubscriptionsDAI/BBSubscriptionsDAI"
import { handleBBSubscriptionsDAIRenewed } from "../src/bb-subscriptions-dai"
import { createBBSubscriptionsDAIRenewedEvent } from "./bb-subscriptions-dai-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let subscriptionId = BigInt.fromI32(234)
    let newBBSubscriptionsDAIRenewedEvent = createBBSubscriptionsDAIRenewedEvent(
      subscriptionId
    )
    handleBBSubscriptionsDAIRenewed(newBBSubscriptionsDAIRenewedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BBSubscriptionsDAIRenewed created and stored", () => {
    assert.entityCount("BBSubscriptionsDAIRenewed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BBSubscriptionsDAIRenewed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "subscriptionId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
