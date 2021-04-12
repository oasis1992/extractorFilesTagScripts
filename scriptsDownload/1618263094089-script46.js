
    var OpenWindowGmail = function (_url, name, w, h) {
        var left = parseInt((screen.width / 2) - (w / 2));
        var top = parseInt((screen.height / 2) - (h / 2) - 100);
        var _params = "toolbar=no, location=no, modal=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=" + w + ", height=" + h + ', top=' + top + ', left=' + left;
        window.open(_url, name, _params);
    }

    var functionClickGmail = function () {
        
                window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20profile%20email&include_granted_scopes=true&redirect_uri=https://www.fincaraiz.com.co/apartamentos/arriendo/bogota?nw=gm&response_type=code&client_id=751564689013-5mmokt7kti1qneh99thbrpk9lqo9hmd8.apps.googleusercontent.com';                
        
    }

