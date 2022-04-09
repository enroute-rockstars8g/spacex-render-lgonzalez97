import React from "react";
import "../../index.css"

interface MissionProps {
    id: string
    landings: number
    missions: number
    original_launch: Date
    reuse_count: number
}

export function Mission(props: MissionProps) {
    return (
        <>
        <table id="missions-table">
            <tr>
                <td>
                <td>ID <br />{props.id}</td>
                <td><h4>Landings</h4> <br />{props.landings}</td>
                <td><h4>Missions</h4> <br />{props.missions}</td>
                <td><h4>Original launch</h4><br />{props.original_launch}</td>
                <td><h4>Reuse Count</h4>{props.reuse_count}</td>
                </td>
            </tr>
        </table>
       {/* <tr id="mission-table"> 
            <td>ID <br />{props.id}</td>
            <td>{props.landings}</td><br></br>
            <td>{props.missions}</td><br></br>
            
           
            {props.original_launch}<br></br>
            {props.reuse_count}<br></br>
            </tr> */}
        </>
    )
}