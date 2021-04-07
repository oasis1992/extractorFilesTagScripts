
            var cEmail = "";
            var cName = "";
            var cPhone = "";
            var cCity  = "";            
            var cCategoryGroup =  "1";
            var contactToken = '11D8C67F8053C232FBE720ACE297E88BF490F55680A0A15D31205E0655B6E55172A3B738AF068BC9';
            var contextdomain  = 'www.fincaraiz.com.co';
            var clientIdR = '0';

            $( document ).ready(function() {
                cCategoryGroup = "1";
            });

            //variable global
            var sfFind = Normalize({"AdvertCategory" : "0", "LocationType" : "0", "AdvertId" : "0", "AdvertWASId" : "0", "AdvertExternalId" : "", "ClientId" : "0", "TransactionId" : "2", "sTransactionsId" : "", "TransactionType" : "All", "Category1Id" : "8", "Category1IdList" : "8", "Category2Id" : "0", "Category3Id" : "0", "Location1Id" : "67", "Location1IdList" : "67", "Location2Id" : "3630001", "Location2IdList" : "3630001", "Location3Id" : "0", "Location3IdList" : "", "Location4Id" : "0", "Location4IdList" : "", "PriceFrom" : "0", "PriceTo" : "0", "NotInLocation4Id" : "", "SalaryMax" : "0", "SurfaceFrom" : "0", "SurfaceTo" : "0", "Area" : "0", "Rooms" : "0", "RoomsList" : "", "Baths" : "0", "BathsList" : "", "AgeId" : "0", "AgeIdList" : "", "NotInLocation3Id" : "", "ExtrasId" : "0", "ExtrasIdList" : "", "ContractType" : "All", "TopAdvert" : "0", "ProductCode" : "", "NumPhotos" : "0", "ShowPhotos" : "True", "ProductId" : "0", "Word" : "", "Order" : "GridDate desc", "Status" : "0", "OriginId" : "0", "GridDate" : "1/1/0001 12:00:00 AM", "ModifyDateTo" : "1/1/1900 12:00:00 AM", "ToBePostModerate" : "False", "FTISearch" : "False", "NotInAdvertsId" : "", "ParentLevel" : "-1", "GroupType" : "-1", "ClientParentLevel" : "-1", "NotInCategory1Id" : "0", "NotInCategory2Id" : "0", "AdvertIP" : "", "GroupName" : "", "Neighborhood" : "", "PriceTypeId" : "0", "StratumId" : "", "StratumIdList" : "", "TotalEnvironment" : "0", "TotalEnvironmentList" : "", "IsFree" : "-1", "InLocation" : "False", "Ranking" : "0", "ProyectStatus" : "0", "PageSize" : "30", "PageNumber" : "1"});
            var viewMap = false;
            sfFind.Category1Id = sfFind.Category1IdList;
            sfFind.Rooms = sfFind.RoomsList;
            sfFind.Baths = sfFind.BathsList;
            sfFind.ExtrasId = sfFind.ExtrasIdList;
            var idsPageSemanticText = ['/apartamento-en-arriendo/bogota/castellana-det-5724798.aspx','/apartamento-en-arriendo/bogota/san_rafaelgalan-det-6034343.aspx','/apartamento-en-arriendo/bogota/santa_barbara_oriental-det-5918672.aspx','/apartamento-en-arriendo/bogota/santa_barbara-det-6232295.aspx','/apartamento-en-arriendo/bogota/alcala-det-6238945.aspx','/apartamento-en-arriendo/bogota/castilla-det-6185708.aspx','/apartamento-en-arriendo/bogota/ciudadela_colsubsidio-det-6154473.aspx','/apartamento-en-arriendo/bogota/chico_navarra-det-6173400.aspx','/apartamento-en-arriendo/bogota/aures_sector_planta-det-6232057.aspx','/apartamento-en-arriendo/bogota/chico-det-5889719.aspx','/apartamento-en-arriendo/bogota/barrancas-det-6238883.aspx','/apartamento-en-arriendo/bogota/calleja-det-6238645.aspx','/apartamento-en-arriendo/bogota/pontevedra-det-6238445.aspx','/apartamento-en-arriendo/bogota/minuto_dios-det-6238874.aspx','/apartamento-en-arriendo/bogota/alqueria-det-6140712.aspx','/apartamento-en-arriendo/bogota/carolina-det-5491225.aspx','/apartamento-en-arriendo/bogota/britalia_norte-det-6238855.aspx','/apartamento-en-arriendo/bogota/suba_rincon-det-6238859.aspx','/apartamento-en-arriendo/bogota/pasadena-det-3805306.aspx','/apartamento-en-arriendo/bogota/santa_barbara_occidental-det-6198773.aspx','/apartamento-en-arriendo/bogota/felicidad-det-4884766.aspx','/apartamento-en-arriendo/bogota/ciudad_jardin_sur-det-5145589.aspx','/apartamento-en-arriendo/bogota/casa_blanca_sur-det-5647245.aspx','/apartamento-en-arriendo/bogota/libertad-det-6020253.aspx','/apartamento-en-arriendo/bogota/cabrera-det-5638518.aspx','/apartamento-en-arriendo/bogota/chapinero-det-6238789.aspx','/apartamento-en-arriendo/bogota/batan-det-6238763.aspx','/apartamento-en-arriendo/bogota/chico-det-5840277.aspx','/apartamento-en-arriendo/bogota/cedritos-det-6238738.aspx','/apartamento-en-arriendo/bogota/floresta-det-6144677.aspx','/apartamento-en-arriendo/bogota/santa_barbara-det-6238655.aspx','/apartamento-en-arriendo/bogota/pardo_rubio-det-6238714.aspx','/apartamento-en-arriendo/bogota/siete_agosto-det-6182998.aspx','/apartamento-en-arriendo/bogota/siete_agosto-det-6182897.aspx'];
            var countAdverts = 22139;
            var totalPages = 738;

            InitializeViewModelFilters();
        
            function ShowArrows()
            {
                if(trim($("#div_LastPage").html()) != ""){
                    $("#div_LastPage").show();
                }
                else{
                    $("#div_LastPage").hide();
                }                    
                if(trim($("#div_NextPage").html()) != ""){
                    $("#div_NextPage").show();            
                }
                else{
                    $("#div_NextPage").hide();
                }
                if(countAdverts == 0){
                    $("#paginator_top").hide();
                }
            }

            function PaintSuperiorPaginator(lstData){
                totalPages = Math.ceil(parseInt(lstData.info) / sfFind.PageSize);
                sfFind.PageNumber = parseInt(sfFind.PageNumber);
                if(totalPages > 0)
                {
                    $("#paginator_top").show();
                    $("#span_counter").html(sfFind.PageNumber + " de " + totalPages);
                    var firtsPage = GetFirtsPagePaginator();
                    var lastPage = GetLastPagePaginator();
                    var htmlNextPage = '';
                    var htmlLastPage = '';
                    if (sfFind.PageNumber > firtsPage)
                    {
                        htmlLastPage = '<a href="{Semantic}"  class="ico20 prev-page" onclick="return Grid_PageChanged(\'{PageNumber}\')" ></a>\
                                        <a href="{Semantic}" title="Ir a la pagina Anterior" onclick="return Grid_PageChanged(\'{PageNumber}\')" >Anterior</a>';
                        var pageObject1 = GetPageObject("Anterior", sfFind.PageNumber - 1);
                        htmlLastPage = toHtml(pageObject1,htmlLastPage);
                    }
                    if (sfFind.PageNumber < lastPage)
                    {
                        htmlNextPage = '<a href="{Semantic}" title="Ir a la pagina Siguiente" onclick="return Grid_PageChanged(\'{PageNumber}\')" >Siguiente</a> \
                                        <a href="{Semantic}" class="ico20 next-page" onclick="return Grid_PageChanged(\'{PageNumber}\')" ></a>';                
                        var pageObject2 = GetPageObject("Siguiente", sfFind.PageNumber + 1);                
                        htmlNextPage = toHtml(pageObject2,htmlNextPage);
                    }
                    $("#div_LastPage").html(htmlLastPage);
                    $("#div_NextPage").html(htmlNextPage);
                    ShowArrows();
                }
                else{
                    $("#paginator_top").hide();
                }
            }
            $(document).ready(function() {ShowArrows();});
                       
        