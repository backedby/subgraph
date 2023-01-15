import { EditTierSet, NewTierSet, SupportedCurrencyAdded, SupportedCurrencyRemoved } from "../generated/BBTiers/BBTiers"
import { TierSet } from "../generated/schema"
import { BBTiers } from "../generated/BBTiers/BBTiers"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"

export function handleNewTierSet(event: NewTierSet): void {
  let id = event.params.profileId.toString() + event.params.tierSetId.toString()
  let bbTiers = BBTiers.bind(event.address)
  let tierSetData = bbTiers.getTierSet(event.params.profileId, event.params.tierSetId)
  setTierSet(id, event.params.profileId, event.params.tierSetId, tierSetData.value0, tierSetData.value1, tierSetData.value2)
}

export function handleEditTierSet(event: EditTierSet): void {
  let id = event.params.profileId.toString() + event.params.tierSetId.toString()
  let bbTiers = BBTiers.bind(event.address)
  let tierSetData = bbTiers.getTierSet(event.params.profileId, event.params.tierSetId)
  setTierSet(id, event.params.profileId, event.params.tierSetId, tierSetData.value0, tierSetData.value1, tierSetData.value2)
}

function setTierSet(id:string, profileId:BigInt, tierSetId:BigInt, prices:BigInt[], cids:string[], deprecated:boolean[]): void {
  let tierSet = TierSet.load(id)
  if(tierSet == null) {
    tierSet = new TierSet(id)
  }
  tierSet.profileId = profileId
  tierSet.tierSetId = tierSetId
  tierSet.prices = prices
  tierSet.cids = cids
  tierSet.deprecated = deprecated
  if(tierSet.supportedCurrencies == null) {
    tierSet.supportedCurrencies = new Array<Bytes>()
  }
  if(tierSet.currencyMultipliers == null) {
    tierSet.currencyMultipliers = new Array<BigInt>()
  }
  tierSet.save()
}

export function handleSupportedCurrencyAdded(event: SupportedCurrencyAdded): void {
  let id = event.params.profileId.toString() + event.params.tierSetId.toString()
  let tierSet = TierSet.load(id)
  if(tierSet == null) {
    tierSet = new TierSet(id)
  }
  tierSet.profileId = event.params.profileId
  tierSet.tierSetId = event.params.tierSetId

  let supportedCurrencies = tierSet.supportedCurrencies
  let currencyMultipliers = tierSet.currencyMultipliers

  if(supportedCurrencies == null || currencyMultipliers == null) {
    supportedCurrencies = new Array<Bytes>()
    currencyMultipliers = new Array<BigInt>()
  }
  
  let index = supportedCurrencies.indexOf(changetype<Bytes>(event.params.currency))
  if(index == -1) {
    supportedCurrencies.push(event.params.currency)
    currencyMultipliers.push(event.params.priceMultiplier)
  } else {
    currencyMultipliers[index] = event.params.priceMultiplier
  }

  tierSet.supportedCurrencies = supportedCurrencies
  tierSet.currencyMultipliers = currencyMultipliers
  
  tierSet.save()
}

export function handleSupportedCurrencyRemoved(event: SupportedCurrencyRemoved): void {
  let id = event.params.profileId.toString() + event.params.tierSetId.toString()
  let tierSet = TierSet.load(id)
  if(tierSet == null) {
    tierSet = new TierSet(id)
  }
  tierSet.profileId = event.params.profileId
  tierSet.tierSetId = event.params.tierSetId

  let supportedCurrencies = tierSet.supportedCurrencies
  let currencyMultipliers = tierSet.currencyMultipliers

  if(supportedCurrencies == null || currencyMultipliers == null) {
    supportedCurrencies = new Array<Bytes>()
    currencyMultipliers = new Array<BigInt>()
  } else if(supportedCurrencies.length > 0) {
    let index = supportedCurrencies.indexOf(changetype<Bytes>(event.params.currency))
    if(index != -1) {
      supportedCurrencies[index] = supportedCurrencies[supportedCurrencies.length - 1]
      currencyMultipliers[index] = currencyMultipliers[currencyMultipliers.length - 1]
      supportedCurrencies.pop()
      currencyMultipliers.pop()
    }
  }

  tierSet.supportedCurrencies = supportedCurrencies
  tierSet.currencyMultipliers = currencyMultipliers

  tierSet.save()
}
