import React, { useState } from 'react'
import members from '../data/members'
import celebrations from '../data/celebrations'
import rewards from '../data/rewards'

const MemberList = () => {
    const [deed, setDeed] = useState(celebrations[0].quantity)
    const [feat, setFeat] = useState(celebrations[1].quantity)
    const [triumph, setTriumph] = useState(celebrations[2].quantity)

    const LoopCelebrations = () => {
        return celebrations.map(cel => {
            return (
                <div key={cel.id} className="my-1 flex flex-col bg-white p-2 rounded-lg shadow-lg">
                    <h1 className="text-2xl uppercase">
                        {cel.title}
                    </h1>
                    <p className="text-sm">
                        {cel.description}
                    </p>
                </div>
            )
        })
    }

    const LoopMembers = () => {
        return members.map(member => {
            return (
                <div className="my-1 flex flex-col bg-blue-100 p-2 rounded-lg shadow-lg">
                    {member.name}
                </div>
            )
        })
    }


    return (
        <div className="m-3">
            <div className="rounded-lg shadow-lg flex flex-col px-3 py-3 bg-blue-100">
                {LoopCelebrations()}
            </div>
            <br />
            <hr />
            <br />
            <h1 className="text-2xl underline">
                Your Colleagues
            </h1>
            <div className="my-1 flex flex-col bg-white p-2 rounded-lg shadow-lg">
                {LoopMembers()}
            </div>        
        </div>
    )
}

export default MemberList
