import React from 'react'
import {StyledList} from './styles'
export const TrackingHistory = ({history}) => {
    return (
        <div>
            <h4>Tracking History </h4>
            <StyledList className="list-group">
                {history.map((log, i) => {
                    return(
                        <li className="list-group-item" key={i}>
                        {console.log(log.facilityId)}
                            {/* <strong>Facility Id:</strong> {log.facilityId}<br /> */}
                            <strong>Facility Name:</strong> {log.facilityName}<br />
                            <strong>Facility Address:</strong> {log.facilityAddress}<br />
                            <strong>Facility Zipcode:</strong> {log.facilityZip}
                        </li>
                       );
                })}
            </StyledList>
        </div>
    
    )
}