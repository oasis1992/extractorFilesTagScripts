
    $("img.lazy").lazyload({ effect: "fadeIn", threshold: 200 });
    console.timeEnd('Test');

    var lstAdverts = [{data:[{AdvertId:"6237104",Title:"Apartamento en Arriendo - Bogotá Chicó Navarra",Address:"CALLE 103 A  19 A -53",PhotoUrl:"2021/04/07/6237104/apartamento-arriendo-cundinamarca-bogota-350183794_m.jpg",ClientName:"Consuelo de la Vega y Cia",ClientId:"269624",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"5330804",Title:"Apartamento en Arriendo - Bogotá Chapinero Alto",Address:"Carrera 2  62 A 25",PhotoUrl:"2020/02/21/5330804/apartamento-arriendo-cundinamarca-bogota-345248733_m.jpg",ClientName:"ALFONSO  SAENZ CUELLAR",ClientId:"385784",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6250131",Title:"Apartamento en Arriendo - Bogotá Los Rosales",Address:"TRANS 1 ESTE  68 - 50",PhotoUrl:"2021/04/12/6250131/apartamento-arriendo-cundinamarca-bogota-351356553_m.jpg",ClientName:"Gestiones Inmobiliarias",ClientId:"102693",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6027884",Title:"Apartamento en Arriendo - Bogotá Teusaquillo",Address:"Calle 28a16a-22",PhotoUrl:"2021/01/22/6027884/apartamento-arriendo-cundinamarca-bogota-330517855_m.jpg",ClientName:"Diana Sanchez",ClientId:"78564",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6248195",Title:"Apartamento en Arriendo - Bogotá Gran América",Address:"Carrera 31A # 25 - 25",PhotoUrl:"2021/04/11/6248195/apartamento-arriendo-cundinamarca-bogota-351483661_m.jpg",ClientName:"Gama Consulting SAS",ClientId:"416168",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6230621",Title:"Apartamento en Arriendo - Bogotá Florida Blanca",Address:"CALLE 69 A   93 A -35",PhotoUrl:"2021/04/05/6230621/apartamento-arriendo-cundinamarca-bogota-349606716_m.jpg",ClientName:"andrea Penagos",ClientId:"2080411",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6251107",Title:"Apartamento en Arriendo - Bogotá Hayuelos",Address:"Carrera 96 F  22K - 40",PhotoUrl:"2021/04/12/6251107/apartamento-arriendo-cundinamarca-bogota-351483158_m.jpg",ClientName:"Martha Corredor",ClientId:"366410",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"5872681",Title:"Apartamento en Arriendo - Bogotá Cedritos",Address:"Calle 145 No. 7F-09",PhotoUrl:"2020/11/10/5872681/apartamento-arriendo-cundinamarca-bogota-351483136_m.jpg",ClientName:"Lozano Villegas Y Cia S en C",ClientId:"1758391",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6248317",Title:"Apartamento en Arriendo - Bogotá Parque Central Bavaria",Address:"Calle 31 # 13A - 51",PhotoUrl:"2021/04/11/6248317/apartamento-arriendo-cundinamarca-bogota-351483116_m.jpg",ClientName:"Gama Consulting SAS",ClientId:"416168",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6077178",Title:"Apartamento en Arriendo - Bogotá LOS REYES III APTO 203",Address:"Calle 162 # 18A - 88",PhotoUrl:"2021/02/08/6077178/apartamento-arriendo-cundinamarca-bogota-351482901_m.jpg",ClientName:"Inmobiliaria Gonzalez Amaya Ltda",ClientId:"301537",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6251073",Title:"Apartamento en Arriendo - Bogotá GARCES NAVAS",Address:"CALLE 75   105D- 04",PhotoUrl:"2021/04/12/6251073/apartamento-arriendo-cundinamarca-bogota-351482357_m.jpg",ClientName:"Inmobiliaria TuCasa.com",ClientId:"213602",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6069822",Title:"Apartamento en Arriendo - Bogotá Cedritos Usaquén",Address:"Calle 144 # 9 - 30 Apto 504 Conjunto Residencial Scala 27 Garaje 38 Deposito 40",PhotoUrl:"2021/02/05/6069822/apartamento-arriendo-cundinamarca-bogota-351482189_m.jpg",ClientName:"Orjuela & Cía Ltda - Arriendos",ClientId:"28762",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"5792716",Title:"Apartamento en Arriendo - Bogotá SUBA",Address:"CARRERA 111A   148- 88",PhotoUrl:"2020/10/10/5792716/apartamento-arriendo-cundinamarca-bogota-351481275_m.jpg",ClientName:"Rafael Angel H y Cia SAS.",ClientId:"29010",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6025420",Title:"Apartamento en Arriendo - Bogotá Los Rosales",Address:"Carrera 1a 76a-36, Bogotá",PhotoUrl:"2021/01/21/6025420/apartamento-arriendo-cundinamarca-bogota-351481099_m.jpg",ClientName:"Inmobiliaria Piedad Mejia SAS",ClientId:"29283",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6054219",Title:"Apartamento en Arriendo - Bogotá Santa Lucía",Address:"Calle 42 A sur No. 19-11",PhotoUrl:"2021/02/01/6054219/apartamento-arriendo-cundinamarca-bogota-351480414_m.jpg",ClientName:"Inmobiliaria Colombia Ltda",ClientId:"191905",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6138902",Title:"Apartamento en Arriendo - Bogotá CAMINOS DE IBIZA APTOINT 4",Address:"Carrera 13B # 161 - 50",PhotoUrl:"2021/03/01/6138902/apartamento-arriendo-cundinamarca-bogota-351480159_m.jpg",ClientName:"Inmobiliaria Gonzalez Amaya Ltda",ClientId:"301537",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6121533",Title:"Apartamento en Arriendo - Bogotá Santa Bárbara",Address:"Carrera 17A 122-62",PhotoUrl:"2021/02/23/6121533/apartamento-arriendo-cundinamarca-bogota-351479191_m.jpg",ClientName:"METRO 51 INMOBILIARIA",ClientId:"2897502",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6246127",Title:"Apartamento en Arriendo - Bogotá PORTAL 181 INT 8 APTO 302",Address:"Calle 181 # 17B - 47",PhotoUrl:"2021/04/10/6246127/apartamento-arriendo-cundinamarca-bogota-351478287_m.jpg",ClientName:"Inmobiliaria Gonzalez Amaya Ltda",ClientId:"301537",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6193352",Title:"Apartamento en Arriendo - Bogotá Gran Britalia",Address:"Carrera 56 # 167A - 03 Apto 908",PhotoUrl:"2021/03/18/6193352/apartamento-arriendo-cundinamarca-bogota-351478163_m.jpg",ClientName:"Uraki Inmobiliaria S.A.S",ClientId:"52671",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6251025",Title:"Apartamento en Arriendo - Bogotá Villas del Dorado",Address:"Carrera 110 D # 64 C ",PhotoUrl:"2021/04/12/6251025/apartamento-arriendo-cundinamarca-bogota-351477439_m.jpg",ClientName:"Yesid  Sánchez ",ClientId:"353068",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"5940710",Title:"Apartamento en Arriendo - Bogotá LAS DELICIAS DEL CARMEN",Address:"CALLE 127C   3- 81",PhotoUrl:"2020/12/09/5940710/apartamento-arriendo-cundinamarca-bogota-351482678_m.jpg",ClientName:"Vasquez & Vasquez sas",ClientId:"29298",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6214662",Title:"Apartamento en Arriendo - Bogotá Kennedy Central",Address:"Calle 35 A sur No. 78 D-29",PhotoUrl:"2021/03/27/6214662/apartamento-arriendo-cundinamarca-bogota-351477138_m.jpg",ClientName:"Inmobiliaria Colombia Ltda",ClientId:"191905",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6224884",Title:"Apartamento en Arriendo - Bogotá Niza",Address:"Calle 127 # 58 - 45 Apto 508 t 2",PhotoUrl:"2021/03/31/6224884/apartamento-arriendo-cundinamarca-bogota-351476451_m.jpg",ClientName:"Espacio Inmobiliario & Cia Ltda.",ClientId:"86553",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6245396",Title:"Apartamento en Arriendo - Bogotá Cedro Golf",Address:"Cra 8A 151 83",PhotoUrl:"2021/04/10/6245396/apartamento-arriendo-cundinamarca-bogota-350920980_m.jpg",ClientName:"Lina Atehortua",ClientId:"242577",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6240103",Title:"Apartamento en Arriendo - Bogotá Las Margaritas",Address:"CALLE 146  19 14",PhotoUrl:"2021/04/08/6240103/apartamento-arriendo-cundinamarca-bogota-351475964_m.jpg",ClientName:"Cortes García Inmobiliaria",ClientId:"129794",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6241322",Title:"Apartamento en Arriendo - Bogotá Pasadena",Address:"Cr 50 104b-68",PhotoUrl:"2021/04/08/6241322/apartamento-arriendo-cundinamarca-bogota-350576028_m.jpg",ClientName:"Juan Sebastian Rodriguez Casas",ClientId:"1849255",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6169113",Title:"Apartamento en Arriendo - Bogotá Bella Suiza",Address:"carrera 7B No 127A-57",PhotoUrl:"2021/03/10/6169113/apartamento-arriendo-cundinamarca-bogota-351474159_m.jpg",ClientName:"Caceres y Asociados Inmobiliaria S.A.S.",ClientId:"100151",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6250991",Title:"Apartamento en Arriendo - Bogotá Nueva Autopista",Address:"CALLE 140  20",PhotoUrl:"2021/04/12/6250991/apartamento-arriendo-cundinamarca-bogota-351473744_m.jpg",ClientName:"PATRICIA MORENO      ALIANZAS INMOBILIARIAS",ClientId:"3030581",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6246153",Title:"Apartamento en Arriendo - Bogotá LOCAL BARRIO VENECIA DIAGONAL 51 SUR 53 B 38",Address:"Diagonal 51 SUR # 53B - 38",PhotoUrl:"2021/04/10/6246153/apartamento-arriendo-cundinamarca-bogota-351471160_m.jpg",ClientName:"Inmobiliaria Gonzalez Amaya Ltda",ClientId:"301537",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6250936",Title:"Apartamento en Arriendo - Bogotá Santa Bárbara Oriental",Address:"Calle 123  7b - 67",PhotoUrl:"2021/04/12/6250936/apartamento-arriendo-cundinamarca-bogota-351462830_m.jpg",ClientName:"Ruben Ramirez",ClientId:"3077399",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6250932",Title:"Apartamento en Arriendo - Bogotá Bosa",Address:"Calle 59C sur  88H-15",PhotoUrl:"2021/04/12/6250932/apartamento-arriendo-cundinamarca-bogota-351454948_m.jpg",ClientName:"Cristian Camilo Jimenez Lebro",ClientId:"2150016",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6250919",Title:"Apartamento en Arriendo - Bogotá La Española",Address:"diagonal 83 76-39",PhotoUrl:"2021/04/12/6250919/apartamento-arriendo-cundinamarca-bogota-351467580_m.jpg",ClientName:"CARLOS BOHORQUEZ",ClientId:"2701830",OriginId:"23",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Professional"},{AdvertId:"6250929",Title:"Apartamento en Arriendo - Bogotá Cedritos",Address:"calle 144#12 ",PhotoUrl:"2021/04/12/6250929/apartamento-arriendo-cundinamarca-bogota-351463621_m.jpg",ClientName:"pedro  Armando",ClientId:"3068297",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"},{AdvertId:"6250922",Title:"Apartamento en Arriendo - Bogotá San Luis  Patios",Address:"CALLE 100 B N 3 16 ESTE ",PhotoUrl:"2021/04/12/6250922/apartamento-arriendo-cundinamarca-bogota-351440474_m.jpg",ClientName:"luz angela  GARIBELLO",ClientId:"646064",OriginId:"44",PromotionLogoURL:"",Category1:"Apartamento",TransactionId:"2",ContractType:"Particular"}],"info":""}][0];
    var lstFacets = "";

    function Grid_OrderBy(orderby) {
        trackingAlreadyCalled = false;
        sfFind.Order = orderby;
        sfFind.PageNumber = 1;
        return Find(sfFind, null, "ORDER");
    }

    //llamado carousel
    $(document).ready(function () {
        if (!toBoolean('False'))
            return;

        var isTag = window.xtsd != undefined;
        var timeExecution = !isTag ? 400 : 0;
        var maxTime = 10000;//Se define tiempo maximo de espera 
        //se crea setInterval para solicionar problemas cuando la variable window.xtsd no acanza a definirse
        var id = setInterval(function () {
            if (window.xtsd != undefined || timeExecution >= maxTime) {
                clearInterval(id);
                loadCarousel("30|1||||2||8|||67|3630001|||||||||||||||||||1||category1 desc||||||||", "AV")
            }
            if (isTag)
                timeExecution += 200;
        }, timeExecution);
    });