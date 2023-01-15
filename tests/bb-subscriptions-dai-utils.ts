import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  BBSubscriptionsDAIRenewed,
  BBSubscriptionsDAISubscribed,
  BBSubscriptionsDAIUnsubscribed
} from "../generated/BBSubscriptionsDAI/BBSubscriptionsDAI"

export function createBBSubscriptionsDAIRenewedEvent(
  subscriptionId: BigInt
): BBSubscriptionsDAIRenewed {
  let bbSubscriptionsDaiRenewedEvent = changetype<BBSubscriptionsDAIRenewed>(
    newMockEvent()
  )

  bbSubscriptionsDaiRenewedEvent.parameters = new Array()

  bbSubscriptionsDaiRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )

  return bbSubscriptionsDaiRenewedEvent
}

export function createBBSubscriptionsDAISubscribedEvent(
  subscriptionId: BigInt
): BBSubscriptionsDAISubscribed {
  let bbSubscriptionsDaiSubscribedEvent = changetype<
    BBSubscriptionsDAISubscribed
  >(newMockEvent())

  bbSubscriptionsDaiSubscribedEvent.parameters = new Array()

  bbSubscriptionsDaiSubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )

  return bbSubscriptionsDaiSubscribedEvent
}

export function createBBSubscriptionsDAIUnsubscribedEvent(
  subscriptionId: BigInt
): BBSubscriptionsDAIUnsubscribed {
  let bbSubscriptionsDaiUnsubscribedEvent = changetype<
    BBSubscriptionsDAIUnsubscribed
  >(newMockEvent())

  bbSubscriptionsDaiUnsubscribedEvent.parameters = new Array()

  bbSubscriptionsDaiUnsubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionId",
      ethereum.Value.fromUnsignedBigInt(subscriptionId)
    )
  )

  return bbSubscriptionsDaiUnsubscribedEvent
}
