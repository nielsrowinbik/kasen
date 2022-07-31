// Deze pagina bevat:
// - korte historie van kasen
// - overzicht van de voorzieningen

import ProseSection from 'components/ProseSection';
import StickyNavigation from 'components/StickyNavigation';

const AboutPage = () => {
  return (
    <>
      <StickyNavigation />
      <ProseSection>
        <p>
          Kasen is een oude boerderij, maar al jaren in gebruik als
          vakantiewoning en van alle gemakken voorzien. Het is een warm, knus en
          sfeervol huis, gelegen op een groot stuk grond (4000 m2) midden in het
          bos. De dichtstbijzijnde buurwoning is op zo’n 700 m en op ongeveer
          een kilometer afstand begint de bebouwing van het dorp Fengersfors,
          waarvan het centrum op iets meer dan 2 km van Kasen ligt.
        </p>
      </ProseSection>
    </>
  );
};

export default AboutPage;
