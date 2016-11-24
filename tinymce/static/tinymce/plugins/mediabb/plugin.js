tinymce.PluginManager.add('mediabb', function(editor, url) {
	function showWindow(title, tag) {
		editor.windowManager.open({
			title: title,
			body: [
				{type: 'textbox', name: 'ID', label: 'ID'}
			],
			onsubmit: function(e) {
				editor.insertContent('[[' + tag + ':' + e.data.ID + ']]');
			}
		});
	}

	editor.addButton('mbimage', {
		icon: 'image',
		onclick: function() { showWindow('Вставка изображения по ID', 'image'); }
	});
	editor.addButton('mbgallery', {
		icon: 'browse',
		onclick: function() { showWindow('Вставка галереи по ID', 'gallery'); }
	});
	editor.addButton('mbvideo', {
		icon: 'media',
		onclick: function() { showWindow('Вставка видео по ID', 'video'); }
	});
});
