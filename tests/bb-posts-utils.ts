import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { EditPost, NewPost } from "../generated/BBPosts/BBPosts"

export function createEditPostEvent(
  profileId: BigInt,
  postId: BigInt,
  cid: string
): EditPost {
  let editPostEvent = changetype<EditPost>(newMockEvent())

  editPostEvent.parameters = new Array()

  editPostEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  editPostEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  editPostEvent.parameters.push(
    new ethereum.EventParam("cid", ethereum.Value.fromString(cid))
  )

  return editPostEvent
}

export function createNewPostEvent(
  profileId: BigInt,
  postId: BigInt,
  cid: string
): NewPost {
  let newPostEvent = changetype<NewPost>(newMockEvent())

  newPostEvent.parameters = new Array()

  newPostEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  newPostEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  newPostEvent.parameters.push(
    new ethereum.EventParam("cid", ethereum.Value.fromString(cid))
  )

  return newPostEvent
}
