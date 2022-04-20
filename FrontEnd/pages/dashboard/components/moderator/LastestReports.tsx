import { Container, Section } from '@/components/ui';
import { ReportTypes } from 'pages/dashboard/models/mod.models';
import { getReports } from 'pages/dashboard/services/mod.services';
import { useCallService } from '../../../../hooks/useCallService';

// TODO: Revisar porque no está descripcion de la incidencia.
export const LastestReports = () => {
  // Utilizamos nuestro custom hook para obtener la infomacion
  const { call, isFinish } = useCallService(getReports);

  return (
    <Container>
      {isFinish && !!call && (
        <Section config={{ enable: true, flex: false, text: 'Incidencias' }}>
          {call.map((report: ReportTypes, index: number) => (
            <div key={index} className="dashboard__reports">
              <h1>
                N° {report.report_invoice} - Autor:{' '}
                {report.report_user.name_member}
              </h1>
              <h3>{report.report_title}</h3>
              <p>{report.report_title}</p>
              <button className="button__green">Revisar incidencia</button>
            </div>
          ))}
        </Section>
      )}
    </Container>
  );
};
