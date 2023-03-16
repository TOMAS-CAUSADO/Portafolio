    import { type } from "os";
    import React, { Children } from "react";
    import { Footer } from "./layout/footer";
    import { Nav } from "./layout/nav";
    
    
    export const Layout = (props: {children: React.ReactNode}) => {
    
        return(
            <>
    
                <Nav/>
    
                    {props.children}
                <Footer/>
    
            </>
    
        );
    
    }