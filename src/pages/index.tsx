import React from 'react';
import Layout from '@/widgets/layout'
import UserCard from "@/pages/components/userCard";
import HubMenu from "@/pages/components/hubMenu";
import './index.css'

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <div className={'wrapper'}>
                <UserCard name={'John Doe'} nickname={'NICKNAME'} role={`User's Role`} extra={'Some extra stuff here'}/>
                <HubMenu/>
            </div>
        </Layout>
    );
};

export default IndexPage;
