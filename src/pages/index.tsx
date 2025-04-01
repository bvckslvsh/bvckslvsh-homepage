import React from 'react';
import Layout from '@/widgets/layout'
import UserCard from "@/pages/components/userCard";

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <UserCard name={'John Doe'} nickname={'NICKNAME'} role={`User's Role`} extra={'Some extra stuff here'} />
        </Layout>
    );
};

export default IndexPage;
