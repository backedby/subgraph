import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DeployedSubscription,
  EditContribution,
  NewSubscriptionProfile
} from "../generated/BBSubscriptionFactory/BBSubscriptionFactory"

export function createDeployedSubscriptionEvent(
  currency: Address,
  deployedAddress: Address
): DeployedSubscription {
  let deployedSubscriptionEvent = changetype<DeployedSubscription>(
    newMockEvent()
  )

  deployedSubscriptionEvent.parameters = new Array()

  deployedSubscriptionEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  deployedSubscriptionEvent.parameters.push(
    new ethereum.EventParam(
      "deployedAddress",
      ethereum.Value.fromAddress(deployedAddress)
    )
  )

  return deployedSubscriptionEvent
}

export function createEditContributionEvent(
  profileId: BigInt,
  contribution: BigInt
): EditContribution {
  let editContributionEvent = changetype<EditContribution>(newMockEvent())

  editContributionEvent.parameters = new Array()

  editContributionEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  editContributionEvent.parameters.push(
    new ethereum.EventParam(
      "contribution",
      ethereum.Value.fromUnsignedBigInt(contribution)
    )
  )

  return editContributionEvent
}

export function createNewSubscriptionProfileEvent(
  profileId: BigInt,
  tierSetId: BigInt,
  contribution: BigInt
): NewSubscriptionProfile {
  let newSubscriptionProfileEvent = changetype<NewSubscriptionProfile>(
    newMockEvent()
  )

  newSubscriptionProfileEvent.parameters = new Array()

  newSubscriptionProfileEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  newSubscriptionProfileEvent.parameters.push(
    new ethereum.EventParam(
      "tierSetId",
      ethereum.Value.fromUnsignedBigInt(tierSetId)
    )
  )
  newSubscriptionProfileEvent.parameters.push(
    new ethereum.EventParam(
      "contribution",
      ethereum.Value.fromUnsignedBigInt(contribution)
    )
  )

  return newSubscriptionProfileEvent
}
