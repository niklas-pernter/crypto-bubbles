import {Grid, Input, Text} from "@nextui-org/react";
import BubbleMap from "../components/bubble-map";

const TokenHolders = () => {
    return (
        <>
            <Grid.Container gap={2} >
                <Grid xs>
                    <Text h1>Token Distribution</Text>
                </Grid>
                <Grid xs={8}>
                    <Input
                        bordered
                        width="100%"
                        size="xl"
                        placeholder="Wallet Address"
                    />
                </Grid>

            </Grid.Container>
            <img
                style={{position: "fixed", 
                    zIndex: "var(--nextui-zIndices-1)", pointerEvents: "none", maxHeight: "1000px" ,bottom: "-20%", left: "-10%", right: "-50%"}}
                src={"https://nextui.org/gradient-right-dark.svg"}
            />

            <BubbleMap></BubbleMap>

        </>
    );
};

export default TokenHolders;