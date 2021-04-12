
            var cEmail = "";
            var cName = "";
            var cPhone = "";
            var cCity  = "";            
            var cCategoryGroup =  "1";
            var contactToken = 'AF215EBA85EFBC3782197EE4F3368434C3DC2E3FF1B20B071BCD8B2210307B480062C4EFF0A1B5D7';
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
            var idsPageSemanticText = ['/apartamento-en-arriendo/bogota/los_rosales-det-6135694.aspx','/apartamento-en-arriendo/bogota/nicolas_federman-det-6201092.aspx','/apartamento-en-arriendo/bogota/los_rosales-det-6027173.aspx','/apartamento-en-arriendo/bogota/quinta_paredes-det-6200902.aspx','/apartamento-en-arriendo/bogota/las_delicias_del_carmen-det-5940710.aspx','/apartamento-en-arriendo/bogota/kennedy_central-det-6214662.aspx','/apartamento-en-arriendo/bogota/niza-det-6224884.aspx','/apartamento-en-arriendo/bogota/cedro_golf-det-6245396.aspx','/apartamento-en-arriendo/bogota/las_margaritas-det-6240103.aspx','/apartamento-en-arriendo/bogota/pasadena-det-6241322.aspx','/apartamento-en-arriendo/bogota/bella_suiza-det-6169113.aspx','/apartamento-en-arriendo/bogota/nueva_autopista-det-6250991.aspx','/apartamento-en-arriendo/bogota/local_barrio_venecia_diagonal_sur-det-6246153.aspx','/apartamento-en-arriendo/bogota/santa_barbara_oriental-det-6250936.aspx','/apartamento-en-arriendo/bogota/bosa-det-6250932.aspx','/apartamento-en-arriendo/bogota/espanola-det-6250919.aspx','/apartamento-en-arriendo/bogota/cedritos-det-6250929.aspx','/apartamento-en-arriendo/bogota/san_luis_patios-det-6250922.aspx','/apartamento-en-arriendo/bogota/galerias-det-5704830.aspx','/apartamento-en-arriendo/bogota/chico_norte-det-6144144.aspx','/apartamento-en-arriendo/bogota/cedritos-det-5012908.aspx','/apartamento-en-arriendo/bogota/quiroga_central-det-6250884.aspx','/apartamento-en-arriendo/bogota/cedritos-det-5778552.aspx','/apartamento-en-arriendo/bogota/belmira-det-5780667.aspx','/apartamento-en-arriendo/bogota/castilla-det-5921292.aspx','/apartamento-en-arriendo/bogota/san_luis_patios-det-6216477.aspx','/apartamento-en-arriendo/bogota/castilla-det-6250874.aspx','/apartamento-en-arriendo/bogota/villas_granada-det-6161837.aspx','/apartamento-en-arriendo/bogota/santa_teresa-det-6236611.aspx','/apartamento-en-arriendo/bogota/mazuren-det-6241669.aspx','/apartamento-en-arriendo/bogota/chico_norte-det-6249715.aspx','/apartamento-en-arriendo/bogota/bonanza-det-6250851.aspx','/apartamento-en-arriendo/bogota/portales_del_norte-det-6206327.aspx','/apartamento-en-arriendo/bogota/santa_paula-det-6084936.aspx'];
            var countAdverts = 22183;
            var totalPages = 740;

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
                       
        