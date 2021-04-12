//tealium universal tag - utag.89 ut4.0.202006081434, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var FincaRaiz=FincaRaiz||{};FincaRaiz.Tealium=function(){var Utils=function(){};Utils.prototype.constructor=Utils;Utils.prototype={normalizeValue:function(value,delimiter,initDelimiter,begin){var result='';try{if(typeof(value)!='undefined'){value=value.toString();if(value.length>0){var idxc=value.indexOf(delimiter);var initIdx=initDelimiter?value.indexOf(initDelimiter)+1:0;if(begin)
result=value.substring(0,initIdx-1).trim();else if(idxc>0)
result=value.substring(initIdx,idxc).trim();else if(initIdx>0)
result=value.split(initDelimiter)[1].trim()
else
result=value;}}}
catch(error){console.log('ERROR in Finca.Utils.normalizeValue => '+error);utag.DB(error);}
return result;},setEmptyValue:function(value){var result='';try{result=typeof(value)=='undefined'?'':value;}
catch(error){console.log('ERROR in Finca.Utils.setEmptyValue => '+error);utag.DB(error);}
return result;},showPopup:function(pagetype){try{console.log("POPUP");}
catch(error){console.log('ERROR in Finca.Utils.showPopup => '+error);utag.DB(error);}},pulseNumberCalled:function(){try{console.log('Number called');}
catch(error){console.log('ERROR in Finca.Utils.pulseNumberCalled => '+error);utag.DB(error);}},pulseNumberDisplayed:function(){try{console.log('Number displayed');}
catch(error){console.log('ERROR in Finca.Utils.pulseNumberDisplayed => '+error);utag.DB(error);}},pulseReplySubmitted:function(){try{console.log('Reply submitted');}
catch(error){utag.DB(error);console.log('ERROR IN Finca.Utils.pulseReplySubmitted => '+error);}},pulseAdDeleted:function(){try{console.log('Ad deleted');}
catch(error){console.log('ERROR in Finca.Utils.pulseAdDeleted => '+error);utag.DB(error);}}}
this.Utils=new Utils();};var Tealium=new FincaRaiz.Tealium();