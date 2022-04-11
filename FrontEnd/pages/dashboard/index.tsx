
import { Layout } from '@/components/layout/layout';
import { Container, Section } from '@/components/ui';
import { useEffect } from 'react'
import { membersAdapter } from '../../adapters/members.adapter';
import { AcceptMember } from './components/AcceptMember';
import { LastestNews } from './components/LastestNews';
import { AscentRecommendations } from './components/leaderClan/AscentRecommendations';
import { ListOfMembers } from './components/ListOfMembers';
import { LastestReports } from './components/moderator/LastestReports';

const Dashboard = () =>  {

  return (
    <Layout>
        <h1>Dashboard Surgens</h1>
        <LastestNews />
        <LastestReports />
        <AcceptMember />
        <AscentRecommendations />
        <ListOfMembers />
    </Layout>
  )
}

export default Dashboard;
