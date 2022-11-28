import {Grid, Input, Text, Button, Loading} from "@nextui-org/react";
import BubbleMap from "../components/bubble-map";

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import { RestrictedComponent } from "../components/restricted-component";
import { BscClient } from "../rest/bsc-client";

const TokenHolders = () => {
    const [wallet, setWallet] = useState("0x3b248CEfA87F836a4e6f6d6c9b42991b88Dc1d58");
    const [isLoading, setIsLoading] = useState(false);



    return (
        <>
            <Grid.Container gap={2} justify="center">
                <Grid  xs={4}>
                    <Text h1>Token Distribution</Text>
                </Grid>
                <Grid  xs={6}>
                    <Input
                        onChange={(e) => setWallet(e.target.value)}
                        bordered
                        width="100%"
                        value={wallet}
                        size="xl"
                        clearable
                        placeholder="Token Address" 
                        aria-label="Token Address"
                    />
                </Grid>
                <Grid xs css={{d: "flex", ai: "center"}} >
                    <Button   size="lg" shadow color="gradient" auto >
                        Search

                        <RestrictedComponent condition={isLoading}>
                            <Loading color="currentColor" size="sm" />
                        </RestrictedComponent>
                    </Button>
                </Grid>
            </Grid.Container>
            <img
                style={{position: "fixed", 
                    zIndex: "var(--nextui-zIndices-1)", pointerEvents: "none", maxHeight: "1000px" ,bottom: "-20%", left: "-10%", right: "-50%"}}
                src={"https://nextui.org/gradient-right-dark.svg"}
            />

            <BubbleMap ></BubbleMap>

        </>
    );
};

export default TokenHolders;