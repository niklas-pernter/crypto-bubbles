import {Outlet} from "react-router-dom";
import {Container, Button, Link, Navbar, Text, Loading} from "@nextui-org/react";
import {Box} from "../components/design/box";
import {AcmeLogo} from "../components/design/logo";

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import NetworkSelector from "../components/network-selector";

interface NavLink {
    label: string,
    uri: string
}


const Home = () => {

    const links: NavLink[] = [
        { label: "Home", uri: "/"},
        { label: "Token Distribution", uri: "/token"},
        { label: "Wallet Connections", uri: "/wallet"}
    ]


    return (
        <Box
            css={{
                maxW: "100%"
            }}
        >
            <Navbar isBordered variant="floating">
                <Navbar.Brand>
                    <Navbar.Toggle aria-label="toggle navigation" />
                    <AcmeLogo />
                    <Text b color="inherit" hideIn="xs">
                        Crypto Bubbles
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    {links.map((link) =>
                            <Navbar.Link key={link.label} href={link.uri}>{link.label}</Navbar.Link>
                        )
                    }

                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <NetworkSelector></NetworkSelector>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button flat as={Link} href="#">
                            Connect Wallet
                            
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse>
                    {links.map((link) =>
                        <Navbar.CollapseItem key={link.label}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href={link.uri}
                            >
                                {link.label}
                            </Link>
                        </Navbar.CollapseItem>
                    )
                    }
                </Navbar.Collapse>
            </Navbar>
            <Container lg>
                <Outlet></Outlet>

            </Container>

        </Box>
    );
};

export default Home;
