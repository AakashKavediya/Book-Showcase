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
  },
  {
    title: "M.S Chouhan-inorganic",
    author: "M.S Chouhan",
    pdf: "https://drive.google.com/file/d/1rzyriqZwQj-JbcfqmncnGRdHiu5Qe4_s/view?usp=drive_link"
  },
  {
    title: "M.S Chouhan-Organic",
    author: "M.S Chouhan",
    pdf: "https://drive.google.com/file/d/1rzJJ6b5dlqTuB5tduyQocAmUgT_ZKrdX/view?usp=drive_link"
  },
  {
    title: "GRB OP Tandon Inorganic",
    author: "Tandon",
    pdf: "https://drive.google.com/file/d/1EG-ar5FhVfuEI2ecNrdep1nMqr3FqdcV/view?usp=drive_link"
  },,
  {
    title: "GRB OP Tandon Organic",
    author: "Tandon",
    pdf: "https://drive.google.com/file/d/1EFoyqcDyY9g37FBJfL6ELwMSyL1sfFrG/view?usp=drive_link"
  },,
  {
    title: "GRB OP Tandon Physical",
    author: "Tandon",
    pdf: "https://drive.google.com/file/d/1EHqjNBINy7DTrWtCuAEFTteH-_7TbV0e/view?usp=drive_link"
  },
  {
    title: "RK Gupta-Oragnic",
    author: "RK Gupta",
    pdf: "https://drive.google.com/file/d/103Vtrgl3xSWfs_rpWjijSu-mFX3-NieM/view?usp=drive_link"
  },,
  {
    title: "RK Gupta-Inoragnic",
    author: "RK Gupta",
    pdf: "https://drive.google.com/file/d/107A6pxy_rNbO4jyiFBitR9gWvbExMY04/view?usp=drive_link"
  },,
  {
    title: "RK Gupta-Physical",
    author: "RK Gupta",
    pdf: "https://drive.google.com/file/d/107cFA2zNjV2chbGxOrdvRO_jBWD8bwga/view?usp=drive_link"
  },
  {
    title: "Black Book",
    author: "Ashish Mishra",
    pdf: "https://drive.google.com/file/d/1Ah-4tfnae9CcOCD30sTvtksu4mJ6YjAv/view?usp=drive_link"
  },
  {
    title: "VK Jaiswal",
    author: "VK Jaiswal",
    pdf: "https://drive.google.com/file/d/1AiLr-1hddQNIlrA8EA_2IlcxlgOvRI_o/view?usp=drive_link"
  },
  {
    title: "Allen Modules-Chemistry",
    author: "Allen",
    pdf: "https://drive.google.com/drive/folders/1XI8G1PcKfyQImbS1l1srCBOwl7zpM3f6?usp=drive_link"
  },
  {
    title: "Allen Module-Physics",
    author: "Allen",
    pdf: "https://drive.google.com/drive/folders/1zScxAlB57zp8qUyw4wN8MxOKmfxMp6bC?usp=drive_link"
  },
  {
    title: "Allen Module-Maths",
    author: "Allen",
    pdf: "https://drive.google.com/drive/folders/1SLv5UzoIqZkctSsi1n9CsGinYoSk1PDF?usp=drive_link"
  },
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
