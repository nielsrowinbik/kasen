// Deze pagina bevat:
// - informatie over de beschikbaarheid
// - prijzen

import ProseSection from 'components/ProseSection';
import StickyNavigation from 'components/StickyNavigation';

const AboutPage = () => {
  return (
    <>
      <StickyNavigation />
      <ProseSection>
        <h2>Beschikbaarheid</h2>
        <p>
          Doordat Kasen een eigen waterbron en eigen septic tank heeft, en het
          in Zweden in de winter behoorlijk kan vriezen, moet elk najaar het
          water afgesloten worden en moeten alle afvoerleidingen geleegd worden
          om vorstschade te voorkomen. Dit betekent dat Kasen globaal vanaf eind
          april tot en met begin november bewoonbaar is, en vooralsnog niet in
          de winter.
        </p>
      </ProseSection>
      <ProseSection>
        <h2>Huur</h2>
        <p>
          Bij bewoning tot en met vier personen € 375, - per week (in elk
          seizoen); voor elke extra persoon € 25, - per week. Kasen is geschikt
          voor bewoning met 4 tot 6 personen. Elke gebruiker van Kasen vragen we
          tijdens het verblijf (minstens, afhankelijk van de duur van het
          verblijf) één keer het gras te maaien. Geen zorgen: er is een
          motormaaier! Aangezien we niet na elke huurperiode zelf naar Kasen
          kunnen om het huis schoon te maken zodat het weer fris klaar staat
          voor de volgende gebruiker, vragen we elke gebruiker aan het einde van
          de huurperiode het huis schoon te maken; we hebben hiervoor een
          checklist opgesteld. Op deze checklist staan ook wat kleine maar
          noodzakelijke handelingen die verricht moeten worden voordat het huis
          verlaten wordt (zoals waterpomp uit, boiler uit, koelkast leeg en uit,
          etc). Het huis is al jaren rook- en huisdiervrij en dat willen we
          graag zo houden.
        </p>
      </ProseSection>
    </>
  );
};

export default AboutPage;
