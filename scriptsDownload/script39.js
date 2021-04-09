
    utag_data = JSON.parse('{"environment":"Prod","page_type":"List","page_type_id":"2","event_name":"List","Info_HTTP_X_FORWARDED_FOR":"186.82.222.74","Info_REMOTE_ADDR":"172.21.2.83","Info_LOCAL_ADDR":"172.21.1.129","Info_X_FORWARDED_FOR":"186.82.222.74","ad_type_id":"2","ad_type":"Arriendo","ad_id":"0","ad_source_id":"0","region_level1":"Cundinamarca","region_level2":"Bogotá","region_level1_id":"67","region_level2_id":"3630001","category_level1":"Apartamento","category_level1_id":"8","action_type":"Navigation","num_bathrooms":"0","results_page":"1","rooms":"0","visit_origin":"Direct","Continent_Code":"SA","Continent_Name":"South America","Country_IsoCode":"CO","Country_Name":"Colombia","Traits_IPAddress":"186.82.222.74","items":[{"id":"6090429","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá La Macarena","category":"Apartamento"},{"id":"5972178","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chicó","category":"Apartamento"},{"id":"5853785","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Bilbao","category":"Apartamento"},{"id":"6200303","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Ciudad Alsacia","category":"Apartamento"},{"id":"6242279","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Horizontes Norte","category":"Apartamento"},{"id":"6242242","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chapinero","category":"Apartamento"},{"id":"6242233","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Rionegro","category":"Apartamento"},{"id":"6242224","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Cedritos","category":"Apartamento"},{"id":"6242210","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Suba Las Mercedes","category":"Apartamento"},{"id":"6242202","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Zona Noroccidente","category":"Apartamento"},{"id":"5993550","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Bella Suiza","category":"Apartamento"},{"id":"6242192","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Hayuelos","category":"Apartamento"},{"id":"5993548","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Bella Suiza","category":"Apartamento"},{"id":"6242172","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Nueva Autopista","category":"Apartamento"},{"id":"6236611","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Santa Teresa","category":"Apartamento"},{"id":"6242154","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Nueva Castilla","category":"Apartamento"},{"id":"6242152","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Madelena","category":"Apartamento"},{"id":"6074211","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Minuto de Dios","category":"Apartamento"},{"id":"6175995","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chapinero Alto","category":"Apartamento"},{"id":"6200408","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá El Cortijo","category":"Apartamento"},{"id":"6242139","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Las Ferias","category":"Apartamento"},{"id":"6242128","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Galerias","category":"Apartamento"},{"id":"6242115","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Multicentro","category":"Apartamento"},{"id":"6161086","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Colina Campestre","category":"Apartamento"},{"id":"6060011","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chicó","category":"Apartamento"},{"id":"6242094","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Marsella","category":"Apartamento"},{"id":"6242081","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá El Batán","category":"Apartamento"},{"id":"6241604","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Rosales","category":"Apartamento"},{"id":"5978690","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chapinero Alto","category":"Apartamento"},{"id":"6242021","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chapinero","category":"Apartamento"},{"id":"6173400","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Chicó Navarra","category":"Apartamento"},{"id":"5018976","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Santa Bárbara Oriental","category":"Apartamento"},{"id":"6242000","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Suba Salitre","category":"Apartamento"},{"id":"6241995","type":"ClassifiedAd","name":"Apartamento en Arriendo - Bogotá Bogotá","category":"Apartamento"}],"num_results":"22136","num_items":"34","sorting":"Other","facility":"Sin Especificar","pagetype":"listing"}');
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
