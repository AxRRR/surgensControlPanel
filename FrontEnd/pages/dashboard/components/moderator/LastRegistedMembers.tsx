import { Container, Section } from '@/components/ui';
import { useCallService } from '@/hooks/useCallService';
import { lastestMembersTypes } from 'pages/dashboard/models/admin.models';
import { getLastestMembers } from 'pages/dashboard/services/admin.services';

export const LastRegistedMembers = () => {
  const { call, isFinish } = useCallService(getLastestMembers);
  console.log(call)
  return (
    <Container>
      {isFinish && !!call && (
        <Section
          config={{
            enable: true,
            flex: false,
            text: 'Últimos miembros registrados',
          }}
        >
          {call.map((member: lastestMembersTypes, index: number) => (
            <div key={index} className="dashboard__listmember">
              <h1>{member.name_member}</h1>
              <p>Ver perfil</p>
            </div>
          ))}
        </Section>
      )}
    </Container>
  );
};
