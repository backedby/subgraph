// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Renewed extends ethereum.Event {
  get params(): Renewed__Params {
    return new Renewed__Params(this);
  }
}

export class Renewed__Params {
  _event: Renewed;

  constructor(event: Renewed) {
    this._event = event;
  }

  get subscriptionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Subscribed extends ethereum.Event {
  get params(): Subscribed__Params {
    return new Subscribed__Params(this);
  }
}

export class Subscribed__Params {
  _event: Subscribed;

  constructor(event: Subscribed) {
    this._event = event;
  }

  get subscriptionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Unsubscribed extends ethereum.Event {
  get params(): Unsubscribed__Params {
    return new Unsubscribed__Params(this);
  }
}

export class Unsubscribed__Params {
  _event: Unsubscribed;

  constructor(event: Unsubscribed) {
    this._event = event;
  }

  get subscriptionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class BBSubscriptionsUSDC__checkUpkeepResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getValue0(): boolean {
    return this.value0;
  }

  getValue1(): Bytes {
    return this.value1;
  }
}

export class BBSubscriptionsUSDC__getSubscriptionFromIdResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): Address {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): BigInt {
    return this.value4;
  }

  getValue5(): boolean {
    return this.value5;
  }
}

export class BBSubscriptionsUSDC__getSubscriptionFromProfileResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): boolean {
    return this.value3;
  }
}

export class BBSubscriptionsUSDC extends ethereum.SmartContract {
  static bind(address: Address): BBSubscriptionsUSDC {
    return new BBSubscriptionsUSDC("BBSubscriptionsUSDC", address);
  }

  checkUpkeep(checkData: Bytes): BBSubscriptionsUSDC__checkUpkeepResult {
    let result = super.call("checkUpkeep", "checkUpkeep(bytes):(bool,bytes)", [
      ethereum.Value.fromBytes(checkData)
    ]);

    return new BBSubscriptionsUSDC__checkUpkeepResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_checkUpkeep(
    checkData: Bytes
  ): ethereum.CallResult<BBSubscriptionsUSDC__checkUpkeepResult> {
    let result = super.tryCall(
      "checkUpkeep",
      "checkUpkeep(bytes):(bool,bytes)",
      [ethereum.Value.fromBytes(checkData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BBSubscriptionsUSDC__checkUpkeepResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  getSubscriptionFromId(
    subscriptionId: BigInt
  ): BBSubscriptionsUSDC__getSubscriptionFromIdResult {
    let result = super.call(
      "getSubscriptionFromId",
      "getSubscriptionFromId(uint256):(uint256,uint256,address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(subscriptionId)]
    );

    return new BBSubscriptionsUSDC__getSubscriptionFromIdResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean()
    );
  }

  try_getSubscriptionFromId(
    subscriptionId: BigInt
  ): ethereum.CallResult<BBSubscriptionsUSDC__getSubscriptionFromIdResult> {
    let result = super.tryCall(
      "getSubscriptionFromId",
      "getSubscriptionFromId(uint256):(uint256,uint256,address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(subscriptionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BBSubscriptionsUSDC__getSubscriptionFromIdResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean()
      )
    );
  }

  getSubscriptionFromProfile(
    profileId: BigInt,
    tierId: BigInt,
    subscriber: Address
  ): BBSubscriptionsUSDC__getSubscriptionFromProfileResult {
    let result = super.call(
      "getSubscriptionFromProfile",
      "getSubscriptionFromProfile(uint256,uint256,address):(uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(profileId),
        ethereum.Value.fromUnsignedBigInt(tierId),
        ethereum.Value.fromAddress(subscriber)
      ]
    );

    return new BBSubscriptionsUSDC__getSubscriptionFromProfileResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_getSubscriptionFromProfile(
    profileId: BigInt,
    tierId: BigInt,
    subscriber: Address
  ): ethereum.CallResult<
    BBSubscriptionsUSDC__getSubscriptionFromProfileResult
  > {
    let result = super.tryCall(
      "getSubscriptionFromProfile",
      "getSubscriptionFromProfile(uint256,uint256,address):(uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(profileId),
        ethereum.Value.fromUnsignedBigInt(tierId),
        ethereum.Value.fromAddress(subscriber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BBSubscriptionsUSDC__getSubscriptionFromProfileResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get bbProfiles(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get bbTiers(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get bbSubscriptionsFactory(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get currency(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PerformUpkeepCall extends ethereum.Call {
  get inputs(): PerformUpkeepCall__Inputs {
    return new PerformUpkeepCall__Inputs(this);
  }

  get outputs(): PerformUpkeepCall__Outputs {
    return new PerformUpkeepCall__Outputs(this);
  }
}

export class PerformUpkeepCall__Inputs {
  _call: PerformUpkeepCall;

  constructor(call: PerformUpkeepCall) {
    this._call = call;
  }

  get renewalData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class PerformUpkeepCall__Outputs {
  _call: PerformUpkeepCall;

  constructor(call: PerformUpkeepCall) {
    this._call = call;
  }
}

export class SubscribeCall extends ethereum.Call {
  get inputs(): SubscribeCall__Inputs {
    return new SubscribeCall__Inputs(this);
  }

  get outputs(): SubscribeCall__Outputs {
    return new SubscribeCall__Outputs(this);
  }
}

export class SubscribeCall__Inputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }

  get profileId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tierId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expectedPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SubscribeCall__Outputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }

  get subscriptionId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UnsubscribeCall extends ethereum.Call {
  get inputs(): UnsubscribeCall__Inputs {
    return new UnsubscribeCall__Inputs(this);
  }

  get outputs(): UnsubscribeCall__Outputs {
    return new UnsubscribeCall__Outputs(this);
  }
}

export class UnsubscribeCall__Inputs {
  _call: UnsubscribeCall;

  constructor(call: UnsubscribeCall) {
    this._call = call;
  }

  get profileId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tierId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnsubscribeCall__Outputs {
  _call: UnsubscribeCall;

  constructor(call: UnsubscribeCall) {
    this._call = call;
  }
}

export class WithdrawToTreasuryCall extends ethereum.Call {
  get inputs(): WithdrawToTreasuryCall__Inputs {
    return new WithdrawToTreasuryCall__Inputs(this);
  }

  get outputs(): WithdrawToTreasuryCall__Outputs {
    return new WithdrawToTreasuryCall__Outputs(this);
  }
}

export class WithdrawToTreasuryCall__Inputs {
  _call: WithdrawToTreasuryCall;

  constructor(call: WithdrawToTreasuryCall) {
    this._call = call;
  }
}

export class WithdrawToTreasuryCall__Outputs {
  _call: WithdrawToTreasuryCall;

  constructor(call: WithdrawToTreasuryCall) {
    this._call = call;
  }
}
