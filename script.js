/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// PARTE1

const jobFinder = function (jobPosition, location) {    //creo una funzione che accetta due parametri che saranno i due input di ricerca
  const searchResult = []                               //creo l'array vuoto che successivamente conterrà i risultati della ricerca
  for (let i=0; i<jobs.length; i++) {                   //imposto il ciclo for per entrare nell'array jobs e cercare dentro ogni oggetto
    let arrayExtraction = jobs[i];                      //ad ogni iterazione di i vado a sovrascrivere l'oggetto di jobs in posizione i dentro la variabile creata
    if (arrayExtraction.title.toLowerCase().includes(jobPosition.toLowerCase()) && arrayExtraction.location.toLowerCase().includes(location.toLowerCase())) {   //imposto la condizione di ricerca
      searchResult.push(arrayExtraction)                //inserisco ogni risultato buono dentro l'array pre-inizializzato
    }
  }
  finalObj = {                         //restituisco l'oggetto contenente due parametri: l'array dei risultati e il conteggio 
    results: searchResult,
    count: searchResult.length
  }
  for (i=0; i<searchResult.length; i++) {       //imposto un ciclo for per entrare nell'array dei risultati
    document.querySelector(".bulletPointList").innerHTML += "<li>" + finalObj.results[i].title + "<br>" + finalObj.results[i].location + "</li>"      // creo le liste non ordinate e indico i risultati da stampare
  }
  document.querySelector(".counter").innerHTML = "Risultati trovati: " + finalObj.count     //stampo anche il conteggio in un altro paragrafo
  document.querySelector("#description").value = ""           //svuoto i campi di input per rendere più semplice eseguire una nuova ricerca
  document.querySelector("#location").value = ""
}

// let finalResult = jobFinder ("customer", "us")     // lascio il richiamo della funzione commentato così da non eseguirla durante la Parte 2
// console.log(finalObj)

// PARTE 2

  // 

const searchFnc = function () {           //creo la funzione che viene richiamata dall'event listener
  document.querySelector(".bulletPointList").innerHTML = ""       //svuoto la lista dei risultati stampati per poter inserire quelli della nuova ricerca
  document.querySelector(".counter").innerHTML=""                 //svuoto il contatore risultati stampati per poter inserire quelli della nuova ricerca (utile se dopo una ricerca con entrambi i campi compilati se ne fa una senza un campo)
  const jobPosition = document.querySelector("#description").value      //assegno al primo parametro della funzione jobFinder il vaolre dell'input con la job description
  const location = document.querySelector("#location").value            //assegno al secondo parametro della funzione jobFinder il vaolre dell'input con la location
  if (jobPosition.trim().length > 0 && location.trim().length > 0) {      //controllo che entrambi gli input non siano vuoti o composti da soli spazi
    jobFinder (jobPosition, location)                       // se i campi non sono vuoti richiamo la funzione dei ricerca
    }
  else {                                // in alternativa mando un alert
    alert("Please provide all the information required")
  }
}
document.querySelector("#searchButton").addEventListener("click", searchFnc)        //creo l'event listener per recepire l'evento click sul bottone configurato in HTML e richiamo la funzione associata