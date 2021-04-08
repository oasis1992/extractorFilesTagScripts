
            var cEmail = "";
            var cName = "";
            var cPhone = "";
            var cCity  = "";            
            var cCategoryGroup =  "1";
            var contactToken = '538ECD8F2278A18E3538ABC6D81A997A907FE8C602BA9B965F539261F46441DEA42A0B0EAF74BCF3';
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
            var idsPageSemanticText = ['/apartamento-en-arriendo/bogota/santa_isabel-det-6070373.aspx','/apartamento-en-arriendo/bogota/ciudad_alsacia-det-6200303.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-6169410.aspx','/apartamento-en-arriendo/bogota/las_flores-det-6200235.aspx','/apartamento-en-arriendo/bogota/cedritos-det-6239123.aspx','/apartamento-en-arriendo/bogota/salitre-det-6238379.aspx','/apartamento-en-arriendo/bogota/tibana-det-6239117.aspx','/apartamento-en-arriendo/bogota/las_nieves-det-5679618.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-5981443.aspx','/apartamento-en-arriendo/bogota/villas_del_dorado-det-6239113.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-6239105.aspx','/apartamento-en-arriendo/bogota/villas_del_dorado-det-6239099.aspx','/apartamento-en-arriendo/bogota/santa_teresa-det-6236611.aspx','/apartamento-en-arriendo/bogota/nueva_autopista-det-6239090.aspx','/apartamento-en-arriendo/bogota/cedro_golf-det-6169244.aspx','/apartamento-en-arriendo/bogota/britalia_norte-det-6239075.aspx','/apartamento-en-arriendo/bogota/santa_isabel-det-6239073.aspx','/apartamento-en-arriendo/bogota/minuto_dios-det-6074211.aspx','/apartamento-en-arriendo/bogota/santa_barbara-det-6239067.aspx','/apartamento-en-arriendo/bogota/ciudad_alsacia-det-6239069.aspx','/apartamento-en-arriendo/bogota/tibabita-det-6239068.aspx','/apartamento-en-arriendo/bogota/santa_barbara_central-det-5979022.aspx','/apartamento-en-arriendo/bogota/ciudad_salitre-det-5782521.aspx','/apartamento-en-arriendo/bogota/pontevedra-det-5475873.aspx','/apartamento-en-arriendo/bogota/los_rosales-det-6239047.aspx','/apartamento-en-arriendo/bogota/granja-det-6239039.aspx','/apartamento-en-arriendo/bogota/modelo-det-6239008.aspx','/apartamento-en-arriendo/bogota/los_rosales-det-6239002.aspx','/apartamento-en-arriendo/bogota/candelaria-det-6238997.aspx','/apartamento-en-arriendo/bogota/los_rosales-det-6225597.aspx','/apartamento-en-arriendo/bogota/castilla-det-6188206.aspx','/apartamento-en-arriendo/bogota/chapinero_central-det-6238989.aspx','/apartamento-en-arriendo/bogota/suba-det-6238987.aspx','/apartamento-en-arriendo/bogota/suba_salitre-det-6238973.aspx'];
            var countAdverts = 22158;
            var totalPages = 739;

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
                       
        