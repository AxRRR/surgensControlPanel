import { Layout } from '@/components/layout/layout';
import { AcceptMember } from './components/AcceptMember';
import { ManageMembers } from './components/administrator/ManageMembers';
import { BestMembers } from './components/BestMembers';
import { LastestNews } from './components/LastestNews';
import { AscentRecommendations } from './components/leaderClan/AscentRecommendations';
import { ListOfMembers } from './components/ListOfMembers';
import { LastestReports } from './components/moderator/LastestReports';
import { LastMembers } from './components/moderator/LastMembers';
import { LastRegistedMembers } from './components/moderator/LastRegistedMembers';
import { WorstMembers } from './components/WorstMembers';

const Dashboard = () => {
  return (
    <Layout>
      {/* TODO: Mejorar el layout del titulo */}
      <h1>Dashboard Surgens</h1>
      <LastestNews />
      <LastestReports />
      <AcceptMember />
      <AscentRecommendations />
      <ListOfMembers />
      <LastMembers />
      {/* TODO: Restringir estos components */}
      <LastRegistedMembers />
      <BestMembers />
      <WorstMembers /> 

      {/* TODO: Solo Administrador */}
      <ManageMembers />
    </Layout>
  );
};

export default Dashboard;
