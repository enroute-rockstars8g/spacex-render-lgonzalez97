import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { getCapsules } from '../../services/space/service';
import { Mission } from './Mission';
import "../../index.css"

export function Rocket() {
    const [missions, setMissions] = useState([])
    // const [missionID, setMissionID] = useState<number>(1);


    
    useEffect(() => {
        getCapsules().then((values) => {
            setMissions(values)
        })

    }, [])

    // const getMissionsID = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.value !== "")
    //         setMissionID(parseInt(event.target.value));
    //     else setMissionID(1);
    // }
    // const fetchMission = async () => {
    //         const newMission = await getCapsules()
    //          setMissions(missions);
    // }

    return (
        
        <div >
            <h1 id="header2">Missions</h1>
            <div>
            {/* <input type="text" onChange={getMissionsID}></input><button onClick={fetchMission}>Search</button> */}
            
            <div>{missions.length ? 
            <div>{missions.map((mission: any) => {
                // return <p key={mission.id}>{mission.id}- {mission.landings}</p>
                return <Mission key={mission.id} id={mission.id} landings={mission.landings} missions={mission.Missions} original_launch={mission.original_launch} reuse_count={mission.reuse_count} />
            })}</div> : null}
            </div>

            
        </div>
        </div>
     
    )

}