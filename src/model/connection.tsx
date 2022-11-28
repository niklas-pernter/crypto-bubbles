import { Transaction } from "./transaction";

export interface Connection {
    key: string
    transaction: Transaction[]
}