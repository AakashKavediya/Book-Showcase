// Sample book data
var books = [{
        title: "Book 1",
        author: "Author 1",
        pdf: "/BookStore/Arihant Bitsat Prep Guide (crackjee.xyz) (1).pdf"
    },
    {
        title: "Book 2",
        author: "Author 2",
        pdf: "book2.pdf"
    },
    {
        title: "Book 3",
        author: "Author 3",
        pdf: "book3.pdf"
    },
    {
        title: "Book 4",
        author: "Author 4",
        pdf: "book4.pdf"
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