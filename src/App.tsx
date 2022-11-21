import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NextUIProvider, useTheme} from "@nextui-org/react";
import Home from "./pages/home";
import TokenHolders from "./pages/token-holders";
import WalletConnections from "./pages/wallet-connections";

import { createTheme } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';


const lightTheme = createTheme({
    type: 'light',

})

const darkTheme = createTheme({
    type: 'dark',

})


function App() {

    return (
        <BrowserRouter>
            <NextThemesProvider
                defaultTheme="dark"
                attribute="class"
                value={{
                    light: lightTheme.className,
                    dark: darkTheme.className
                }}

            >
                <NextUIProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}>
                            <Route path={"/token"} element={<TokenHolders/>}/>
                            <Route path={"/wallet"} element={<WalletConnections/>}/>

                        </Route>
                    </Routes>

                </NextUIProvider>
            </NextThemesProvider>

        </BrowserRouter>
    );
}

export default App;
