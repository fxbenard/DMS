!function ($) {

$.plExtend = {
	
	btnActions: function(){
		
		$('.btn-theme-activate').on('click', function(){
			var args = {
					mode: 'themes'
				,	run: 'activate'
				,	confirm: true
				,	confirmText: '<h3>Are you sure?</h3> <p>This will activate this theme sitewide.</p>'
				,	savingText: 'Activating Theme'
				,	refresh: true
				,	refreshText: 'Successfully Activated. Refreshing page'
				, 	log: true
				,	stylesheet: $(this).data('stylesheet')
			}
			
			var response = $.plAJAX.run( args )
		})
		
		$('.btn-theme-preview').on('click', function(){
			var args = {
					mode: 'themes'
				,	run: 'preview'
				,	confirm: true
				,	confirmText: '<h3>Activate Theme Preview?</h3> <p>This will activate a theme preview sitewide.<br/>(while in draft mode)</p>'
				,	savingText: 'Loading Theme Preview'
				,	refresh: false
				,	refreshText: 'Successfully Loaded. Refreshing page'
				, 	log: true
				,	stylesheet: $(this).data('stylesheet')
			}
			
			var response = $.plAJAX.run( args )
		})
	
	}
	, actionButtons: function( data ){
		var buttons = ''
		,	theme = sprintf('data-stylesheet="%s"', data.stylesheet)
		
		buttons += sprintf('<a href="#" class="btn btn-primary btn-theme-activate" %s><i class="icon-bolt"></i> Activate</a> ', theme)
		
	
		
		return buttons
	}

}

}(window.jQuery);