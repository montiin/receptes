function mainitRecepti() {
    let teksts = "";
    let links = ""; 
    let title = ""; 

    const recipes = [
        {
            title: "Šašlika kebabs ar dārzeņiem",
            text: "Sastāvdaļas: 400 g šašliks 200g mocarellas siers, 1 iepakojums arābu maizes, 6 šampinjoni, 1 kabacis, 1 paprika, 1 tomāts, 2 sarkanie sīpoli, 2 daivas ķiploks, pus citrons, 1 zars svaigs rozmarīns, Čilī pēc garšas. Pagatavošana 30 min Vispirms gatavo dārzeņu marinādi: Smalki sakapā ķiploku un rozmarīnu, pievieno citrona sulu un čili. Dārzeņus sagriež lielākos gabalos un pārlej ar marinādi. Pēc pāris minūtēm var grilēt. Uz grila izcep arī šašliku. Gatavo šašliku un dārzeņus sagriež mazos gabalos. Saplūkā mocarelllas sieru. Šašlika un dārzeņu gabalus pilda arābu maizē. Pievieno arī tomātu mērci un sieru. Piepildītās maizes uzsilda uz grila nelielā karstumā 1-2 min. Pasniedz siltu.",
            link: "https://receptes.tvnet.lv/recepte/19850-saslika-kebabs-ar-darzeniem",
            linkText: "https://receptes.tvnet.lv/recepte/19850-saslika-kebabs-ar-darzeniem"
        },
        {
            title: "Banānmaize ar rozīnēm",
            text: "Sastāvdaļas: 450 g banāna mīkstuma (3-4 banāni, pēc iespējas gatavāki) + 1 banāns virspusei 2 olas, 70 g rozīņu, 60 g brūnā cukura, 80 g mango vai ogu smalkā mušļa, 70 g mandeļu miltu, 50 g kviešu miltu, 3 ēd. k. eļļas, 1 tējk. cepamā pulvera, 1 šķipsna/s sāls, Pagatavošana 80 min Rozīnes ber bļodiņā, aplej ar karstu vārītu ūdeni un nedaudz izmērcē (kamēr gatavo pārējās sastāvdaļas). Banānus (izņemot virspusei paredzēto) saspaida ar dakšiņu, tad samaisa ar sakultām olām, eļļu, cukuru un šķipsniņu sāls. Citā traukā samaisa visus miltu veidus un cepamo pulveri. Tad pa daļām pievieno un samaisa ar banānu masu. Beigās iemaisa rozīnes. Mīklu lej garenā cepamformā, kas izklāta ar cepamo papīru. Virspusē liek gareniski uz pusēm sagrieztu banānu.Cep 175° sakarsētā cepeškrāsnī aptuveni 45 - 50 minūtes, gatavību pārbaudot ar koka irbulīti, ja tas nāk ārā sauss, banānmaize gatava. Ņem ārā no krāsns, 10 minūtes atdzesē formā, tad ņem no tās ārā, ļauj atdzist pilnībā. Sagriež un bauda!",
            link: "https://receptes.tvnet.lv/recepte/23481-bananmaize-ar-rozinem",
            linkText: "https://receptes.tvnet.lv/recepte/23481-bananmaize-ar-rozinem"
        },
        {
            title: "Picu trijstūrīši",
            text: "Sastāvdaļas: 1 iepakojums lavaša, 3 tomāti, 2 sīpoli, Kaperi, Olīvas, Saldā tomātu mērce, Kaltēts rozmarīns, Pagatavošana 30 min Visas sastāvdaļas samaļ līdz viendabīgai konsistencei, tā var būt gan ar nelieliem kraukšķīgiem gabaliņiem, gan krēmīga. Lavašu sagriež četrās daļās, liek uz plāts, virsū klāj tomātu mērci. Tomātus un sīpolus sagriež plānās ripiņās un kārto uz picas, virsū klāj sieru, pievieno kaperus un uz pusēm pārgrieztas olīvas. Pārkaisa ar rozmarīnu. Krāsni sakarsē līdz 180 grādiem, picas cep 10-15 minūtes, kamēr garoziņa kļuvusi brūna.",
            link: "https://receptes.tvnet.lv/recepte/24080-picu-trijsturisi",
            linkText: "https://receptes.tvnet.lv/recepte/24080-picu-trijsturisi"
        }
    ];
    
    let recipe = recipes[Math.floor(Math.random() * 3)];

// ŠI LINIJA DARA VISU(lauj visam stradat, nejautaat):
document.getElementById("joks").innerHTML = "<h3>" + recipe.title + "</h3>" + "<p>" + recipe.text + "</p>" + "<a href='" + recipe.link + "'>" + recipe.link + "</a>";

}
