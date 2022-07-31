import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import LocationSection from 'components/LocationSection';
import StickyNavigation from 'components/StickyNavigation';

const IndexPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection>
        <HeroSection.Img src="/assets/images/kasen_buiten_1.jpg" />
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_buiten_4.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Ontdek Kasen</ImageSection.Title>
            <ImageSection.Subtitle>Een zieke subtitle</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kort verhaaltje. Niet te lang, want anders is het weer zo veel
            leesvoer. Maar ook niet te kort, want dan staat het stom.
          </p>
          <ImageSection.Button href="/over">Over Kasen</ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_buiten_4.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Kamers</ImageSection.Title>
            <ImageSection.Subtitle>Een zieke subtitle</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kort verhaaltje. Niet te lang, want anders is het weer zo veel
            leesvoer. Maar ook niet te kort, want dan staat het stom.
          </p>
          <p>Zo ziet nog een paragraaf eruit. Gaaf toch?</p>
          <ImageSection.Button href="/over">Bekijk kamers</ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
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
          <ImageSection.Button href="/over">
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
