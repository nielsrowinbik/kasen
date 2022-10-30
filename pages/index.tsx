import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import LocationSection from 'components/LocationSection';
import StickyNavigation from 'components/StickyNavigation';

const IndexPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection>
        <HeroSection.Img src="/assets/images/luchtfoto kasen.jpg" />
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
      {/* <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_buiten_4.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Over het huis</ImageSection.Title>
            <ImageSection.Subtitle>Een zieke subtitle</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kort verhaaltje. Niet te lang, want anders is het weer zo veel
            leesvoer. Maar ook niet te kort, want dan staat het stom.
          </p>
          <ImageSection.Button href="/over">Meer lezen</ImageSection.Button>
        </ImageSection.Content>
      </ImageSection> */}
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_buiten_4.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Omgeving</ImageSection.Title>
            <ImageSection.Subtitle>Een zieke subtitle</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kort verhaaltje. Niet te lang, want anders is het weer zo veel
            leesvoer. Maar ook niet te kort, want dan staat het stom.
          </p>
          <p>Zo ziet nog een paragraaf eruit. Gaaf toch?</p>
          <ImageSection.Button href="/omgeving">
            Meer informatie
          </ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <LocationSection>
        <LocationSection.Map />
        <LocationSection.Content>
          <LocationSection.Header>
            <LocationSection.Title>Locatie</LocationSection.Title>
            <LocationSection.Subtitle>
              Een zieke subtitle
            </LocationSection.Subtitle>
          </LocationSection.Header>
          <p>
            Hiernaast komt een kaartje met de locatie van Kasen op Google Maps.
          </p>
          <LocationSection.Button href="https://goo.gl/maps/Sp43HutBjVSt66VP9">
            Google Maps
          </LocationSection.Button>
        </LocationSection.Content>
      </LocationSection>
    </>
  );
};

export default IndexPage;
