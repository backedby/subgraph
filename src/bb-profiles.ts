import { EditProfile, NewProfile } from "../generated/BBProfiles/BBProfiles"
import { Profile } from "../generated/schema"

export function handleNewProfile(event: NewProfile): void {
  let profile = new Profile(event.params.profileId.toString())
  profile.owner = event.params.owner
  profile.receiver = event.params.receiver
  profile.cid = event.params.cid
  profile.save()
}

export function handleEditProfile(event: EditProfile): void {
  let id = event.params.profileId.toString()
  let profile = Profile.load(id)
  if(profile == null) {
    profile = new Profile(id)
  }
  profile.owner = event.params.owner
  profile.receiver = event.params.receiver
  profile.cid = event.params.cid
  profile.save()
}