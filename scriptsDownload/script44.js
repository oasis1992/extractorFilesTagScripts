
    var OpenWindowFacebook = function (_url, name, w, h) {
        var left = parseInt((screen.width / 2) - (w / 2));
        var top = parseInt((screen.height / 2) - (h / 2) - 100);
        var _params = "toolbar=no, location=no, modal=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=" + w + ", height=" + h + ', top=' + top + ', left=' + left;
        window.open(_url, name, _params);
    }
    var functionClickFacebook = function () {
        OnClientClickFacebook();

        window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=278151412365412&redirect_uri=https://www.fincaraiz.com.co/apartamentos/arriendo/bogota?nw=fb&display=popup&scope=email'; 

    }

    var OnClientClickFacebook = function(){
        
    }
