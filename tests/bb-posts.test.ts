import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { EditPost } from "../generated/schema"
import { EditPost as EditPostEvent } from "../generated/BBPosts/BBPosts"
import { handleEditPost } from "../src/bb-posts"
import { createEditPostEvent } from "./bb-posts-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let profileId = BigInt.fromI32(234)
    let postId = BigInt.fromI32(234)
    let cid = "Example string value"
    let newEditPostEvent = createEditPostEvent(profileId, postId, cid)
    handleEditPost(newEditPostEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EditPost created and stored", () => {
    assert.entityCount("EditPost", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EditPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profileId",
      "234"
    )
    assert.fieldEquals(
      "EditPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "postId",
      "234"
    )
    assert.fieldEquals(
      "EditPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cid",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
