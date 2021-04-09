googletag.cmd.push(function() {
	googletag.pubads().enableAsyncRendering();
	googletag.pubads().enableSingleRequest();
	googletag.pubads().setCentering(true);
	
	googletag.enableServices();
	googletag.pubads().collapseEmptyDivs();
	googletag.pubads().addEventListener('slotRenderEnded', function(event) { AdsBuildInProcess(event.isEmpty, event.slot.getSlotElementId());  }); 
});