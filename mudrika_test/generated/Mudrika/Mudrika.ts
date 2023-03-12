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

export class fundDeposited extends ethereum.Event {
  get params(): fundDeposited__Params {
    return new fundDeposited__Params(this);
  }
}

export class fundDeposited__Params {
  _event: fundDeposited;

  constructor(event: fundDeposited) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get by(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class fundTransferred extends ethereum.Event {
  get params(): fundTransferred__Params {
    return new fundTransferred__Params(this);
  }
}

export class fundTransferred__Params {
  _event: fundTransferred;

  constructor(event: fundTransferred) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class requestAdded extends ethereum.Event {
  get params(): requestAdded__Params {
    return new requestAdded__Params(this);
  }
}

export class requestAdded__Params {
  _event: requestAdded;

  constructor(event: requestAdded) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Mudrika__requestsReceivedResult {
  value0: BigInt;
  value1: BigInt;
  value2: string;
  value3: Address;
  value4: Address;
  value5: boolean;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: string,
    value3: Address,
    value4: Address,
    value5: boolean,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }

  getRequestId(): BigInt {
    return this.value0;
  }

  getFund(): BigInt {
    return this.value1;
  }

  getDescription(): string {
    return this.value2;
  }

  getFrom(): Address {
    return this.value3;
  }

  getTo(): Address {
    return this.value4;
  }

  getApprovalStatus(): boolean {
    return this.value5;
  }

  getTimestamp(): BigInt {
    return this.value6;
  }
}

export class Mudrika extends ethereum.SmartContract {
  static bind(address: Address): Mudrika {
    return new Mudrika("Mudrika", address);
  }

  fundRemaining(): BigInt {
    let result = super.call("fundRemaining", "fundRemaining():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fundRemaining(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fundRemaining",
      "fundRemaining():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestCount(): BigInt {
    let result = super.call("requestCount", "requestCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_requestCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("requestCount", "requestCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestsReceived(param0: BigInt): Mudrika__requestsReceivedResult {
    let result = super.call(
      "requestsReceived",
      "requestsReceived(uint256):(uint256,uint256,string,address,address,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Mudrika__requestsReceivedResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toBoolean(),
      result[6].toBigInt()
    );
  }

  try_requestsReceived(
    param0: BigInt
  ): ethereum.CallResult<Mudrika__requestsReceivedResult> {
    let result = super.tryCall(
      "requestsReceived",
      "requestsReceived(uint256):(uint256,uint256,string,address,address,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Mudrika__requestsReceivedResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toBoolean(),
        value[6].toBigInt()
      )
    );
  }
}

export class AddUserCall extends ethereum.Call {
  get inputs(): AddUserCall__Inputs {
    return new AddUserCall__Inputs(this);
  }

  get outputs(): AddUserCall__Outputs {
    return new AddUserCall__Outputs(this);
  }
}

export class AddUserCall__Inputs {
  _call: AddUserCall;

  constructor(call: AddUserCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get userType(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get name(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddUserCall__Outputs {
  _call: AddUserCall;

  constructor(call: AddUserCall) {
    this._call = call;
  }
}

export class ApproveRequestCall extends ethereum.Call {
  get inputs(): ApproveRequestCall__Inputs {
    return new ApproveRequestCall__Inputs(this);
  }

  get outputs(): ApproveRequestCall__Outputs {
    return new ApproveRequestCall__Outputs(this);
  }
}

export class ApproveRequestCall__Inputs {
  _call: ApproveRequestCall;

  constructor(call: ApproveRequestCall) {
    this._call = call;
  }

  get requestId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveRequestCall__Outputs {
  _call: ApproveRequestCall;

  constructor(call: ApproveRequestCall) {
    this._call = call;
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RequestFundsCall extends ethereum.Call {
  get inputs(): RequestFundsCall__Inputs {
    return new RequestFundsCall__Inputs(this);
  }

  get outputs(): RequestFundsCall__Outputs {
    return new RequestFundsCall__Outputs(this);
  }
}

export class RequestFundsCall__Inputs {
  _call: RequestFundsCall;

  constructor(call: RequestFundsCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get description(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class RequestFundsCall__Outputs {
  _call: RequestFundsCall;

  constructor(call: RequestFundsCall) {
    this._call = call;
  }
}
