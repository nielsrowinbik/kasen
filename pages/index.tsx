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
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Kasen</HeroSection.Title>
            <HeroSection.Subtitle>
              Een oase van rust (ofzo)
            </HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_buiten_4.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Over Kasen</ImageSection.Title>
            <ImageSection.Subtitle>Een zieke subtitle</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kort verhaaltje. Niet te lang, want anders is het weer zo veel
            leesvoer. Maar ook niet te kort, want dan staat het stom.
          </p>
          <ImageSection.Button href="/over">Meer lezen</ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_buiten_4.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Het huis</ImageSection.Title>
            <ImageSection.Subtitle>Een zieke subtitle</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Kort verhaaltje. Niet te lang, want anders is het weer zo veel
            leesvoer. Maar ook niet te kort, want dan staat het stom.
          </p>
          <p>Zo ziet nog een paragraaf eruit. Gaaf toch?</p>
          <ImageSection.Button href="/over">Bekijk Kasen</ImageSection.Button>
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
