import {Container, Dropdown, Link, Navbar, Text, Image} from "@nextui-org/react";
import { useState, useMemo } from "react";
import {Constants} from '../util/constants'

interface NetworkDropdownType {
    name: string,
    img: string,
    width?: number
}

const networks = [
    {name: "BSC", img: "https://bscscan.com/images/brandassets/BscScan-logo-light-circle.png"},
    {name: "Polygon", img: "https://polygontechnology.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F938afd3e-e620-4946-9206-41d9f00e581e%2FPrimary_Token.svg?id=d05c50cf-35fc-4a93-b645-c38a5210aa3c&table=block&spaceId=51562dc1-1dc5-4484-bf96-2aeac848ae2f&userId=&cache=v2"},
    {name: "Ethereum", img: "https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/13c43/eth-diamond-purple.png", width: 18},
    {name: "Fantom", img: "https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=023"},
    {name: "Avalanche", img: "https://lh3.googleusercontent.com/fife/AAbDypCv3xiXsWcj7O0WgBi1JWGs2_JcPqqv2PQUSBqTYvevfJlVZYbkbOf99JS22AnOFyA8im0cYgb8nIswBiBMsW-O0gLdumUPmWWCFoONnyCzSPgUuPwuB1nYA093FzYF6ot7bY4ouKEvSkVyOcN66beI0OrViBrh60T2fviMu9mcRuGj34o6XJZSbmc3jKaIcIhzJeOLeXfc2yaVH-_K5Adpc0Q2qGtO8U5r_oyfVW3ftFkHg1orYeOvz_xUh3frMpxSoPm0Dai85YpHEf8Z4aeBw9EQ-XslVukW90V7JcLuwMBd5XpMQRi24LR8qhu7PAzrv0_9NEVSzxTxjiYDiBCJnuWAw2YPmbi1S11wJWftTYj0ZMKIY4q7YQNp4AVNvKi44N0DclB15CO8-7Q5IPPzs0zqntUcE3KiPdHkCxdogsFmcij3WISnIwhEDIscaGgJoytcdlrTMO9T2vZCv08SZ9jXq9Tc8BXdzwiSO21yjp_Oi1vvtFWkITJgbJyMuzBmfthNhW1mCBSC-Q2ROKye98pg6QZL92g18-TMUYi64uEBJJOsF_81y8iVIgk-9FkHmJczCxLFgWRb3BrdUOhjmUVbrVHRDTvQJnmGgeYjKDHgbYwlrQtNYhVzHw1Ct3f2szkwRyMmXm-R4RUMCPqYgZd8bSBb3JlX5BuqX0mao37p0-tPNCVldXj_zyGBnNdwszPCr9wvdiB0uPK-4i1pILIliDKzPThtp7QikdGz99pnaEHYnLNVN1FwFeeCNQ2DUSUvf99Zf4HJlCEhNoj98lNW1ZV8VD4nHWZMRhbZTG-3qLrdlQTbJF4HJTa6w1p_qHzvTuzktphIbuJkRc2fp0l9qt5tR_ve5llLlT3GJ7NAqNmtHS5HuyI0VvFznunAL_FBJxTYs8ukgk555yLRgBCQCp0ZwjvchOmL61RNra38OkDaEyVTfb7yHm3Ab9oseOhL6DUuBwWxnsFcItyw-KvW8aTc3uD9w8N11fkTAfRtfsH7AkkHyeKiwSO75cJgLdpHby233AwnCJ4ImV-TWifggZxfp0dAe5b0aumsoBhl23DyRoG-DPNK812jNW74G_g68FGJJiG1bjwIRIYgeZw_ItSr-g6TDYqGNPbCiAY6OSmg6Y6nHI5ySKgRSKBko4qNhlv3onq72BhEZIOnK8KF9_p7f7qmaS2AlbmuVm-ALyz8OerjuNtKr8BIbB_ze3c2SDoHotD_OvNZ55KLfUmaDsQaC8vleHSyPJWGIcnudZdAdwHA02Rk4Bpood-8AIj0gP-BlPRicdnq0WMXJdImUbt3NKXNFhEz4SJ9kmQd4WrUsbmye3y5BAWgLt17yT-BRwLhYe4w_v3r6jVbYb20akZjs6LRoOdOBlWhgt0zjl3Y4H2hDk7TM5xcSwzTfH4fyqD3Ms0Q6hcSR7m_p3rXrxHLc12TDut7jcdErzakISDrkz0si32251Hlak0PmYG7FBb8fw5zgpDansjrOhMCDdLIvZRHLLx37fAJhpvAll-tMBVXMjf4ecpI9LCAzLy_PwDkILR3CSZtFVlsyW3Vg6hda1ouRYidLrW_W1rFkuAkFubZhg8t28WN73ALGTimzVtO0hJEvnEWOuL0Gtnp4sgL3A=w2559-h1307"},
] as NetworkDropdownType[]

const NetworkSelector = () => {
    const [selected, setSelected] = useState(localStorage.getItem(Constants.LOCALSTORAGE_SELECTED_NETWORK ?? networks[0].name));

    const handleChange = (newSelected: string) => {
        localStorage.setItem(Constants.LOCALSTORAGE_SELECTED_NETWORK, newSelected)
        setSelected(newSelected)
    }

    return (
        <Dropdown>
                <Dropdown.Button bordered color="primary" >
                    <Image 
                        width={22} 
                        src={networks.find(n => n.name === selected)!.img} />
                    {selected}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    //@ts-ignore
                    onSelectionChange={(e) => handleChange(e.currentKey)}
                >
                    {networks.map(network => 
                            <Dropdown.Item 
                                key={network.name} 
                                icon={
                                    <Image width={network.width ?? 22} src={network.img}></Image>
                                }
                                >
                                {network.name}
                            </Dropdown.Item>
                        )
                    }
                  
                </Dropdown.Menu>
        </Dropdown>
    );
}

export default NetworkSelector;


