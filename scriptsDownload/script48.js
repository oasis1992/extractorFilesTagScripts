
                        //si es por ajax, ocultamos la parrilla
                        var semantic = window.location.hash.replace("#", "");
                        if (semantic.indexOf("ad=") == 0) {
                            $("#grid_results").hide();
                        }
                        $(document).ready(
                            function () {
                                var textNoResults = '';

                                if (textNoResults != '') {
                                    if ('22136' == 0) {
                                        $("#AjaxNoAdverts").html("Hoy no tenemos inmuebles que coincidan con su búsqueda de: <b>" + textNoResults + "</b>. Consulte nuestro listado para encontrar más inmuebles: <a href='/todos/venta/colombia/index.aspx?ad=30|1||||1||||||||||||||||||||||||||||||'>Anuncios de Finca Raíz en Colombia</a>");
                                        $("#AjaxNoAdverts").show();
                                    }
                                    else
                                    {
                                        $("#AjaxNoAdverts").html(htmlNoAdverts.replace("{fulltitle}", textNoResults));
                                        $("#AjaxNoAdverts").show();
                                    }
                                }
                            }
                        );
                        var pulseObjectTypeText = 'ClassifiedAd';
                    