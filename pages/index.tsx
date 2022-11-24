import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import StickyNavigation from 'components/StickyNavigation';

const IndexPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection>
        <HeroSection.Img src="/assets/images/IMG_0998.JPG" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Kasen</HeroSection.Title>
            <HeroSection.Subtitle>
              Een oase van rust in Dalsland 🇸🇪
            </HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/DSC04493.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Ontdek Kasen</ImageSection.Title>
            <ImageSection.Subtitle>
              Van boerderij tot vakantiewoning
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kasen is aan het einde van de 19e eeuw gebouwd; het precieze jaar is
            onbekend. Het was decennialang een kleine boerderij. Links van het
            huis lag een moestuin en aan de rechterkant lag landbouwgrond. Ook
            werden er enkele koeien gehouden.
          </p>
          <p>
            Nadat in 1955 de laatste leden van de familie Johannesson Kasen
            verlieten, heeft het huis verschillende eigenaren gehad en leegstand
            gekend. Vanaf 1985 werd het gebruikt als jachthuis en vanaf 2000 als
            vakantiewoning.
          </p>
          <ImageSection.Button href="/over">Verder lezen</ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_1619.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Bezoek Kasen</ImageSection.Title>
            <ImageSection.Subtitle>Geniet van de rust</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Wij, Leonard en Ciska, gaan zo vaak als het maar kan naar Kasen,
            maar in de praktijk is dat toch maar zo&apos;n drie tot vier keer
            per jaar. Omdat het goed is voor het huis, en omdat we deze
            heerlijke plek ook willen delen, geven we onze vrienden en bekenden
            de mogelijkheid om tegen een schappelijke vergoeding in Kasen te
            verblijven. Sinds 2014 hebben al heel wat mensen een bezoekje aan
            Kasen gebracht en van het huis en de omgeving genoten.
          </p>
          <ImageSection.Button href="/bekijk">
            Meer informatie
          </ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_4326.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Omgeving Kasen</ImageSection.Title>
            <ImageSection.Subtitle>Enorm gevarieerd</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kasen ligt midden in het bos, in de prachtige provincie Dalsland. De
            natuur is er overweldigend en gevarieerd. Je kunt er wandelend,
            fietsend en kajakkend van genieten, en soms oog in oog komen te
            staan met een eland, een ree of een eekhoorn. Maar ook als je wat
            anders wilt beleven dan natuur, is er dichtbij en wat verder weg van
            alles te beleven.
          </p>
          <ImageSection.Button href="/omgeving">
            Meer informatie
          </ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
    </>
  );
};

export default IndexPage;
