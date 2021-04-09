
    var OpenWindowApple = function (_url, name, w, h) {
        var left = parseInt((screen.width / 2) - (w / 2));
        var top = parseInt((screen.height / 2) - (h / 2) - 100);
        var _params = "toolbar=no, location=no, modal=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=" + w + ", height=" + h + ', top=' + top + ', left=' + left;
        window.open(_url, name, _params);
    }

    var functionClickApple = function () {
        
                window.location.href = 'https://appleid.apple.com/auth/authorize?scope=name%20email&client_id=web.co.com.fincaProd&redirect_uri=https://www.fincaraiz.com.co/apartamentos/arriendo/bogota&state=oe3Tqx97UE66b19aYoBOiA&response_type=code&response_mode=form_post&approval_prompt=auto';                
        
    }

