
    utag_data = JSON.parse('{"environment":"Prod","page_type":"List","page_type_id":"2","event_name":"List","Info_HTTP_X_FORWARDED_FOR":"187.184.96.62","Info_REMOTE_ADDR":"172.21.2.83","Info_LOCAL_ADDR":"172.21.2.158","Info_X_FORWARDED_FOR":"187.184.96.62","ad_type_id":"2","ad_type":"Arriendo","ad_id":"0","ad_source_id":"0","region_level1":"Cundinamarca","region_level2":"Bogotá","region_level1_id":"67","region_level2_id":"3630001","category_level1":"Apartamento","category_level1_id":"8","action_type":"Navigation","num_bathrooms":"0","results_page":"1","rooms":"0","visit_origin":"Direct","Continent_Code":"NA","Continent_Name":"North America","Country_IsoCode":"MX","Country_Name":"Mexico","Traits_IPAddress":"187.184.96.62","items":[{"id":"5724798","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá LA CASTELLANA","category":"Apartamento"},{"id":"6034343","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá SAN RAFAELGALAN","category":"Apartamento"},{"id":"5918672","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Santa Bárbara Oriental","category":"Apartamento"},{"id":"6232295","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Santa Bárbara","category":"Apartamento"},{"id":"6238945","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Alcala","category":"Apartamento"},{"id":"6185708","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá CASTILLA","category":"Apartamento"},{"id":"6154473","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá CIUDADELA COLSUBSIDIO","category":"Apartamento"},{"id":"6173400","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chicó Navarra","category":"Apartamento"},{"id":"6232057","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá AURES II SECTOR LA PLANTA","category":"Apartamento"},{"id":"5889719","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chicó","category":"Apartamento"},{"id":"6238883","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Barrancas","category":"Apartamento"},{"id":"6238645","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá La Calleja","category":"Apartamento"},{"id":"6238445","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá PONTEVEDRA","category":"Apartamento"},{"id":"6238874","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Minuto de Dios","category":"Apartamento"},{"id":"6140712","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Alquería","category":"Apartamento"},{"id":"5491225","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá LA CAROLINA","category":"Apartamento"},{"id":"6238855","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Britalia Norte","category":"Apartamento"},{"id":"6238859","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Suba rincon","category":"Apartamento"},{"id":"3805306","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Pasadena","category":"Apartamento"},{"id":"6198773","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Santa Bárbara Occidental","category":"Apartamento"},{"id":"4884766","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá La Felicidad","category":"Apartamento"},{"id":"5145589","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá CIUDAD JARDIN SUR","category":"Apartamento"},{"id":"5647245","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá CASA BLANCA SUR","category":"Apartamento"},{"id":"6020253","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá LA LIBERTAD","category":"Apartamento"},{"id":"5638518","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá La Cabrera","category":"Apartamento"},{"id":"6238789","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chapinero","category":"Apartamento"},{"id":"6238763","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá El Batán","category":"Apartamento"},{"id":"5840277","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chicó","category":"Apartamento"},{"id":"6238738","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Cedritos","category":"Apartamento"},{"id":"6144677","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá La Floresta","category":"Apartamento"},{"id":"6238655","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Santa Bárbara","category":"Apartamento"},{"id":"6238714","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Pardo Rubio","category":"Apartamento"},{"id":"6182998","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá SIETE DE AGOSTO","category":"Apartamento"},{"id":"6182897","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá SIETE DE AGOSTO","category":"Apartamento"}],"num_results":"22139","num_items":"34","sorting":"Other","facility":"Sin Especificar","pagetype":"listing"}');
    var tealiumEnvironment = utag_data.environment.toLowerCase();
    var opengraphObj = [];
    var metaObj = [];
    $('head meta').each(function () {
        var prop = $(this).attr('property');
        var name = $(this).attr('name');
        var httpe = $(this).attr('httpequiv');
        var _http = $(this).attr('http-equiv');
        var content = $(this).attr('content');
        
        if (prop && $(this).attr('property').indexOf('og:') != -1 && name == undefined && httpe == undefined && _http == undefined)
            opengraphObj.push({ property: prop, content: content });
        else if (prop != undefined)
            metaObj.push({ property: prop, content: content });

        if (name && prop == undefined && httpe == undefined && _http == undefined)
            metaObj.push({ property: name, content: content });

        if (httpe && name == undefined && prop == undefined && _http == undefined)
            metaObj.push({ property: httpe, content: content });

        if (_http && name == undefined && prop == undefined && httpe == undefined)
            metaObj.push({ property: _http, content: content });
    });

    if (opengraphObj.length > 0) utag_data.opengraph = opengraphObj;
    if (metaObj.length > 0) utag_data.meta = metaObj;
