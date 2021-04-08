
            var cEmail = "";
            var cName = "";
            var cPhone = "";
            var cCity  = "";            
            var cCategoryGroup =  "1";
            var contactToken = '20428AFCF27E0A155F7ADF965BA032E9AA9C45B5ADEC8D962A57C5B068AC59C7A56A5F6477D6CCCC';
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
            var idsPageSemanticText = ['/apartamento-en-arriendo/bogota/chico-det-6132311.aspx','/apartamento-en-arriendo/bogota/centro-det-5881024.aspx','/apartamento-en-arriendo/bogota/virrey-det-5697531.aspx','/apartamento-en-arriendo/bogota/zona_norte-det-5931491.aspx','/apartamento-en-arriendo/bogota/cedritos-det-6042057.aspx','/apartamento-en-arriendo/bogota/chico_norte-det-6127831.aspx','/apartamento-en-arriendo/bogota/chapinero_central-det-6070376.aspx','/apartamento-en-arriendo/bogota/zona_norte-det-6206608.aspx','/apartamento-en-arriendo/bogota/usatama-det-5909154.aspx','/apartamento-en-arriendo/bogota/san_vicente_ferrer_tunjuelito-det-6239990.aspx','/apartamento-en-arriendo/bogota/marly-det-6239981.aspx','/apartamento-en-arriendo/bogota/santa_barbara-det-6062689.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-6173064.aspx','/apartamento-en-arriendo/bogota/cedritos_usaquen-det-6010967.aspx','/apartamento-en-arriendo/bogota/libertador-det-6239920.aspx','/apartamento-en-arriendo/bogota/normandia-det-6239907.aspx','/apartamento-en-arriendo/bogota/chico_navarra-det-6239497.aspx','/apartamento-en-arriendo/bogota/chico-det-6125749.aspx','/apartamento-en-arriendo/bogota/chapinero_alto-det-5722970.aspx','/apartamento-en-arriendo/bogota/san_antonio-det-5850975.aspx','/apartamento-en-arriendo/bogota/alqueria-det-6079541.aspx','/apartamento-en-arriendo/bogota/normandia-det-6239837.aspx','/apartamento-en-arriendo/bogota/santa_cecilia-det-6228971.aspx','/apartamento-en-arriendo/bogota/santa_barbara_occidental-det-6181543.aspx','/apartamento-en-arriendo/bogota/ciudadela_colsubsidio-det-6126626.aspx','/apartamento-en-arriendo/bogota/chico_reservado-det-6069469.aspx','/apartamento-en-arriendo/bogota/felicidad-det-5945000.aspx','/apartamento-en-arriendo/bogota/pasadena-det-6239818.aspx','/apartamento-en-arriendo/bogota/chico-det-6155865.aspx','/apartamento-en-arriendo/bogota/san_patricio-det-6155736.aspx','/apartamento-en-arriendo/bogota/cedro_golf-det-6090825.aspx','/apartamento-en-arriendo/bogota/chico-det-6175376.aspx','/apartamento-en-arriendo/bogota/felicidad-det-6239781.aspx','/apartamento-en-arriendo/bogota/florida-det-6239776.aspx'];
            var countAdverts = 22137;
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
                       
        