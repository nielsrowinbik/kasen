import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import StickyNavigation from 'components/StickyNavigation';

const AreaPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection center fullHeight={false}>
        <HeroSection.Img src="/assets/images/omgeving-panorama.jpg" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Omgeving Kasen</HeroSection.Title>
            <HeroSection.Subtitle>Natuur en meer</HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_8846.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Wandelen en fietsen</ImageSection.Title>
            <ImageSection.Subtitle>Natuur en meer</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            In de directe omgeving van het huis, maar ook op kleine en grotere
            afstand van het huis zijn diverse natuurgebieden met gemarkeerde
            wandelingen. Ze variëren in lengte, maar zijn allemaal even
            prachtig. De recentelijk in de omgeving van Fengersfors uitgezette
            wandelroutes Vandra i Ronjaland (ViR) zijn echt een aanrader. In het
            huis ligt een map met een ruime selectie aan wandelroutes. Op de
            fiets kun je een wat groter gebied verkennen, de meeste wegen zijn
            zo rustig dat je er prima kunt fietsen en kies je voor een
            gruisweggetje, dan kom je op de mooiste plekjes.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_5216.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Kajakken en kanoën</ImageSection.Title>
            <ImageSection.Subtitle>Eindeloos veel water</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            In de hele provincie Dalsland zijn ontzettend veel meren. Ook in de
            omgeving van Fengersfors vind je enkele prachtige meren, zoals
            Knarrbysjön in het dorp, Ärr bij Fröskog en Edslan bij Edleskog. Er
            ligt een boekje met kanoroutes in Kasen. Gebruik de kajaks uit de
            schuur om in stilte de meren te verkennen en in de vroege ochtend of
            in de avondschemer samen met een bever te peddelen. Of huur een
            kajak of Canadese kano bij{' '}
            <a href="https://www.silverlake.se" target="_blank">
              Silverlake
            </a>
            . Een mooie plek om te kanoën, en ze verhuren er ook mountainbikes
            in combinatie met leuke GPS-fietsroutes.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/DSC_2999.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Stad en cultuur</ImageSection.Title>
            <ImageSection.Subtitle>
              Dichtbij en wat verder weg
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Voor wie af en toe eens wat anders wil dan alleen natuur is er ook
            voldoende te beleven. Bengstfors en Åmål zijn aardige plaatsen om
            boodschappen te doen en wat winkels te bekijken. Karlstad is wat
            verder rijden, maar een leuke middelgrote stad met onder andere het{' '}
            Lars Lerin museum (
            <a href="https://sandgrund.org" rel="noreferrer" target="_blank">
              sandgrund.org
            </a>
            ). Ook in Bengstfors (
            <a
              href="https://www.gammelgarden.com"
              rel="noreferrer"
              target="_blank"
            >
              www.gammelgarden.com
            </a>
            ), Dals-Rostock (
            <a href="https://www.rostock.se" rel="noreferrer" target="_blank">
              www.rostock.se
            </a>
            ), Mellerud (
            <a
              href="https://mellerudsmuseum.com/"
              rel="noreferrer"
              target="_blank"
            >
              mellerudsmuseum.com
            </a>
            ) en Upperud (
            <a
              href="https://www.dalslandskonstmuseum.se"
              rel="noreferrer"
              target="_blank"
            >
              www.dalslandskonstmuseum.se
            </a>
            ) zijn verschillende musea die de moeite waard zijn.
          </p>
          <p>
            En niet te vergeten: <i>Not quite</i> in Fengersfors. In deze oude
            papierfabriek hebben verschillende kunstenaars hun intrek gedaan. Er
            is een café met heerlijke zelfgebakken taarten en een kleine
            bakkerij waar in een steenoven heerlijk brood wordt gebakken (
            <a href="https://www.notquite.se" rel="noreferrer" target="_blank">
              www.notquite.se
            </a>
            ).
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_1026.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Uitstapjes</ImageSection.Title>
            <ImageSection.Subtitle>Een kleine selectie</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            In Håverud kun je zien hoe het Dalslandkanaal door middel van een
            reeks sluizen het grote hoogteverschil tussen de meren overbrugt (
            <a
              href="https://www.dalslandskanal.se"
              rel="noreferrer"
              target="_blank"
            >
              www.dalslandskanal.se
            </a>
            ). In dit kleine, maar toeristische plaatsje bevinden zich ook een
            glasblazerij (
            <a
              href="http://www.dalslandsglashytta.se"
              rel="noreferrer"
              target="_blank"
            >
              www.dalslandsglashytta.se
            </a>
            ), een leuk cultuurhistorisch museum (
            <a
              href="http://www.kanalmuseet.se"
              rel="noreferrer"
              target="_blank"
            >
              www.kanalmuseet.se
            </a>
            ) en een kaboutermuseum (
            <a
              href="http://www.nordiskatomtemuseet.com"
              rel="noreferrer"
              target="_blank"
            >
              www.nordiskatomtemuseet.com
            </a>
            ).
          </p>
          <p>
            Bij Dalslands Aktiviteter kun je allerlei outdoor activiteiten
            boeken (
            <a
              href="https://www.dalslandsaktiviteter.se"
              rel="noreferrer"
              target="_blank"
            >
              www.dalslandsaktiviteter.se
            </a>
            ) en bij Dalslands Moose Ranch in Ed kun je elanden zien, aanraken
            en er over leren: heel erg leuk (
            <a
              href="https://www.dalslandsmooserance.se"
              rel="noreferrer"
              target="_blank"
            >
              www.dalslandsmooserance.se
            </a>
            )! Joytrail verhuurt kano&apos;s en dressiner waarmee je een
            fietstocht over een oude niet meer in gebruik zijnde spoorlijn kunt
            maken (
            <a href="https://www.joytrail.se" rel="noreferrer" target="_blank">
              www.joytrail.se
            </a>
            ).
          </p>
          <p>
            In Fengersfors is er een heerlijke pluktuin waar je zelf een boeket
            voor op de keukentafel kunt plukken of een bloemschikworkshop kunt
            volgen (
            <a href="https://www.frobacken.se" rel="noreferrer" target="_blank">
              www.frobacken.se
            </a>
            ).
          </p>
          <p>
            En er is nog veel meer te beleven: een map met informatie en tips
            vind je in het huis.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/d0941a14-d4e1-4204-90c7-35c562746f7f.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Rondom Kasen</ImageSection.Title>
            <ImageSection.Subtitle>
              Een waar vogelparadijs
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            In de tuin en in de directe omgeving van Kasen valt van alles te
            zien als het om dieren gaat. We houden al sinds 2014 een
            waarnemingenboekje bij. Daarin noteren we de dieren die we dichtbij
            Kasen zien. Veel van onze gasten hebben ook hun waarnemingen
            genoteerd. Dat heeft tot een mooi overzicht geleid waaruit wel
            blijkt dat Kasen in een waar vogelparadijs staat: we hebben in de
            loop der jaren maar liefst 44 verschillende vogelsoorten gezien. In
            het overzicht kun je zien welke soorten en de infographic toont
            welke andere dieren we zoal hebben waargenomen.
          </p>
          <div className="flex space-x-3">
            <ImageSection.Button href="/assets/files/waarnemingen vogels 2014-2021.pdf">
              Bekijk vogeloverzicht
            </ImageSection.Button>
            <ImageSection.Button href="/assets/files/infographic 2014 - 2021.pdf">
              Bekijk infographic
            </ImageSection.Button>
          </div>
        </ImageSection.Content>
      </ImageSection>
    </>
  );
};

export default AreaPage;
