// Deze pagina bevat:
// - contactformulier?
//
// Design inspiratie: http://themes.opendept.net/hemma-elegant/about-us/

import HeroSection from 'components/HeroSection';
import StickyNavigation from 'components/StickyNavigation';

const ContactPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection fullHeight={false}>
        <HeroSection.Img src="/assets/images/kasen_buiten_1.jpg" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Over Kasen</HeroSection.Title>
            <HeroSection.Subtitle>Iets van een subtitel</HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <section className="prose">
        <h3>Welkom in Kasen</h3>
        <p>
          Wij zijn sinds september 2013 de gelukkige eigenaren van een
          vakantiehuisje in Zweden: Kasen. Wij gaan zo vaak als het maar kan
          naar Kasen, maar in de praktijk is dat toch maar zo’n drie tot vier
          keer per jaar. Omdat het goed is voor het huis, en omdat we deze
          heerlijke plek ook met jullie willen delen, bieden we het huis in onze
          vriendenkring (voor een vriendenprijsje) te huur aan. Sinds 2014
          hebben al veel mensen een bezoekje aan Kasen gebracht en van het huis
          en de omgeving genoten.
        </p>
        <h3>Locatie</h3>
        <p>
          Kasen ligt op een groot stuk grond (4000 m2) midden in het bos. De
          dichtstbijzijnde buurwoning is op zo’n 700 m en op ongeveer een
          kilometer afstand begint de bebouwing van het dorp Fengersfors,
          waarvan het centrum op iets meer dan 2 km van Kasen ligt. Fengersfors
          ligt in de provincie Dalsland en heeft ongeveer 350 inwoners én een
          ‘lanthandel’, een kleine lokale supermarkt.
        </p>
        <h3>Contact</h3>
        <p>
          <i>Hier komt een contactformulier</i>
        </p>
      </section>
    </>
  );
};

export default ContactPage;
