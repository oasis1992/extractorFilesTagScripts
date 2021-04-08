
            var cEmail = "";
            var cName = "";
            var cPhone = "";
            var cCity  = "";            
            var cCategoryGroup =  "1";
            var contactToken = 'EF140D8A4E452157C8F8564C2ED8F18181BCE83E3989B484BFB12281CCD3B878C6F2DCAED5974722';
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
            var idsPageSemanticText = ['/apartamento-en-arriendo/bogota/santa_helenita-det-6195280.aspx','/apartamento-en-arriendo/bogota/marsella-det-6197227.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-6178620.aspx','/apartamento-en-arriendo/bogota/palermo-det-6103471.aspx','/apartamento-en-arriendo/bogota/felicidad-det-6240966.aspx','/apartamento-en-arriendo/bogota/lisboa_suba-det-6240954.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-6240931.aspx','/apartamento-en-arriendo/bogota/garces_navas-det-6231274.aspx','/apartamento-en-arriendo/bogota/quiroga-det-6240917.aspx','/apartamento-en-arriendo/bogota/santa_barbara-det-5892430.aspx','/apartamento-en-arriendo/bogota/castellana-det-6127842.aspx','/apartamento-en-arriendo/bogota/bosque_popular-det-6240909.aspx','/apartamento-en-arriendo/bogota/villas_granada-det-6097968.aspx','/apartamento-en-arriendo/bogota/felicidad-det-6154831.aspx','/apartamento-en-arriendo/bogota/los_rosales-det-4235807.aspx','/apartamento-en-arriendo/bogota/santa_barbara_alta-det-4235821.aspx','/apartamento-en-arriendo/bogota/castilla-det-6240896.aspx','/apartamento-en-arriendo/bogota/rincon_suba-det-6240894.aspx','/apartamento-en-arriendo/bogota/colina_campestre-det-6240885.aspx','/apartamento-en-arriendo/bogota/minuto_dios-det-6240868.aspx','/apartamento-en-arriendo/bogota/victoria_norte-det-6240861.aspx','/apartamento-en-arriendo/bogota/santa_barbara-det-5179251.aspx','/apartamento-en-arriendo/bogota/paloquemao-det-6062899.aspx','/apartamento-en-arriendo/bogota/riviera-det-6240810.aspx','/apartamento-en-arriendo/bogota/alameda_usaquen-det-6240696.aspx','/apartamento-en-arriendo/bogota/cedritos-det-5763672.aspx','/apartamento-en-arriendo/bogota/chico-det-6146219.aspx','/apartamento-en-arriendo/bogota/chico_navarra-det-6240786.aspx','/apartamento-en-arriendo/bogota/eduardo_santos-det-5896154.aspx','/apartamento-en-arriendo/bogota/los_rosales-det-6240774.aspx','/apartamento-en-arriendo/bogota/parque_central_bavaria-det-6240772.aspx','/apartamento-en-arriendo/bogota/tierra_buena-det-6240769.aspx','/apartamento-en-arriendo/bogota/chico_reservado-det-6109368.aspx','/apartamento-en-arriendo/bogota/barrancas-det-6240739.aspx'];
            var countAdverts = 22129;
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
                       
        