import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  Renewed,
  Subscribed,
  Unsubscribed
} from "../generated/BBSubscriptionsUSDT/BBSubscriptionsUSDT"

export function createRenewedEvent(subscriptionId: BigInt): Renewed {
  let renewedEvent = changetype<Renewed>(newMockEvent())

  renewedEvent.parameters = new Array()

  renewedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )

  return renewedEvent
}

export function createSubscribedEvent(subscriptionId: BigInt): Subscribed {
  let subscribedEvent = changetype<Subscribed>(newMockEvent())

  subscribedEvent.parameters = new Array()

  subscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )

  return subscribedEvent
}

export function createUnsubscribedEvent(subscriptionId: BigInt): Unsubscribed {
  let unsubscribedEvent = changetype<Unsubscribed>(newMockEvent())

  unsubscribedEvent.parameters = new Array()

  unsubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )

  return unsubscribedEvent
}
