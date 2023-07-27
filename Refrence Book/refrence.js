// Sample book data
var books = [
  {
    title: "Mechanics Vol-1",
    author: "DC Pandey",
    pdf: "https://drive.google.com/file/d/1Z3_cxC4ahhNV4_wpVrJgKcJLnL6I3Ml6/view?usp=sharing"
  },
  {
    title: "Mechanics Vol-2",
    author: "DC Pandey",
    pdf: "https://drive.google.com/file/d/1wvb2BEwAmSxCLktxDHivY4T4PgcL8unC/view?usp=drive_link"
  },
  {
    title: "Wave and Thermodynamic",
    author: "DC Pandey",
    pdf: "https://drive.google.com/file/d/1yYeNbZ_XWDcv_3dkrP9Z3CAFCW13KCAE/view?usp=drive_link"
  },
  {
    title: "Electricity and Magnetism",
    author: "DC Pandey",
    pdf: "https://drive.google.com/file/d/1_Bni1_V-TJgpHmLyblcKBUClJHgJx4Bb/view?usp=drive_link"
  },
  {
    title: "Optics and Modern Physics",
    author: "DC Pandey",
    pdf: "https://drive.google.com/file/d/1I4r8ykLCrQGagn4Vg78E0YttJfFTTl8Y/view?usp=drive_link"
  },
  {
    title: "IE Irodov",
    author: "IE Irodov",
    pdf: "https://drive.google.com/file/d/1y-SzJzaPvQ16KG496dsJa2EgfrsBJQuQ/view?usp=drive_link"
  }
];

// Function to perform the search
function searchBooks() {
  var searchInput = document.getElementById("searchInput").value;
  var searchResults = document.getElementById("searchResults");

  // Clear previous results
  searchResults.innerHTML = "";

  // Perform the search
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    if (
      book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      book.author.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      var result = document.createElement("div");
      result.classList.add("book-result");

      var title = document.createElement("p");
      title.classList.add("book-title");
      title.textContent = "Title: " + book.title;
      result.appendChild(title);

      var author = document.createElement("p");
      author.textContent = "Author: " + book.author;
      result.appendChild(author);

      var pdfLink = document.createElement("a");
      pdfLink.href = book.pdf;
      pdfLink.textContent = "View PDF";
      result.appendChild(pdfLink);

      searchResults.appendChild(result);
    }
  }
}
