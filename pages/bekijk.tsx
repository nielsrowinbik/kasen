import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import StickyNavigation from 'components/StickyNavigation';

const HomePage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection center fullHeight={false}>
        <HeroSection.Img src="/assets/images/IMG_5770.jpg" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Bekijk Kasen</HeroSection.Title>
            <HeroSection.Subtitle>
              Ruimten en voorzieningen
            </HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/DSC04464.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Een kijkje in Kasen</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Kasen is knus en comfortabel. Voorpret is het halve werk, bekijk
            daarom hier welke ruimten er in Kasen zijn en welke voorzieningen je
            daar aantreft.
          </p>
          <ImageSection.Button href="/ruimten">
            Bekijk de ruimten
          </ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_9227.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Je bezoek aan Kasen</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Doordat Kasen een eigen waterbron en septic tank heeft en het in
            Zweden in de winter behoorlijk kan vriezen, moet elk najaar het
            water afgesloten worden om vorstschade te voorkomen. Dit betekent
            dat Kasen globaal vanaf eind april tot en met half november
            bewoonbaar is.
          </p>
          {/* TODO: Visitter integration */}
          <ImageSection.Button href="/beschikbaarheid">
            Beschikbaarheid bekijken
          </ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_9906.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Extra's</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Naast de prachtige ligging en het comfort, zijn er bij Kasen een
            aantal extra’s aanwezig die je verblijf nog aangenamer kunnen maken,
            als je er van houdt natuurlijk. Er zijn fietsen (dames en heren
            mountainbike, dames en heren ebike) en drie kajaks (als je zelf
            dakdragers hebt, kun je de kanodragers daarop overzetten, of als je
            een Volvo hebt, kun je onze dakdragers mét de kanodragers
            gebruiken). Achter in de tuin is een vuurplaats om een vuurtje te
            stoken en waar je heerlijk buiten kunt koken en grillen, in de
            Noorse Esdoorn hangt een schommel, er zijn verschillende hangmatten
            en er is een heuse boomhut. Bij het meertje op tien minuten lopen
            van Kasen ligt een roeiboot.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_1559.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Praktische zaken</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Omdat het altijd handig is dingen vooraf te weten of tijdens je
            verblijf nog eens op kunnen te zoeken, hebben we een praktisch ABC
            gemaakt. Hierin vind je informatie over allerlei onderwerpen. Van
            ‘waar laat ik mijn afval?’, tot ‘hoe werkt de grasmaaier?’ en ‘wat
            doe ik bij problemen met of om het huis?’. Een geprinte versie van
            het praktisch ABC ligt ook in Kasen.
          </p>
          <p>De huis(spel)regels van Kasen lees je hieronder.</p>
          {/* TODO: Add download button */}
          <ImageSection.Button href="#">
            Download praktisch ABC
          </ImageSection.Button>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_8860.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Huis(spel)regels</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Bij bewoning tot en met vier personen bedraagt de vergoeding € 375,
            - per week (in elk seizoen); voor elke extra persoon € 25, - per
            week. Kasen is geschikt voor bewoning met vier tot zes personen.
          </p>
          <p>
            Elke gebruiker van Kasen vragen we tijdens het verblijf (minstens,
            afhankelijk van de duur van het verblijf) één keer het gras te
            maaien.
          </p>
          <p>
            We vragen elke gebruiker aan het einde van het verblijf zelf de
            eindschoonmaak te doen, zodat het huis weer fris klaar staat voor de
            volgende gebruiker. Er is hiervoor een handige checklist, waarop ook
            enkele kleine maar noodzakelijke handelingen staan die verricht
            moeten worden voordat het huis verlaten wordt.
          </p>
          <p>
            Het huis is al jaren rook- en huisdiervrij en dat willen we graag zo
            houden.
          </p>
        </ImageSection.Content>
      </ImageSection>
    </>
  );
};

export default HomePage;
