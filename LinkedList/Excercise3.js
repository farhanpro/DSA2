 
 function formatDate() {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      year = "" + d.getFullYear();
    // if (month.length < 2) month = "0" + month;
    // if (year.length < 2) year = "0" + year;

    return [year,month].join("-");
  }
  md = formatDate();
  console.log('date find', md)