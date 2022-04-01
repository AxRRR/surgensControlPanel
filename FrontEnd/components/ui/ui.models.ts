import { ReactNode } from "react";

export interface ContainerModel { 
    children: ReactNode, 
}

export interface SectionModel { 
    children: ReactNode,  
    config: {
        enable?: boolean,
        text?: string,
        flex?: boolean
    }
}