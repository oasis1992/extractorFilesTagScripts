
    LoadBreadcrumbFilterEvents();
    $(document).ready(function () {
        if (!(typeof AjaxEnabled !== "undefined" && AjaxEnabled)) {
            var ctrl = $("#olBCFilters");
            ctrl.addClass("NoAjax");
            ctrl.removeClass("Ajax");
        }

        //evento keyUp sobre txtNbhood
        //al presionar Enter, lanza la busqueda
        $("#txtNbhood").keyup(function (event) {
            var Value = $(this).val();
            //si presiona la tecla enter
            BtnClearWard(Value);

            if (event.keyCode == 13) {
                FindAdvertNbhood();
            }
        });

        BtnClearWard($("#txtNbhood").val());
    });
    //function SetNbhoodDefault() {
    //    var ctrl = $("#txtNbhood");
    //    ctrl.val(ctrl.attr("default")).css('color', 'rgb(21, 36, 93)');
    //}
    function ToggleCheckFromAnchor(item, event) {
        trackingAlreadyCalled = false;
        if (typeof AjaxEnabled !== "undefined" && AjaxEnabled) {
            var chks = (($(item).is('a') == true) ? $(item).parent().find("input[type='checkbox']") : $(item).find("input[type='checkbox']"));
            if (chks.length > 0) {
                var chk = $(chks[0]);
                if ($(event.target).is('input') == false) {
                    chk.attr('checked', !chk.attr('checked'));
                }
                chk.attr("changed", "true");
            }
            CleanNbhood(false);
            var CtrlParent = $(item).closest('.dropdown-check-list');
            if ($(CtrlParent).length > 0 && $(CtrlParent).find('input[type="checkbox"][binding="Location3Id"]').length > 0) {
                ChangeTextSelection(CtrlParent, 'input[type="checkbox"][binding="Location3Id"]:checked');
            }
            var ReturnValue = ($(event.target).is('a') == true) ? false : true;
            if (QuebeFindCall != undefined) { QuebeFindBreadCrumbCall(item, 1000); }
            return ReturnValue;
        }
        else {
            return true;
        }
    }

    function ChangeTextSelection(item, SelectorChilds) {
        var SelectedItems = $(item).find(SelectorChilds);
        var Textanchor = (($(SelectedItems).length == 1) ? $(SelectedItems[0]).attr('locationname') : (($(SelectedItems).length > 1) ? $(SelectedItems[0]).attr('locationname') + ", " + $(SelectedItems[1]).attr('locationname') : "Seleccione Zona"));
        $(item).find('.anchor').find('a').text(Textanchor);
    }

    function CleanNbhood(ExecuteSearch) {
        $("#txtNbhood").val('');
        $("#btnClearNbhood").css("display", "none");
        if (ExecuteSearch == true) { FindAdvertNbhood(); }
    }

    function FindAdvertNbhood() {
        var txtNbh = $("#txtNbhood");
        if (txtNbh.val() != "") {
            sfFind.Neighborhood = ValidIlegalCharacters(txtNbh.val());
            trackingClick("Results - Buscar por Barrio", "SpecificTracking");
        }
        else {
            sfFind.Neighborhood = "";
        }
        trackingAlreadyCalled = false;
        window.vmResults.FindAdvertsFacet('');
    }

    function BtnClearWard(MyValue) {
        if (MyValue == undefined || MyValue == "" || MyValue.length <= 0) {
            $("#btnClearNbhood").css("display", "none");
        }
        else {
            if ($("#btnClearNbhood").css("display") == "none") { $("#btnClearNbhood").css("display", "block"); }
        }
    }
