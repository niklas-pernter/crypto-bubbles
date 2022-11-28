import {Outlet} from "react-router-dom";
import {Grid, Input, Text, Button, Loading} from "@nextui-org/react";
import BubbleMap from "../components/bubble-map";

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import { RestrictedComponent } from "../components/restricted-component";
import { BscClient } from "../rest/bsc-client";
import { Transaction } from "../model/transaction";

import * as _ from "lodash"

import { Table } from "@nextui-org/react";
import { Connection } from "../model/connection";
import { group } from "console";
import { reverse } from "dns/promises";

const WalletConnections = () => {
    const [wallet, setWallet] = useState("0x19c5cc0BA2E3E202557d125F7EbA764Fe3c88f8C");
    const [isLoading, setIsLoading] = useState(false);
    const {getTransactions} = BscClient()
    const [connections, setConnections] = useState<Map<string, Transaction[]>>(new Map<string, Transaction[]>)


    const handleClickSearch = () => {
        getTransactions(wallet).then(_transactions => {
            var grouped = groupByToMap(_transactions, transaction => transaction.contractAddress)
            
            setConnections(grouped)
        }
        )
    }
    
    const groupByToMap = <T, Q>(array: T[], predicate: (value: T, index: number, array: T[]) => Q) =>
        array.reduce((map, value, index, array) => {
            const key = predicate(value, index, array);
            map.get(key)?.push(value) ?? map.set(key, [value]);
        return map;
    }, new Map<Q, T[]>());

      
    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid  xs={4}>
                    <Text h1>Wallet Connections</Text>
                </Grid>
                <Grid  xs={6}>
                    <Input
                        onChange={(e) => setWallet(e.target.value)}
                        bordered
                        width="100%"
                        value={wallet}
                        size="xl"
                        clearable
                        placeholder="Wallet Address" 
                        aria-label="Wallet Address"
                    />
                </Grid>
                <Grid xs css={{d: "flex", ai: "center"}} >
                    <Button   size="lg" shadow color="gradient" auto onPress={handleClickSearch}>
                        Search

                        <RestrictedComponent condition={isLoading}>
                            <Loading color="currentColor" size="sm" />
                        </RestrictedComponent>
                    </Button>
                </Grid>
            </Grid.Container>
            <Table
                aria-label="Example table with static content"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                >
                <Table.Header>
                    <Table.Column>Num of Transactions</Table.Column>
                    <Table.Column>From</Table.Column>
                    <Table.Column>To</Table.Column>
                </Table.Header>
                <Table.Body>
                    {Array.from(connections.entries()).map(([key, value]: [string, Transaction[]], index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{value.length}</Table.Cell>
                            <Table.Cell>{wallet}</Table.Cell>
                            <Table.Cell>{key}</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
                </Table>
            <img
                style={{position: "fixed", 
                    zIndex: "var(--nextui-zIndices-1)", pointerEvents: "none", maxHeight: "1000px" ,bottom: "-20%", left: "-10%", right: "-50%"}}
                src={"https://nextui.org/gradient-right-dark.svg"}
            />

            {/*<NetworkMap transactions={transactions}></NetworkMap>*/}

        </>
    );
};

export default WalletConnections;