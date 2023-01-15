import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { EditTierSet } from "../generated/schema"
import { EditTierSet as EditTierSetEvent } from "../generated/BBTiers/BBTiers"
import { handleEditTierSet } from "../src/bb-tiers"
import { createEditTierSetEvent } from "./bb-tiers-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let profileId = BigInt.fromI32(234)
    let tierSetId = BigInt.fromI32(234)
    let newEditTierSetEvent = createEditTierSetEvent(profileId, tierSetId)
    handleEditTierSet(newEditTierSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EditTierSet created and stored", () => {
    assert.entityCount("EditTierSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EditTierSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profileId",
      "234"
    )
    assert.fieldEquals(
      "EditTierSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tierSetId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
