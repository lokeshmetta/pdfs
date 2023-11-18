window.addEventListener('load', () => {
    let api = "https://api.covid19api.com/summary";
    let table = document.getElementById("data");
    var table1 = document.getElementById("table1");
    const refresh = document.getElementById("refresh");
    const countries = [];
    console.log(table1);

    initialize();
    function initialize() {
        fetch(api)
          .then(response => {
            // console.log(response);
            return response.json();
          })
          .then(data => {
            countries.push(...data.Countries);
            console.log(countries);
            console.log(countries[1].Country);
      
            for (var i = 0; i < countries.length; i++) {
              var country = countries[i];
              var row = table1.insertRow(-1); // -1 to append at end of table
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              var cell4 = row.insertCell(3);
              cell1.innerHTML = country.Country;
              cell2.innerHTML = country.TotalConfirmed;
              cell3.innerHTML = country.TotalDeaths;
              cell4.innerHTML = country.TotalConfirmed;
            }
          });
      }
    refresh.addEventListener('click', () => {
        table.innerHTML = '';
        initialize();
    })

});