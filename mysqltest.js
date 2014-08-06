var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'wordpress-free.cm6jrr76me8k.us-east-1.rds.amazonaws.com',
	user     : 'zechery',
	password : '',
});

connection.connect();

var query = connection.query('SELECT * FROM wordpress.wp_users');
query
  .on('error', function(err) {
    // Handle error, an 'end' event will be emitted after this as well
  })
  .on('fields', function(fields) {
    // the field packets for the rows to follow
  })
  .on('result', function(row) {
    // Pausing the connnection is useful if your processing involves I/O
    connection.pause();

    processRow(row, function() {
      connection.resume();
    });
  })
  .on('end', function() {
    // all rows have been received
  });

connection.end();

// process mysql result row
function processRow(row) {
	console.log(row);
}
