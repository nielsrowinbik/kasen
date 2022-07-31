// Deze pagina bevat:
// - overzicht van de omgeving
// - activiteiten in de omgeving

import ProseSection from 'components/ProseSection';
import StickyNavigation from 'components/StickyNavigation';
import { allActivities } from 'contentlayer/generated';
import type { InferGetStaticPropsType } from 'next/types';

const AreaPage = ({
  activities,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <StickyNavigation />
      <ProseSection>
        <h2>Activiteiten</h2>
        <ul>
          {activities.map((activity) => (
            <li>{activity.title}</li>
          ))}
        </ul>
      </ProseSection>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      activities: allActivities,
    },
  };
};

export default AreaPage;
