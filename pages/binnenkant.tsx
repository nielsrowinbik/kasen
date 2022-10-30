// Deze pagina bevat:
// - korte historie van kasen
// - overzicht van de voorzieningen
//
// Design inspiratie: http://themes.opendept.net/hemma-elegant/rooms/

import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import StickyNavigation from 'components/StickyNavigation';

// TODO: The rooms should probably be loaded through Contentlayer so we can give each of them its own page more easily
const AboutPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection center>
        <HeroSection.Img src="/assets/images/kasen_buiten_1.jpg" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Over Kasen</HeroSection.Title>
            <HeroSection.Subtitle>Iets van een subtitel</HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_keuken_1.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Keuken</ImageSection.Title>
            <ImageSection.Subtitle>Lekker eten koken!</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Iets meer info over de keuken toch. Er is een oven en GEEN
            vaatwasser!
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_woonkamer_1.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Woonkamer</ImageSection.Title>
            <ImageSection.Subtitle>Lekker filmpje kijken</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            De woonkamer is goed voor wonen. Er is een bank, tv, tafel, en
            andere dingen. Oh ja, en er zijn veel DVD's!
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_slaapkamer_1_1.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Slaapkamer uno</ImageSection.Title>
            <ImageSection.Subtitle>Om te SLAPEN</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>Hier kun je SLAPEN</p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/kasen_slaapkamer_2_1.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Slaapkamer dos</ImageSection.Title>
            <ImageSection.Subtitle>Om te SLAPEN</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>Hier kun OOK je SLAPEN</p>
        </ImageSection.Content>
      </ImageSection>
    </>
  );
};

export default AboutPage;
