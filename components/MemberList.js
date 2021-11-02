import React, { useState } from 'react'
import members from '../data/members'
import celebrations from '../data/celebrations'
import rewards from '../data/rewards'

const MemberList = () => {
    const [deed, setDeed] = useState(celebrations[0].quantity)
    const [feat, setFeat] = useState(celebrations[1].quantity)
    const [triumph, setTriumph] = useState(celebrations[2].quantity)
    const [points, setPoints] = useState(members[0].points)

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

    const ShowPoints = () => {
        if (deed > 0) {
            return (
                <div>
                    <h1 className="text-lg text-center bg-red-900 p-2 text-white my-5 rounded-md shadow-lg">
                        Give Deeds for the week to see your points. {deed} left.
                    </h1>
                    {RenderCelebrations()}
                </div>
            )
        }

        return (
            <div className="text-lg text-center bg-blue-900 p-2 text-white my-5 rounded-md shadow-lg">
                {points}
                {RenderCelebrations()}
            </div>
        )
    }

    const giveDeed = () => {
        let count = deed;
        let press = count -1
        setDeed(press)

    }

    const giveFeat = () => {
        let count = feat;
        let press = count -1
        setFeat(press)
    }

    const giveTriumph = () => {
        let count = triumph;
        let press = count -1
        setTriumph(press)
    }

    const giveDeedPoints = () => {
        let score = points;
        let press = points + 200
        setPoints(press)
    }

    const giveFeatPoints = () => {
        let score = points;
        let press = points + 500
        setPoints(press)
    }

    const giveTriumphPoints = () => {
        let score = points;
        let press = points + 1000
        setPoints(press)
    }


    const LoopMembers = () => {
        return members.map(member => {
            return (
                <div key={member.id} className="my-1 text-center flex flex-col bg-blue-100 p-2 rounded-lg shadow-lg">
                    <h1 className="font-extrabold text-3xl my-3">
                        {member.name}
                    </h1>
                    <div className="bg-green-900 text-white rounded-lg flex my-2 flex-col">
                        Celebrate Them
                        <div className="flex justify-center gap-2">
                        <button className="bg-white text-black uppercase m-2 p-1 rounded-md" onClick={giveDeed}>
                            deed
                        </button>
                        <button className="bg-white text-black uppercase m-2 p-1 rounded-md" onClick={giveFeat}>
                            feat
                        </button>
                        <button className="bg-white text-black uppercase m-2 p-1 rounded-md" onClick={giveTriumph}>
                            triumph
                        </button>
                        </div>
                    </div>    

                </div>
            )
        })
    }

    const RenderCelebrations = () => {
        return (
            <div className="bg-green-900 p-2 text-white shadow-lg rounded-lg flex my-2 flex-col">
                <h1 className="text-2xl text-center">
                    Celebrate Others
                </h1>
                <p>Start Recieveing by Celebrating...</p>
                <ul className="font-extrabold">
                    <li className="text-blue-500 bg-gray-200 p-2 text-center rounded-md m-1">{deed} Deeds This Week</li>
                    <li className="text-yellow-500 bg-gray-200 p-2 text-center rounded-md m-1">{feat} Feats This Month</li>
                    <li className="text-purple-500 bg-gray-200 p-2 text-center rounded-md m-1">{triumph} Triumph This Celebration</li>
                </ul>

            </div>
        )
    }

    const renderOther = () => {
        return (
            <div className="bg-gray-400 my-1 flex flex-col p-2 rounded-lg shadow-lg">
                <h1 className="text-center font-extrabold text-2xl">
                    Lisa
                </h1>
                <div className="bg-green-900 text-white rounded-lg flex my-2 flex-col">
                        Celebrating Bobbie
                    <div className="flex justify-center gap-2">
                        <button className="bg-white text-black uppercase m-2 p-1 rounded-md" onClick={giveDeedPoints}>
                            deed
                        </button>
                        <button className="bg-white text-black uppercase m-2 p-1 rounded-md" onClick={giveFeatPoints}>
                            feat
                        </button>
                        <button className="bg-white text-black uppercase m-2 p-1 rounded-md" onClick={giveTriumphPoints}>
                            triumph
                        </button>
                    </div>
                </div>    
            </div>
        )
    }


    return (
        <div className="Z-10 m-3">
            <div className="rounded-lg shadow-lg flex flex-col px-3 py-3 bg-blue-100">
                {LoopCelebrations()}
            </div>
            <br />
            <hr />
            <br />
            <h1 className="text-2xl underline">
                Your Colleagues
            </h1>
            {ShowPoints()}
            <div className="my-1 flex flex-col bg-white p-2 rounded-lg shadow-lg">
                {LoopMembers()}
            </div>   
            {renderOther()}
        </div>
    )
}

export default MemberList
