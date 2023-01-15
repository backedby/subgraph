import { EditContribution, NewSubscriptionProfile } from "../generated/BBSubscriptionFactory/BBSubscriptionFactory"
import { SubscriptionProfile } from "../generated/schema"

export function handleNewSubscriptionProfile(event: NewSubscriptionProfile): void {
  let subscriptionProfile = new SubscriptionProfile(event.params.profileId.toString())
  subscriptionProfile.tierSetId = event.params.tierSetId
  subscriptionProfile.contribution = event.params.contribution
  subscriptionProfile.save()
}

export function handleEditContribution(event: EditContribution): void {
  let id = event.params.profileId.toString()
  let subscriptionProfile = SubscriptionProfile.load(id)
  if(subscriptionProfile == null) {
    subscriptionProfile = new SubscriptionProfile(id)
  }
  subscriptionProfile.contribution = event.params.contribution
  subscriptionProfile.save()
}