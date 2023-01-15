import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EditTierSet,
  NewTierSet,
  SupportedCurrencyAdded,
  SupportedCurrencyRemoved
} from "../generated/BBTiers/BBTiers"

export function createEditTierSetEvent(
  profileId: BigInt,
  tierSetId: BigInt
): EditTierSet {
  let editTierSetEvent = changetype<EditTierSet>(newMockEvent())

  editTierSetEvent.parameters = new Array()

  editTierSetEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  editTierSetEvent.parameters.push(
    new ethereum.EventParam(
      "tierSetId",
      ethereum.Value.fromUnsignedBigInt(tierSetId)
    )
  )

  return editTierSetEvent
}

export function createNewTierSetEvent(
  profileId: BigInt,
  tierSetId: BigInt
): NewTierSet {
  let newTierSetEvent = changetype<NewTierSet>(newMockEvent())

  newTierSetEvent.parameters = new Array()

  newTierSetEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  newTierSetEvent.parameters.push(
    new ethereum.EventParam(
      "tierSetId",
      ethereum.Value.fromUnsignedBigInt(tierSetId)
    )
  )

  return newTierSetEvent
}

export function createSupportedCurrencyAddedEvent(
  profileId: BigInt,
  tierSetId: BigInt,
  currency: Address,
  priceMultiplier: BigInt
): SupportedCurrencyAdded {
  let supportedCurrencyAddedEvent = changetype<SupportedCurrencyAdded>(
    newMockEvent()
  )

  supportedCurrencyAddedEvent.parameters = new Array()

  supportedCurrencyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  supportedCurrencyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tierSetId",
      ethereum.Value.fromUnsignedBigInt(tierSetId)
    )
  )
  supportedCurrencyAddedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  supportedCurrencyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "priceMultiplier",
      ethereum.Value.fromUnsignedBigInt(priceMultiplier)
    )
  )

  return supportedCurrencyAddedEvent
}

export function createSupportedCurrencyRemovedEvent(
  profileId: BigInt,
  tierSetId: BigInt,
  currency: Address
): SupportedCurrencyRemoved {
  let supportedCurrencyRemovedEvent = changetype<SupportedCurrencyRemoved>(
    newMockEvent()
  )

  supportedCurrencyRemovedEvent.parameters = new Array()

  supportedCurrencyRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  supportedCurrencyRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tierSetId",
      ethereum.Value.fromUnsignedBigInt(tierSetId)
    )
  )
  supportedCurrencyRemovedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )

  return supportedCurrencyRemovedEvent
}
