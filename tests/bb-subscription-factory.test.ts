import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DeployedSubscription } from "../generated/schema"
import { DeployedSubscription as DeployedSubscriptionEvent } from "../generated/BBSubscriptionFactory/BBSubscriptionFactory"
import { handleDeployedSubscription } from "../src/bb-subscription-factory"
import { createDeployedSubscriptionEvent } from "./bb-subscription-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let currency = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let deployedAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDeployedSubscriptionEvent = createDeployedSubscriptionEvent(
      currency,
      deployedAddress
    )
    handleDeployedSubscription(newDeployedSubscriptionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DeployedSubscription created and stored", () => {
    assert.entityCount("DeployedSubscription", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DeployedSubscription",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currency",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployedSubscription",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deployedAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
