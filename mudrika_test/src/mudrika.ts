import {
  fundDeposited as fundDepositedEvent,
  fundTransferred as fundTransferredEvent,
  requestAdded as requestAddedEvent
} from "../generated/Mudrika/Mudrika"
import {
  fundDeposited,
  fundTransferred,
  requestAdded
} from "../generated/schema"

export function handlefundDeposited(event: fundDepositedEvent): void {
  let entity = new fundDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlefundTransferred(event: fundTransferredEvent): void {
  let entity = new fundTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.amount = event.params.amount
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlerequestAdded(event: requestAddedEvent): void {
  let entity = new requestAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
