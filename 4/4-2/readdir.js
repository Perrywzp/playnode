fs.readdir(path.join(__dirname, '..'), function(err, files) {
	files.forEach(function(filename, index) {
		fs.readFile(filename, 'utf8', function(err, file) {
			//TODO
		});
	});
});

fs.readFile(template_path, 'utf8', function(err, template) {
	db.qurey(sql, function(err, data) {
		l10n.get(function(err, resources) {
			//TODO
		});
	});
});