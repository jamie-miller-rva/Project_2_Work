
d3.json("cbb_2019.json").then((cbbData) => {
    data = cbbData.data;
    console.log(data);

    var confs = data.map(function(team) {
      return team[0];
    });
    console.log(confs);

    var teams = data.map(function(team){
        return team[1];
    });
    console.log("teams", teams);

    var perc_wins = data.map(function(team) {
        return team[2];
    });
    console.log("perc_wins", perc_wins);

    // make a plotly chart
    var data = [
        {
          x: teams,
          y: perc_wins,
          text: teams,
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('myDiv', data);
});    
