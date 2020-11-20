class table {
    function createTable() {
        app.get('/', (req, res) => {

          let obj = { 1: 'one', 2: 'two', 3: 'three' }

          let result = '<table>';
          for (let el in obj) {
            result += "<tr><td>" + el + "</td><td>" + obj[el] + "</td></tr>";
          }
          result += '</table>';

          res.send(result);

        })
    }
}

