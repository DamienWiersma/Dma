import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Clipboard,
  Share,
  Dimensions,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { List } from "react-native-paper";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Video, AVPlaybackStatus } from "expo-av";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Infromation extends React.Component {
  render() {
    const questions = [
      
      {
        qestion: "Debby Langereis (Zangtechniek/Coaching)",
        desc: "Debby werd geboren op 15 augustus 1976 te Amsterdam. In haar jeugd ontstond de liefde voor theater en muziek. Ze heeft gespeeld in verschillende (muziek)theaterproducties en dinnershows en zong bij verschillende bands om er achter te komen dat haar hart en kracht ligt bij het doceren. Ze geeft haar leerlingen liever een podium dan zelf op het podium te staan. Debby’s passie is het uitoefenen van haar vak door leerlingen te profileren, stimuleren en ontwikkelen. Na jarenlang in groepsverband lesgegeven te hebben op een theaterschool is de wens geboren om leerlingen nog persoonlijker te gaan coachen en les te geven. Hieruit is in 2012 Zangstudio Debby Langereis ontstaan. Eén van haar grote krachten is om talent te ontdekken in haar leerlingen en dit te ontwikkelen èn een plek en podium te bieden. Ze geeft les aan jong en oud, ervaren en onervaren, maar coacht ook een heel aantal getalenteerde leerlingen die het vak in willen naar een vervolgopleiding toe (Conservatorium Amsterdam, Fontys Tilburg en Codarts Rotterdam). In 2020 ontstond de behoefte om deze liefde naar een groter geheel te trekken. Een school moest er komen, een warme plek waar een team docenten met elkaar dezelfde visie deelt. Elke docent vanuit zijn of haar eigen expertise en unieke inbreng, maar sàmen om al deze krachten te bundelen. Hierin vindt het gedachtegoed van DMA haar oorsprong. Come join us, and, Let’s play…",
        url: "https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Femke (Songwriting)",
        desc: "Fem Green is een singer- songwriter uit Nederland. Ze is 20 jaar oud en studeert op dit moment aan het Conservatorium van Amsterdam. Ze begon op haar tiende met het performen van haar eigen songs, achter haar piano, wat is uitgegroeid tot een carrière in de muziek. Veel van haar songs laten haar kritische blik op zichzelf en de wereld om haar heen zien. Ze vertaalt haar dagelijkse gedachten en gevoelens naar rauwe, aangrijpende songs, die ze transformeert naar producties die de boodschap van haar liedjes ondersteunen. Fem Green is beïnvloed door artiesten als Hiatus Kayoite, Jorja Smith, Jon Bellion en Amy Winehouse maar heeft haar eigen unieke style en sound weten te creëren. Fem maakt zowel kwetsbare als krachtige popsongs met invloeden van R&B, Hiphop en Soul muziek.",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Julia (Songwriting)",
        desc: "Julia Sabaté (21) is een zangeres, violist en songwriter. Ze studeerde klassiek viool aan de Jong Talent Klas van het Conservatorium te Zwolle. Dit combineerde ze met het schrijven van klassieke stukken voor orkest en blazers. Met ‘Pantha Rei’ won ze een Finale prijs van de Nationale Compositie Wedstrijd van het NBE. Naast componeren houdt Julia zich bezig met song writing en producing. Voordat ze aan haar huidige studie aan de Pop Department (Zang) van het Conservatorium van Amsterdam begon, studeerde ze twee jaar Jazz (Zang) in Amsterdam. Met haar Spaanse Roots begint Julia aan haar eigen project genaamd ‘GULIA’. Ook is ze onderdeel van het duo, Micah & Julia, waarmee ze in 2019 naar Nashville vertrokken voor een samen werking met Femke Weidema. (Een Grammy Winnende Songwriter en Producer) 1 EP, met een 2e op op komst later, staat ze te popelen om alles wat ze geleerd heeft de afgelopen jaren over te dragen aan gemotiveerde song writers die manieren zoeken om hun dagelijkse gedachten gang om te zetten in muziek die het beste bij hen past.",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Joris (Basgitaar)",
        desc: "Joris Ram is een 24-jarige bassist geboren en getogen in Amsterdam. In 2021 is hij afgestudeerd aan de popafdeling van het Conservatorium van Amsterdam. “Hoewel ik alleen werd beoordeeld als bassist zou ik mijzelf omschrijven als multi-instrumentalist. Dit gebruik ik voornamelijk in het schrijfproces voor mijn band. Hiervoor speel ik doorgaans alle instrumenten zelf in. Verwacht dus een basleraar die niet alleen gefocust is op de bas, maar naar het grotere plaatje kan kijken. Want vergeet niet: we spelen altijd in dienst van de song”. Je kunt Joris kennen van muzikale projecten/bands zoals Carina Nebula, VALENTINO, Komodo, George & The Rams en Biki Baya. Met veel ervaring als zowel muzikant als docent gaat hij met veel zin aan de slag met enthousiaste basleerlingen van elk niveau. De lessen worden aangepast op jouw vraag en Joris staat altijd open voor input en nieuwe ideeën. “Boek je binnenkort een proefles bij me?”",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Sem (Muziektheorie)",
        desc: "Sem van Gennip (23 jaar) begon rond zijn twaalfde met het maken van muziek. Naast het spelen van basgitaar, drums en keys is hij veel bezig met het maken van arrangementen, met muziektheorie als belangrijkste tool. Momenteel studeert hij bas aan de popafdeling van het Conservatorium van Amsterdam. Sem voelt zich in veel muziekstijlen thuis. Hij speelt basgitaar in de band: “La Nique” een indie-folk band en bas/synthesizer in het project “Susann” In mijn lessen gaan we aan de slag met het uitzoeken van jouw favoriete nummers, het begrijpen van ritmiek, het schrijven van akkoorden progressies, improviseren op jouw instrument, het maken van eigen arrangementen, etc… Of het nou is voor een schoolexamen/toelating of omdat je dieper in het vak wilt duiken.’’ Al ervaring met muziektheorie en vond je het saai, stoffig, mega lastig? Ik beloof je dat het anders kan! Let’s play ",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Nick (Gitaar & Muziekproductie)",
        desc: "Nick Veanz (21 jaar): Een Nederlandse gitarist/song-writer die volgend jaar mag afstuderen aan het Conservatorium van Amsterdam. Muziek is voor mij een zoektocht die nooit stopt. Ik wil elke dag iets nieuws ontdekken en vooral niet bang zijn om iets geks te proberen. Mijn avontuur is ooit begonnen bij de blues waar de gitaar natuurlijk een gigantische rol in speelt. Tegenwoordig maak ik vooral Elektronisch geproduceerde muziek met invloeden uit de Hip Hop, Funk en Disco. Ik ben verliefd geworden op de gitaar, het soleren maar gebruik de gitaar ook vaak om een liedje heel subtiel in te kleuren. Ik heb me de laatste jaren enorm ontwikkeld op het gebied van sound en gear. Buiten het gitaarspelen is met het produceren een nieuwe liefde onstaan die daar perfect op aansluit. ",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Hette (Drums)",
        desc: "Ik vind muziek maken het allermooiste wat er is en daarom staat plezier voorop in mijn lessen! Al 5 jaar mag ik met erg veel plezier lesgeven. Ik draag graag mijn kennis over als ik ergens gepassioneerd over ben en het maakt me ontzettend trots om een leerling progressie te zien maken. We gaan werken aan timing, feel en techniek maar daarnaast werk ik vooral graag aan jouw eigen sound en creativiteit. Heb je zelf iets specifieks waar je aan wil werken? Ik help je daar graag bij. Ik ben (helaas pas) op mijn 13e begonnen met drummen. Het drumstel kwam langs tijdens de muzieklessen op de middelbare en ik was meteen verkocht. Met traditioneel trommelen als technische basis ben ik vanaf mijn 15e in bandjes gaan spelen. Na de eerste paar optredens wist ik zeker dat dit was wat ik moest gaan doen. Na jaren in verschillende bandjes te hebben gespeeld heb ik na de HAVO een jaar gestudeerd aan het Conservatorium in Zwolle waar ik me vooral bezig heb gehouden met Pop/Jazz. Vanaf daar heb ik mijn muzikale reis vervolgd op het Conservatorium van Amsterdam waar ik momenteel 3e jaars student ben aan de Popafdeling. Ik ben momenteel actief in de volgende projecten/bands: Jana Mila, Eelke, Frank Valenza en homelife. Daarnaast schrijf ik eigen songs en doe ik opnames in mijn thuisstudio. Hopelijk tot snel!",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Sweder (Drums & Muziekproductie)",
        desc: "Hoi! Ik ben Sweder Al, en geef drumles bij de DMA. Ik volg al sinds mijn 7e drumlessen, en ben in 2019 begonnen aan mijn studie drums, aan de popafdeling van het Conservatorium van Amsterdam.  Vroeger speelde ik graag mee met liedjes van mijn favoriete bands. Tegenwoordig schrijf ik vooral muziek met mijn eigen bands, waarmee ik ook nummers opneem en veel mee optreed. Creativiteit, techniek en speelplezier staan centraal in mijn lessen. Verder probeer ik mijn lessen zo veel mogelijk af te stellen op de leerling zelf. Ieder persoon zit anders in elkaar en dit uit zich ook in de manier waarop iemand leert en muziek maakt. Afhankelijk van wat je wilt leren, stellen we leerdoelen op en een plan om die doelen te bereiken. Daarnaast zal ik je ook drumnotatie leren lezen als je dat nog niet kan, wat je enorm zal helpen met het lezen van drumboeken en bladmuziek. Hierdoor kan je je als drummer verder ontwikkelen, zowel in de les als individueel. Toch zijn mijn lessen vooral praktijkgericht: muzikaliteit en muziek maken staan voorop in mijn lessen, en ik probeer vooral veel te drummen met mijn leerlingen. Als drummer ben je de ruggengraat van een band. Daarom stimuleer ik mijn leerlingen al vroeg tot het ontwikkelen van een eigen sound en identiteit achter het drumstel. Dit helpt enorm met een eigen inbreng bij bands en het schrijven van muziek. In de lessen zullen we daarom ook aandacht besteden aan het maken van verschillende sounds en het bedenken van partijen voor nummers. Mocht je dat graag willen, dan kan ik je ook veel leren over ‘hybride drums’, het gebruiken van elektronische elementen bij de drumkit, en hoe je dit verder kan uitbreiden met het programma Ableton Live. Aansluitend bij het gedeelte sound, heb ik ook veel ervaring met het opnemen van muziek en het drumstel zelf. Tijdens de lessen kunnen we daarom ook het opnameproces induiken: hoe je microfoons plaatst bij een drumkit, wat voor soort microfoons je gebruikt, hoe je bepaalde drumsounds na kunt maken, et cetera. Ik deel graag mijn kennis en liefde voor drums met anderen en haal er plezier uit om mijn leerlingen te helpen om zich te ontwikkelen tot autonome, originele en passievolle drummers.",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Gino (Drums & Muziekproductie)",
        desc: "Door een charmante persoonlijkheid te combineren met een sterke werkethiek en een onderscheidend geluid, vind ik bij elk project wat ik doe nieuwe manieren om van mijn werk te houden. Ik ben het meest bekend om mijn werk met Feng Suave, een indie-popduo uit Amsterdam, die onverwacht snel naar de wat hogere regionen van de indie-faam steeg. Door de jaren heen heb ik met vele projecten en bands samengewerkt en heb daardoor een sterke diversiteit in genres ontwikkeld. Als internationaal tourend beroepsartiest heb ik een toegewijde en smaakvolle speelstijl, terwijl ik persoonlijk als drummer gek ben op het experimenteren met sounds (SPD’s, Ableton, EFX), het spelen van old-school breakbeats en het live opnemen van drums. Als docent is iedereen bij mij welkom en gaan wij samen een sterke basis leggen in de kunst en wetenschap van het drummen. Het draait allemaal om de groei van het individu, ontdekken waar je ambities liggen, gemotiveerd blijven en het zo leuk mogelijk houden. “The end goal is what you make of it and I’m here to make it happen!”",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Storm (Gitaar)",
        desc: "Storm van ‘t Westeinde (22) is muzikant en tevens gitaardocent op DMA. “Ik speel gitaar sinds mijn 14e en muziek maken is sindsdien mijn grootste passie. Mijn achtergrond ligt vooral in de genres Bluesrock, Metal en Alternatieve rock. Ik speel in de psychedelische hardrockband Gas Giant en de dreampopband Poncho, maar heb in heel veel verschillende bands en genres gespeeld. In 2019 ben ik begonnen aan het conservatorium van Amsterdam en ik geef gitaarles sinds 2016. Het liefst speel ik muziek waar ruimte is voor improvisatie, virtuositeit, maar vooral creativiteit! Dit laat ik daarom ook vaak doorschemeren in mijn lessen.” In de lessen van Storm ligt de focus op het combineren van vaardigheid, creativiteit en plezier. Het is de bedoeling dat je iedere les weer uitgedaagd wordt en geprikkeld wordt met nieuwe technieken, genres en songs. “Ik vind het spelen van muziek nog steeds leuker en leuker worden en ik weet zeker dat mijn leerlingen diezelfde ervaring zullen krijgen.” ",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Pascal (Gitaar)",
        desc: "Ik ben Pascal (29) en ben in 2020 afgestudeerd aan het Conservatorium van Amsterdam. Je kunt mij kennen van deze bands/artiesten: Áslaug, Elsa Birgitte Bergman, Sam & Julia, LAKSHMI en van Roxeanne Hazes Als muzikant ben ik vooral actief als gitarist: gitaar is mijn eerste stem. Maar ik werk ook veel als musical director. Dat houdt in dat ik bedenk hoe nummers van de plaat naar live vertaald gaan worden en hoe de sets vorm krijgen. Ook ben ik veel actief als songwriter/arrangeur: ik heb een goed besef van harmonieën, melodieën en songstructuren. Balancerend op de grens van frisheid en toegankelijkheid. Op DMA zal ik vooral als docent actief zijn. Het doel en de behoefte van de leerling staat hierin centraal. Vanuit mijn ervaring en kennis hoop ik iedere leerling naar een nieuw en hoger niveau te brengen. ",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Jeroen (Toetsen)",
        desc: "Jeroen Wals is een vrolijke muzikant/componist/docent. Als tienjarig mannetje ontdekte hij de piano en was meteen verkocht. Nog voor hij les had schreef hij al liedjes en speelde op gehoor mee met radio. Inmiddels heeft hij Pop/Sessies Toetsen gestudeerd op het Conservatorium in Haarlem maar studeerde ook Docent Theater in Amsterdam. Deze unieke combinatie maakte hem daarom ook enorm ervaren als muzikant binnen de theaterwereld. Hij componeert of speelt dan ook regelmatig bij theatervoorstellingen. Verder begeleid hij vaak solozang maar ook koren op piano en heeft hij toetsen gespeeld in meerdere bands waaronder een bigband. Hoewel de meeste mensen Jeroen zullen (her)kennen van zijn vrolijke deuntjes is hij ook dol op funky ritmes en bijvoorbeeld bluesschema’s. Dus: Pop, Soul, Rock, Jazz en Kleinkunst; Op vele vlakken en stijlen heeft hij wel een graantje meegepikt en hij wilt niks liever dan zijn kennis en ervaring delen met nieuw talent.",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "Levi (Toetsen)",
        desc: "Levi Boon (22) is een muzikante uit Amsterdam. Ze studeert momenteel zang en piano aan de pop-afdeling van het Conservatorium van Amsterdam. Naast studeren is Levi bezig met een project onder haar eigen naam. Dit project bestaat uit eigen geschreven en geproduceerde songs, geïnspireerd op Nick Drake en Laura Marling. Ook speelt ze in de Nederlandstalige poëtische popband OOIT. Naast muzikante is ze ook docente. In haar lessen ligt de nadruk op de creatieve én technische ontwikkeling van de leerling. Samen met jou maakt ze een plan waarin jouw eigen leerdoelen helder worden. Onderdelen kunnen zijn; pianotechnieken zoals vingerzetting, dynamiek en repertoirekennis, maar de nadruk kan ook juist liggen op de juiste begeleiding van jouw eigen songs of een cover. Ook kan Levi je coachen met het live spelen voor publiek, of je helpen met de voorbereiding voor een vervolgopleiding in de muziek. “Ik vind het belangrijk dat mijn leerlingen hun muzikale gevoel volgen en doen wat ze plezier geeft.” ",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ];
    return (
      <View style={styles._container}>
        <View
          style={{
            borderWidth: 0,
            borderColor: theme.grey,
            borderRadius: 0,
            overflow: "hidden",
            //margin: 5,
          }}
        >
          <Video
            // ref={video}
            style={styles.video}
            source={{
              uri: "https://download.samplelib.com/mp4/sample-5s.mp4",
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            shouldPlay
            // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
        <View style={styles._inner_layer}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
            {questions.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles._question_view}
                  activeOpacity={0.7}
                >
                  <Image source={{ uri: val.url }} style={styles._avatar} />
                  <View style={styles._desc_view}>
                    <Text style={styles._q}>{val.qestion}</Text>
                    <Text style={styles._desc} numberOfLines={3}>
                      {val.desc}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* recently scanned data */}
      </View>
    );
  }
}

export default Infromation;

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "white",
    elevation: 4,
  },
  video: {
    alignSelf: "center",
    width: windowWidth,
    height: 200,
  },
  _question_view: {
    flex: 1,
    // borderWidth: 1,
    margin: 10,
    height: 130,
    borderRadius: 10,
    borderColor: theme.black,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    backgroundColor: theme.white,
   // borderWidth: 2,
    borderColor: theme.grey,
    borderRadius: 20,
  },
  _inner_layer: {
    flex: 1,
  },
  _avatar: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    borderRadius: 100,
  },
  _desc_view: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    flex: 1,
  },
  _q: {
    fontFamily: theme.bold,
  },
  _desc: {
    fontFamily: theme.medium,
    flex: 1,
    marginTop: 10,

  },
});