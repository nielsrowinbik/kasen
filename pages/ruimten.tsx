import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import StickyNavigation from 'components/StickyNavigation';

const SpacesPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection center fullHeight={false}>
        <HeroSection.Img src="/assets/images/IMG_5770.jpg" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Titel?</HeroSection.Title>
            <HeroSection.Subtitle>Ondertitel?</HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/P1050927.JPG" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Badkamer</ImageSection.Title>
            <ImageSection.Subtitle>Klein maar compleet</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            De badkamer is voorzien van douche, wastafel, toilet en wasmachine.
            De ruimte wordt elektrisch verwarmd. In de badkamer bevinden zich
            ook de boiler en de waterpomp. De laatste is berucht om het geluid
            dat hij maakt, maar alles went, zullen we maar zeggen.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_6080.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Keuken</ImageSection.Title>
            <ImageSection.Subtitle>
              Meer dan een plek om te koken
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            De keuken is een heerlijke plek om te eten, thee te drinken of
            gewoon aan de gezellige grote houten tafel te zitten met een boek of
            om de vogels in de tuin te bespieden. De keuken is van voldoende
            servies en keukengerei voorzien voor vier tot zes personen. De
            keuken is uitgerust met een keramisch fornuis, elektrische oven,
            magnetron, koel-vriescombinatie, waterkoker, koffiezetapparaat,
            broodrooster en broodbakmachine.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_6067.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Woonkamer</ImageSection.Title>
            <ImageSection.Subtitle>
              Knusse zithoek rondom de houtkachel
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            In de woonkamer kun je heerlijk relaxen. Als het buiten koud is,
            zorgt de houtkachel voor warme gezelligheid. Er zijn spelletjes en
            puzzels, boeken en tijdschriften, voor elk wat wils. Voor de
            liefhebbers van bewegend beeld is er een tv, maar deze kan alleen
            gebruikt worden om dvd’s te kijken, we hebben geen antenne of kabel.
            Dvd-speler en een ruime voorraad dvd’s zijn aanwezig.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_6073.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Woonkamer</ImageSection.Title>
            <ImageSection.Subtitle>
              Fijne schrijfplek zonder tv
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            De woonkamer is groot en heeft behalve de zithoek rondom houtkachel
            en tv ook een hoekje waar je heerlijk aan tafel kunt zitten, om wat
            te schrijven, te tekenen, te handwerken of (als het echt nodig is)
            te werken. De oude schommelstoel en het Deens design daybed zijn ook
            fijne plekjes om je lekker op te rollen met een goed boek.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/P1050092.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Slaapkamer 1</ImageSection.Title>
            <ImageSection.Subtitle>De enige met deur</ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            De enige echte kamer op de bovenverdieping is deze kleine slaapkamer
            met twee eenpersoonsbedden, die natuurlijk ook prima tegen elkaar
            aan geschoven kunnen worden. De handige ladekast is te gebruiken
            voor eigen spullen, zodat niet uit een tas geleefd hoeft te worden.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_6132.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Slaapkamer 2</ImageSection.Title>
            <ImageSection.Subtitle>
              Tweepersoonsbed onder schuin dak
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Op de grote overloop zijn verschillende slaapplekken. Rechts van de
            trap staat een (extra lang) tweepersoonsbed in een gezellige nis
            onder het schuine dag. Een kamerscherm zorgt voor een beetje extra
            privacy. Ook in deze ruimte kan een ladekast gebruikt worden voor
            eigen spullen. Voor dit bed zijn extra lange hoeslakens aanwezig.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/IMG_6100.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>Slaapkamer 3</ImageSection.Title>
            <ImageSection.Subtitle>
              Verstopt achter een kamerscherm
            </ImageSection.Subtitle>
          </ImageSection.Header>
          <p>
            Links van de trap, achter een kamerscherm, staat een eenpersoonsbed.
            De ruimte heeft de uitstraling van een mini slaapkamer: lekker onder
            het schuine dak en door het kamerscherm aan het zicht onttrokken. In
            de bergruimte, eveneens op de overloop, staat een zesde bed, dat
            naast dit bed geplaatst kan worden als er nog een extra slaapplaats
            nodig is. Op aanvraag is er een houten kinderbedje beschikbaar.
          </p>
        </ImageSection.Content>
      </ImageSection>
    </>
  );
};

export default SpacesPage;
