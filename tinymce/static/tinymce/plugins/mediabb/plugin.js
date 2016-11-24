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

	editor.addButton('image', {
		icon: 'image',
		onclick: showWindow('Вставка изображения по ID', 'image')
	});
	editor.addButton('gallery', {
		icon: 'gallery',
		onclick: showWindow('Вставка галереи по ID', 'gallery')
	});
	editor.addButton('video', {
		icon: 'media',
		onclick: showWindow('Вставка видео по ID', 'video')
	});
});
