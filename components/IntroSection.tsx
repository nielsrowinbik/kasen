import Button from 'components/Button';
import ProseSection from 'components/ProseSection';

const IntroSection = () => (
  <ProseSection>
    <h2></h2>
    <p>
      We zijn sinds september 2013 de gelukkige eigenaren van een vakantiehuisje
      in Zweden: Kasen. Wij gaan er zo vaak heen als het maar kan, maar in de
      praktijk is dat toch maar zo’n drie tot vier keer per jaar. Omdat het goed
      is voor het huis, en omdat we deze heerlijke plek ook met jullie willen
      delen, bieden we het huis in onze vriendenkring (voor een vriendenprijsje)
      te huur aan.
    </p>
    <Button href="/over">Over Kasen</Button>
    <Button href="/omgeving">Over de omgeving</Button>
    <Button href="/beschikbaarheid">Beschikbaarheid</Button>
  </ProseSection>
);

export default IntroSection;
