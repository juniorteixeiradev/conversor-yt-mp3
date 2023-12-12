"use client"
import useApi from "@/api/api"
import { AxiosResponse } from "axios";
import { useEffect } from "react";

interface containerProps{
    className?: string,
    children?: any
}

export default function Container(props:containerProps){
    
    return (
    <div 
        className={`${props.className}`}
    >
        {props.children}
    </div>)
}