import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { EditProfile, NewProfile } from "../generated/BBProfiles/BBProfiles"

export function createEditProfileEvent(
  profileId: BigInt,
  owner: Address,
  receiver: Address,
  cid: string
): EditProfile {
  let editProfileEvent = changetype<EditProfile>(newMockEvent())

  editProfileEvent.parameters = new Array()

  editProfileEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  editProfileEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  editProfileEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  editProfileEvent.parameters.push(
    new ethereum.EventParam("cid", ethereum.Value.fromString(cid))
  )

  return editProfileEvent
}

export function createNewProfileEvent(
  profileId: BigInt,
  owner: Address,
  receiver: Address,
  cid: string
): NewProfile {
  let newProfileEvent = changetype<NewProfile>(newMockEvent())

  newProfileEvent.parameters = new Array()

  newProfileEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  newProfileEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newProfileEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  newProfileEvent.parameters.push(
    new ethereum.EventParam("cid", ethereum.Value.fromString(cid))
  )

  return newProfileEvent
}
