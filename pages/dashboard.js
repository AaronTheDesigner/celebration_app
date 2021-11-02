import Layout from "../components/Layout";
import Member from "../components/Member";
import MemberList from "../components/MemberList";

const dashboard = () => {
    return (
        <Layout>
            <Member />
            <MemberList />
        </Layout>
    )
}

export default dashboard
