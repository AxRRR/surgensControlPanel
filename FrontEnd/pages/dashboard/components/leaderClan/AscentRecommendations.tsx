import { Container, Section } from '@/components/ui';
import { useCallService } from '@/hooks/useCallService';
import { AppStore } from '@/redux/store';
import { recommendationTypes } from 'pages/dashboard/models/mod.models';
import { getRecommendatios } from 'pages/dashboard/services/mod.services';

export const AscentRecommendations = () => {
  // Custom hook para los servicios
  const { call, isFinish } = useCallService(getRecommendatios);

  return (
    <Container>
      {isFinish && !!call && (
        <Section
          config={{ enable: true, flex: false, text: 'Miembros para ascenso' }}
        >
          {call.map((recom: recommendationTypes, index: number) => (
            <div key={index} className="dashboard__ascent">
              <h3>
                Recomendación a {recom.recommended_type} para{' '}
                {recom.recommended_clan}{' '}
              </h3>
              <h3>{recom.ascent_member.name_member}</h3>
              <p>Ver información</p>
              <h1>Recomendado por {recom.recommended_name.name_member}</h1>
              <div className="dashboard__actions">
                <button className="button__green">Aceptar ascenso</button>
                <button className="button__process">Declinar ascenso</button>
              </div>
            </div>
          ))}
        </Section>
      )}
    </Container>
  );
};
