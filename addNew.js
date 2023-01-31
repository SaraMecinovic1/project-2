all = [];

document.getElementById("myBtn").addEventListener("click", function () {
  quoteText = document.getElementById("quoteText").value;
  quoteAuthor = document.getElementById("quoteAuthor").value;
  quoteSource = document.getElementById("quoteSource").value;

  newQuote = {
    quoteText: quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };

  if (quoteAuthor == "") {
    alert("Niste popunili sva polja");
    false;
  }
  if (quoteText == "") {
    alert("Niste popunili sva polja");
    false;
  } else if (quoteSource == "") {
    alert("Niste popunili sva polja");
    false;
  } else {
    document.getElementById("quoteText").value = "";
    document.getElementById("quoteAuthor").value = "";
    document.getElementById("quoteSource").value = "";
  }
  all.push(newQuote); //?
});

console.log(all);
