import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  fundDeposited,
  fundTransferred,
  requestAdded
} from "../generated/Mudrika/Mudrika"

export function createfundDepositedEvent(
  amount: BigInt,
  by: Address
): fundDeposited {
  let fundDepositedEvent = changetype<fundDeposited>(newMockEvent())

  fundDepositedEvent.parameters = new Array()

  fundDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundDepositedEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return fundDepositedEvent
}

export function createfundTransferredEvent(
  requestId: BigInt,
  amount: BigInt,
  to: Address
): fundTransferred {
  let fundTransferredEvent = changetype<fundTransferred>(newMockEvent())

  fundTransferredEvent.parameters = new Array()

  fundTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  fundTransferredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return fundTransferredEvent
}

export function createrequestAddedEvent(requestId: BigInt): requestAdded {
  let requestAddedEvent = changetype<requestAdded>(newMockEvent())

  requestAddedEvent.parameters = new Array()

  requestAddedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return requestAddedEvent
}
