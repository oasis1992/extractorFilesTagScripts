
    var clientIp;
    $.ajax({
        async: true, type: 'GET', contentType: 'application/json',
        url: 'https://api.ipify.org/?format=json',        
        success: function (data) {
            if (data && data.ip)
                clientIp = data.ip;
        },
        complete: function () { getGeoipInfo(clientIp) }
    });

    function getGeoipInfo(clientIp) {
        var obj_geo;
        if (typeof (Storage) !== "undefined")
            obj_geo = sessionStorage.getItem("ss_geoip_info");

        if (obj_geo)
            setGeoipInfo(JSON.parse(obj_geo));
        else {
            $.ajax({
                async: false, type: 'GET', dataType: 'xml', contentType: "application/x-www-form-urlencoded",
                url: '/WebServices/Utils.asmx/GetGeoipInfo?clientIp=' + clientIp,
                success: function (data) {
                    if (data && data.hasChildNodes()) {
                        var obj = JSON.parse(data.children[0].textContent);
                        setGeoipInfo(obj);
                        if (typeof (Storage) !== "undefined")
                            sessionStorage.setItem("ss_geoip_info", JSON.stringify(obj));
                    }
                }
            });
        }
        loadTealium();
    }
    function setGeoipInfo(obj) {
        if (obj.Continent_Code) utag_data.Continent_Code = obj.Continent_Code;
        if (obj.Continent_Name) utag_data.Continent_Name = obj.Continent_Name;
        if (obj.Country_IsoCode) utag_data.Country_IsoCode = obj.Country_IsoCode;
        if (obj.Country_Name) utag_data.Country_Name = obj.Country_Name;
        if (obj.Traits_Domain) utag_data.Traits_Domain = obj.Traits_Domain;
        if (obj.Traits_IPAddress) utag_data.Traits_IPAddress = obj.Traits_IPAddress;
    }
    function loadTealium() {
        (function (a, b, c, d) {
            a = '//tags.tiqcdn.com/utag/schibsted/fincaraiz/prod/utag.js';
            b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
            a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
        })();
    }

    var TealiumEventHandler = function (event, data) {
        var dataTealium = data;
        try 
        {
            if (event.toLowerCase() == "view") {
                utag.view(dataTealium);
                $.each(dataTealium, function (index, value) { utag_data[index] = value; });
            }
            if (event.toLowerCase() == "click") {
                utag.link(dataTealium);
                $.each(dataTealium, function (index, value) { utag_data[index] = value; });
            }
            if (event.toLowerCase() == "hit") {
                utag.track({ event: 'hit', data: dataTealium });
            }
        }
        catch (ex)
        {
            console.log(ex);
        }
    }

    function trackingView(page, _eventHandler) {
        try {
            var dataTealium = { event_name: page, EventHandler: _eventHandler };

            TealiumEventHandler("view", dataTealium);
        }
        catch (ex) {
        }
        return true;
    }

    function trackingClick(page, _eventHandler) {
        try {
            var dataTealium = {event_name: page, EventHandler: _eventHandler};
            
            TealiumEventHandler("click", dataTealium);
        }
        catch (ex) {
        }
        return true;
    }

    function trackingHit(page, _eventHandler) {
        try {
            if (typeof (page) == 'undefined' || page == null) {
                page = utag_data.event_name;
            }

            var dataTealium = { event_name: page, EventHandler: _eventHandler, environment: utag_data.environment };

            TealiumEventHandler("hit", dataTealium);
        }
        catch (ex) {
        }
        return true;
    }

    function TealiumMessage(message) {
        var dataTealium;
        try {
            dataTealium = {
                EventHandler: 'SpecificTracking',
                event_name: utag_data.page_type,
                error_msg: (utag_data.page_type.sanitize() + "-" + message.removeAccents().replace(/\s/g, '_')), 
                environment: utag_data.environment
            };

            TealiumEventHandler("hit", dataTealium);
        }
        catch (cvex) {
        }
    }

    function TealiumGroupPacks(content) {
        var dataTealium;
        try {
            dataTealium = {
                EventHandler: 'SpecificTracking',
                event_name: utag_data.page_type,
                group_packs: (utag_data.page_type.sanitize() + "-GroupPacks_" + content.removeAccents().replace(/\s/g, '_')),
                environment: utag_data.environment
            };

            TealiumEventHandler("hit", dataTealium);
        }
        catch (cvex) {
        }
    }

    function TealiumClick(nameAttribute, valueAttribute, message) {
        var obj = searchElementTealium(nameAttribute, valueAttribute, message);

        for (var key in obj) {
            if (obj[key] !== null) {
                addClickTealium(obj[key], function () { trackingClick(message, 'SpecificTracking'); });
            }
        }
    }

    var addClickTealium = function (objElement, objFunction) {
        if (objElement.addEventListener) {  // all browsers except IE before version 9
            objElement.addEventListener("click", objFunction, false);
        } else {
            if (objElement.attachEvent) {   // IE before version 9
                objElement.attachEvent("click", objFunction);
            }
        }
    }

    var searchElementTealium = function (nameAttribute, valueAttribute, message) {
        var obj = {};

        switch (nameAttribute.toLowerCase().trim()) {
            case "id":
                var elementCollection = new Array();
                var allElements = document.getElementsByTagName("*");
                for (i = 0; i < allElements.length; i++) {
                    if (allElements[i].id == valueAttribute)
                        obj[valueAttribute + i.toString()] = allElements[i];
                }
                break;
            case "name":
                if (document.getElementsByName(valueAttribute) !== null) {
                    obj[valueAttribute] = document.getElementsByName(valueAttribute);
                }
                break;
            case "class":
                if (document.getElementsByClassName(valueAttribute) !== null) {
                    var allElements = document.getElementsByClassName(valueAttribute);
                    for (i = 0; i < allElements.length; i++) {
                        obj[valueAttribute + i.toString()] = allElements[i];
                    }
                }
                break;
            default:
                var All = document.getElementsByTagName('*');
                var cont = 0;

                for (var i = 0; i < All.length; i++) {
                    if (All[i].getAttribute(nameAttribute) == valueAttribute) {
                        obj[cont] = All[i];
                        cont++;
                    }
                }
                break;
        }

        return obj;
    }

    var TealiumSetConversion = function (tag, idConversion, emailConversion, content_type, content_ids, value, content_name, content_category) {
        //Tags personalizados
        if (typeof (TealiumConversion) !== 'undefined') {
            TealiumConversion(tag, idConversion, emailConversion, content_type, content_ids, value, content_name, content_category);
        }
    }

    var FacebookPixel = function () {
        var content_ids = []
        var id = $("#ctl00_phMasterPage_GroupPacks_hddGroupPack").val();
        if (typeof (id) !== 'undefined' && id !== '') {
            var title = $("#GroupPacks" + id).attr("text");
            var price = $("#Group_" + id + " .price_content h4").html().replace(/\t/g, '').replace(/(\r\n|\n|\r)/g, "").replace("$", '').trim();

            content_ids.push(id)
            TealiumSetConversion('FacebookPixel', null, null, title, content_ids, price);
        }
    }

    var FacebookPixelLead = function (content_name) {
        var content_category = utag_data.ad_type_id + " : " + utag_data.ad_type + " > " + utag_data.category_level1_id + " : " + utag_data.category_level1

        TealiumSetConversion('FacebookPixelLead', null, null, null, null, 1, content_name, content_category);
    }

    var RegisterViewBasket = function ()
    {
        var Product_arrayPrice = []
        var Product_arrayPack = []
        var Product_arrayQuan = []
        $.each($(".checked"), function (key, value) {
            var code = $(value).attr("id").replace('price_', '');
            Product_arrayPrice.push($("#priceValue_" + code).val().replace("$ ",""));
            var pack = $("#packValue_" + code).val();
            Product_arrayPack.push(pack);
            var quan = $("[pack-value*='" + pack + "|']:first").text();
            Product_arrayQuan.push(quan.substring(0, quan.indexOf(" ")));
        });

        utag_data.lst_products_id = Product_arrayPack;
        utag_data.lst_products_price = Product_arrayPrice;
        utag_data.lst_products_quan = Product_arrayQuan;
    }

    var RegisterViewBasket = function () {
        var Product_arrayPrice = []
        var Product_arrayPack = []
        var Product_arrayQuan = []
        $.each($(".checked"), function (key, value) {
            var code = $(value).attr("id").replace('price_', '');
            Product_arrayPrice.push($("#priceValue_" + code).val().replace("$ ", ""));
            var pack = $("#packValue_" + code).val();
            Product_arrayPack.push(pack);
            var quan = $("[pack-value*='" + pack + "|']:first").text();
            Product_arrayQuan.push(quan.substring(0, quan.indexOf(" ")));
        });

        utag_data.lst_products_id = Product_arrayPack;
        utag_data.lst_products_price = Product_arrayPrice;
        utag_data.lst_products_quan = Product_arrayQuan;

        //trackingHit(null, 'SpecificTracking');
    }

    var RegisterViewItem = function (product) {
        var code = product.replace("Check_","");
        utag_data.product_id = $("#packValue_" + code).val();
        trackingHit(null, 'SpecificTracking');
    }
