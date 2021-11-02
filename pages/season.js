import React, { useState } from "react";
import Layout from "../components/Layout";
import rewards from "../data/rewards";
import members from "../data/members";

const season = () => {
    //const [points, setPoints] = useState(1200);

    const renderRewards = () => {
        return rewards.map(reward => {
            return (
                <div key={reward.id} className="mx-2 my-5 bg-white rounded-lg shadow-lg p-2">
                    <h1 className="text-xl uppercase font-semibold text-blue-500">
                        {reward.name}
                    </h1>
                    <p className="font-medium uppercase my-3">
                        {reward.description}
                    </p>
                    <p className="font-light italic my-3">
                        $ {reward.price} value - {reward.quantity} left
                    </p>
                    <button className="bg-green-900 text-white p-2">
                        Redeem
                    </button>
                </div>
            )
        })
    }

    return (
        <Layout>
            <div>
                <h1 className="font-extrabold text-2xl uppercase text-center my-3">
                    you have 1200 points
                </h1>
            {renderRewards()}
            </div>            
        </Layout>
    )
}

export default season