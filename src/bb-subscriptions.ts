import { Renewed, Subscribed, Unsubscribed } from "../generated/BBSubscriptionsUSDC/BBSubscriptionsUSDC"
import { SubscriptionEntity } from "../generated/schema"
import { BBSubscriptionsUSDC } from "../generated/BBSubscriptionsUSDC/BBSubscriptionsUSDC"
import { Address, BigInt } from "@graphprotocol/graph-ts"

export function handleSubscribed(event: Subscribed): void {
  let id = event.address.toHexString() + event.params.subscriptionId.toString()
  setSubscription(id, event.params.subscriptionId, event.address)
}

export function handleRenewed(event: Renewed): void {
  let id = event.address.toHexString() + event.params.subscriptionId.toString()
  setSubscription(id, event.params.subscriptionId, event.address)
}

export function handleUnsubscribed(event: Unsubscribed): void {
  let id = event.address.toHexString() + event.params.subscriptionId.toString()
  setSubscription(id, event.params.subscriptionId, event.address)
}

function setSubscription(entityId:string, subscriptionId: BigInt, address: Address): void {
  let subscription = SubscriptionEntity.load(entityId)
  if(subscription == null) {
    subscription = new SubscriptionEntity(entityId)
  }
  let bbSubscriptions = BBSubscriptionsUSDC.bind(address)
  let subscriptionData = bbSubscriptions.getSubscriptionFromId(subscriptionId)
  subscription.profileId = subscriptionData.value0
  subscription.tierId = subscriptionData.value1
  subscription.subscriber = subscriptionData.value2
  subscription.price = subscriptionData.value3
  subscription.expiration = subscriptionData.value4
  subscription.cancelled = subscriptionData.value5
  subscription.save()
}
