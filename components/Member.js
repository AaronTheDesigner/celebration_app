import members from '../data/members';
import celebrations from '../data/celebrations';

const Member = () => {

    const xtractBobbie = () => {
        return members[0]
    }
    
    return (
        <div className="m-3">
            <div className="rounded-lg shadow-lg flex flex-col px-3 py-3 bg-green-100">
                <h1 className="text-lg">Welcome {members[0].name}</h1>
                <div className="text-left text-lg">Give Celebrations to Recieve Celebrations</div>
            </div>
        </div>
        
    )
}

export default Member
