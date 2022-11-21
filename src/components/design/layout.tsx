import { Box } from "./box";

const Layout = ({ children }: any) => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        {children}
    </Box>
);

export default Layout;