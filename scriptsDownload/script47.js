
    //Variables del proceso
    var advertId = '';
    var vurl = '';
    var contractType = 'Particular_Comprador';
    var registerUserToken = "AF215EBA85EFBC3782197EE4F3368434C3DC2E3FF1B20B071BCD8B2210307B480062C4EFF0A1B5D7";
    var rclWidgetId = "";
    var dataUserRegister;

    function LoginFB(resp) {
        var data = ReadCookieNotEncrip("LoginFacebookFlag");
        if (data.length > 0) {
            var obj = $.parseJSON(data)
            _favoriteAdverts = [];
            var advertId = obj.AdvertId;
            var isAdd = obj.isAdd;
            FavoriteAdvert_Event(isAdd, advertId, function () {
                LoadHeaderASync();
                HideLoginRegisterPopup();
                CreateCookie("LoginFacebookFlag", "", 1, false);
            });
        }
    }

    function LoginGM(resp) {
        var data = ReadCookieNotEncrip("LoginGmailFlag");
        if (data.length > 0) {
            var obj = $.parseJSON(data)
            _favoriteAdverts = [];
            var advertId = obj.AdvertId;
            var isAdd = obj.isAdd;
            FavoriteAdvert_Event(isAdd, advertId, function () {
                LoadHeaderASync();
                HideLoginRegisterPopup();
                CreateCookie("LoginGmailFlag", "", 1, false);
            });
        }
    }

    function userNotRegister(message, resp, isFavorite = false) {
        alert(message);

        if (isFavorite)
            $('#btnCambio').click()
               
        dataUserRegister = jQuery.parseJSON(resp);
    } 


    function llenarCamposRegistro() {
        $("#txtEmailRegister").val(dataUserRegister.email);
        $("#txtNameRegister").val(dataUserRegister.first_name);
        $("#txtSurNameRegister").val(dataUserRegister.last_name);
        $("#txtPhoneRegister").val(dataUserRegister.phone);
        $("#txtRegistrationOriginID").val(dataUserRegister.idorigin);
        $("#txtPwsRegister").val(dataUserRegister.password);

        //$("#txtEmailRegister").attr("disabled", true);
       // $("#txtNameRegister").attr("disabled", true);
       // $("#txtSurNameRegister").attr("disabled", true);
        $("#divEmailConfirmRegister").hide();
        $("#divPasswordRegister").hide();
    }

 function LoginAP(resp) {
        var data = ReadCookieNotEncrip("LoginAppleFlag");
        if (data.length > 0) {
            var obj = $.parseJSON(data)
            _favoriteAdverts = [];
            var advertId = obj.AdvertId;
            var isAdd = obj.isAdd;
            FavoriteAdvert_Event(isAdd, advertId, function () {
                LoadHeaderASync();
                HideLoginRegisterPopup();
                CreateCookie("LoginAppleFlag", "", 1, false);
            });
        }
    }
    function CancelFB(message) {       
        alert(message);
    }

    function CancelGM(message) {
        alert(message);
    }

    function CancelAP(message) {
        alert(message);
    }

    function LoadLoginRegisterByMode(mode, configuration) {
        if (configuration != null) {
            var urlBase = "/App_Modules/Client/LoginRegisterV2.ashx?mode=" + mode;
            if (mode != "6" || mode != "7")
                urlBase = urlBase + "&Redirect=" + window.location.protocol + '//' + window.location.host + window.location.pathname;

            //Consulta la estructura html dependiendo del modo.
            jQuery.ajax({
                cache: false,
                type: "GET",
                url: urlBase,
                dataType: "html",
                success: function (response) {
                    if (mode != "6" && mode != "7" && mode != "8" && mode != "9") {
                        //Asigna la configuracion especifica al llamado actual
                        CustomerConfiguration = configuration;

                        //Limpia si existe una renderizacion previa.
                        ClearLoginRegisterRender();

                        //Obtiene el html que se visualizara
                        var html = LoginRegisterRender(configuration, response);

                        //Asigna el popup de ser necesario
                        if (configuration.Popup) {
                            LaunchLoginRegisterPopup(configuration, html);
                        }
                        else {
                            //Coloca el html en el panel por defecto
                            $("#LoginRegisterPanel").append(html);
                        }

                        //Cosas por defecto que se deban realizar
                        Initialsteps();

                        //Si tiene un evento para personalizar antes de iniciar.
                        if (typeof configuration.InitEvent == "function") {
                            configuration.InitEvent();
                        }

                        //Asigna los eventos y validaciones a las etiquetas generadas.
                        SetLoginRegisterEvent(mode);

                        if (typeof (window.PromoterManager) != "undefined" && typeof (window.PromoterManager.ShowModal) != "undefined") {                 
                            $(".overlay, #popup_ok, #skipRegister").bind("click", function () {                
                                window.PromoterManager.ShowModal();
                            });
                        }
                        //usuario logueado con exito pero no registrado
                        if (dataUserRegister)
                            llenarCamposRegistro();
                    }
                    else {
                        if (mode == "6")
                            window.location.href = response;
                        else if (mode == "7") {
                            OpenWindowFacebook(response, 'LoginFacebook', 500, 250)
                        }
                        else if (mode == "8") {
                            OpenWindowGmail(response, 'LoginGmail', 500, 560)
                        }
                        else if (mode == "9") {
                            OpenWindowApple(response, 'LoginApple', 648, 663)
                        }
                    }
                }
            });
        }
        else {
            alert("debe asignar una configuración el control");
        }
    }

