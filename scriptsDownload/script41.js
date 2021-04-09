
    var RegisteredClientId = 0;

    function GetValueJson(response, i, length) {
        var responseTmp = response.substring(i + length);
        var lengthVar = responseTmp.indexOf(";");
        var value = responseTmp.substring(0, lengthVar);
        if (value.indexOf("[]") == -1)
            return $.parseJSON(value);
        else
            return [];
    }

    //Inicialiaza los items de favoritos.
    function StartFavoritesAdverts(response) {
        setTimeout(function () {
            if (typeof LaunchFavorites !== "undefined") {
                i = response.indexOf("_favoriteAdverts=[]");
                if (i == -1) {
                    i = response.indexOf("_favoriteAdverts=[");
                    _favoriteAdverts = GetValueJson(response, i, 17);
                }

                if (typeof LoadGridFavorites !== "undefined")
                    LoadGridFavorites(1);
                else
                    LaunchFavorites();
            }
        }, 300);
    }

    function LoadHeaderASync() {
        jQuery.ajax({
            cache: false,
            type: "GET",
            url: "/HeaderV2.ashx?ButtonPublish=True&Management=True&LogoSize=1&SocialMedia=False&ClientId=",
            dataType: "html",
            success: function (response) {
                $("#THV2").empty();
                var node = document.getElementById('HeaderV2');
                if (node != null) {
                    node.parentNode.removeChild(node);
                }
                StartFavoritesAdverts(response);
                $("#THV2").replaceWith(response);
            }
        });
    }

    LoadHeaderASync();
    
