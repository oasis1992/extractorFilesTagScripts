
            var cEmail = "";
            var cName = "";
            var cPhone = "";
            var cCity  = "";            
            var cCategoryGroup =  "1";
            var contactToken = '3B0BD79DA8D60806A471DAA4CC41ABA4C5FC3AF73A2577142A57A209099BE278B5C867076A09E0B4';
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
            var idsPageSemanticText = ['/apartamento-en-arriendo/bogota/macarena-det-6090429.aspx','/apartamento-en-arriendo/bogota/chico-det-5972178.aspx','/apartamento-en-arriendo/bogota/bilbao-det-5853785.aspx','/apartamento-en-arriendo/bogota/ciudad_alsacia-det-6200303.aspx','/apartamento-en-arriendo/bogota/horizontes_norte-det-6242279.aspx','/apartamento-en-arriendo/bogota/chapinero-det-6242242.aspx','/apartamento-en-arriendo/bogota/rionegro-det-6242233.aspx','/apartamento-en-arriendo/bogota/cedritos-det-6242224.aspx','/apartamento-en-arriendo/bogota/suba_las_mercedes-det-6242210.aspx','/apartamento-en-arriendo/bogota/zona_noroccidente-det-6242202.aspx','/apartamento-en-arriendo/bogota/bella_suiza-det-5993550.aspx','/apartamento-en-arriendo/bogota/hayuelos-det-6242192.aspx','/apartamento-en-arriendo/bogota/bella_suiza-det-5993548.aspx','/apartamento-en-arriendo/bogota/nueva_autopista-det-6242172.aspx','/apartamento-en-arriendo/bogota/santa_teresa-det-6236611.aspx','/apartamento-en-arriendo/bogota/nueva_castilla-det-6242154.aspx','/apartamento-en-arriendo/bogota/madelena-det-6242152.aspx','/apartamento-en-arriendo/bogota/minuto_dios-det-6074211.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-6175995.aspx','/apartamento-en-arriendo/bogota/cortijo-det-6200408.aspx','/apartamento-en-arriendo/bogota/las_ferias-det-6242139.aspx','/apartamento-en-arriendo/bogota/galerias-det-6242128.aspx','/apartamento-en-arriendo/bogota/multicentro-det-6242115.aspx','/apartamento-en-arriendo/bogota/colina_campestre-det-6161086.aspx','/apartamento-en-arriendo/bogota/chico-det-6060011.aspx','/apartamento-en-arriendo/bogota/marsella-det-6242094.aspx','/apartamento-en-arriendo/bogota/batan-det-6242081.aspx','/apartamento-en-arriendo/bogota/rosales-det-6241604.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-5978690.aspx','/apartamento-en-arriendo/bogota/chapinero-det-6242021.aspx','/apartamento-en-arriendo/bogota/chico_navarra-det-6173400.aspx','/apartamento-en-arriendo/bogota/santa_barbara_oriental-det-5018976.aspx','/apartamento-en-arriendo/bogota/suba_salitre-det-6242000.aspx','/apartamento-en-arriendo/bogota/bogota-det-6241995.aspx'];
            var countAdverts = 22136;
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
                       
        