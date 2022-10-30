// Deze pagina bevat:
// - contactformulier?
//
// Design inspiratie: http://themes.opendept.net/hemma-elegant/about-us/

import HeroSection from 'components/HeroSection';
import ImageSection from 'components/ImageSection';
import StickyNavigation from 'components/StickyNavigation';

const ContactPage = () => {
  return (
    <>
      <StickyNavigation />
      <HeroSection fullHeight={false}>
        <HeroSection.Img src="/assets/images/IMG_4101.jpg" />
        <HeroSection.Content>
          <HeroSection.Header>
            <HeroSection.Title>Over Kasen</HeroSection.Title>
            <HeroSection.Subtitle>
              Historische feiten en weetjes
            </HeroSection.Subtitle>
          </HeroSection.Header>
        </HeroSection.Content>
      </HeroSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/luchtfoto kasen.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>De naam Kasen</ImageSection.Title>
          </ImageSection.Header>
          <p>
            In Zweden, maar ook in Noorwegen, hebben veel kleine boerderijen en
            plaatsen namen die eindigen op -rud (-red/-ryd/-ryda/-röd), zoals
            Mellerud. In het Zweeds staat –rud voor ’röjd mark’ en dat betekent
            ‘ontgonnen bodem’. Deze toevoeging geeft aan dat op zo’n plaats land
            vrijgemaakt is om er landbouwgrond van te maken. Zo’n plaats kreeg
            vaak de naam van degene die het land had vrijgemaakt, bijv.
            Mortensrud werd vrijgemaakt door Morten. Plaatsnamen eindigend op
            –rud zijn in de Middeleeuwen of later ontstaan.
          </p>
          <p>
            Een ‘kas’ of ‘kase’ is een variant op de aanduiding –rud en geeft
            wat preciezer aan dat het land is vrijgemaakt van bosjes en
            struikgewas. Kasen (in Dalslands dialect Kasa) is voor het kleine
            huis met zijn ligging op een open plek in het bos dus een prima
            passende naam.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/20190207_140836 bew.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>De vroege jaren</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Kasen is gebouwd aan het einde van de 19e eeuw. Het precieze jaar is
            onbekend, maar op een oude landkaart{' '}
            {/* TODO: een link om te
            kunnen doorklikken naar die kaart? */}{' '}
            van Fröskog uit 1890-1897 staat Kasen al ingetekend. Uit de
            kerkarchieven van Fröskog blijkt dat de familie Eriksson er in 1901
            woonde. Zij hebben Kasen tot 1926 in bezit gehad. Het huis bestond
            toen alleen uit het gedeelte dat nu de huiskamer is en was lager. De
            voordeur zat op de plaats waar nu de tuindeur is gemaakt. Sinds de
            verbouwing in 1984 is er op die plaats geen deur geweest, deze is in
            2010 (bij toeval) weer op die plaats gemaakt.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/20190330_104201 bew2.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>De eerste verbouwing</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Na het vertrek van Maja Kajsa en Kristina Eriksson in 1926, werd
            Magnus Jonannesson in datzelfde jaar de eigenaar van Kasen. Hij
            verbouwde in 1928-1929 het huis grondig. Hij verhoogde het dak,
            bouwde dwars op het oorspronkelijke huis een deel aan, dit deel
            vormde toen en nu nog steeds de keuken. Op de bovenverdieping maakte
            hij een zolderkamer voor de kinderen. Die kon je via de buitenkant
            van het huis bereiken. Ook was er op de bovenverdieping één kleine
            slaapkamer, dezelfde die er nu nog is. Dat was de ouderslaapkamer.
            Op de plaats van de huidige trap bevond zich een voorraadkast.
          </p>
          <p>
            Johannes en zijn vrouw Mathilda hebben het huis in 1928 betrokken en
            kregen er 10 kinderen. Mathilda heeft er tot haar dood in 1955
            gewoond.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/20190125_125509 bew.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>De schuur</ImageSection.Title>
          </ImageSection.Header>
          <p>
            Magnus Johannessen heeft de schuur in 1929-1930 gebouwd. Deze was
            oorspronkelijk langer dan de huidige schuur: het gedeelte met de
            betonnen vloer bevond zich ook binnen. In dit achterste gedeelte van
            de schuur werden enkele koeien gehouden. De betonnen bak lag toen
            ook al buiten de schuur. In het middelste gedeelte van de schuur
            werden matten en kleden gemaakt. In het voorste gedeelte van de
            schuur werd geschoten wild, waaronder elanden, aan een haak aan het
            dak opgehangen en gevild.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/20190125_125324 bew.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>
              Leegstand en verbouwing tot jachthuis
            </ImageSection.Title>
          </ImageSection.Header>
          <p>
            Na de dood van Mathilda in 1955 zijn het huis en de grond in het
            bezit gekomen van de familie Fenger Krog, de familie die de
            papierfabriek bezat en het dorp Fengersfors (voorheen Lisefors) haar
            naam gaf. Via allerlei erfverdelingen heeft het huis nog een aantal
            eigenaren gehad, maar het is onduidelijk of er iemand gewoond heeft.
          </p>
          <p>
            In 1973 heeft Mats Andersson de grond met het huis gekocht en
            tijdens zijn eigenaarschap heeft Kasen zeker leeg gestaan. In 1984
            werd het huidige stuk grond met het huis (Flåtungebyn 1:13) verkocht
            aan Rune Hake, die het in slechte staat verkerende huis volledig
            renoveerde en het daarna gebruikte als jachthuis. Tijdens deze
            verbouwing is ook de huidige badkamer aangebouwd.
          </p>
        </ImageSection.Content>
      </ImageSection>
      <ImageSection>
        <ImageSection.Img src="/assets/images/DSC_1275.jpg" />
        <ImageSection.Content>
          <ImageSection.Header>
            <ImageSection.Title>
              Van jachthuis tot vakantiewoning
            </ImageSection.Title>
          </ImageSection.Header>
          <p>
            Rune Hake verkocht Kasen in 2000 aan de Noor Jan Lier. Hij heeft
            geen grote aanpassingen aan het huis gedaan, de enige opvallende is
            de zijdeur die weer op de plaats van de oorspronkelijke deur is
            gemaakt. Jan verhuurde Kasen in de zomer via Novasol. Zo zijn wij er
            terechtgekomen en de rest is geschiedenis, want sinds september 2013
            zijn wij de gelukkige eigenaren van Kasen.
          </p>
          <p>
            Kasen is een warm, knus en sfeervol huis en van alle gemakken
            voorzien. Het huis ligt op een groot stuk grond (4000 m2) midden in
            het bos. De dichtstbijzijnde buurwoning is op zo’n 700 m en op
            ongeveer een kilometer afstand begint de bebouwing van het dorp
            Fengersfors, waarvan het centrum op iets meer dan 2 km van Kasen
            ligt. Fengersfors ligt in de provincie Dalsland en heeft ongeveer
            350 inwoners. Op 10 minuten lopen vanaf het huis ligt een klein meer
            (Rysstjärn); daar hebben we een aanlegsteiger en een roeiboot.
          </p>
        </ImageSection.Content>
      </ImageSection>
    </>
  );
};

export default ContactPage;
