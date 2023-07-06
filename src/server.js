const express = require("express");
const app = express();
// const Book = require("./books/model");
require("dotenv").config();
require("./db/connection");

const Book = require("./modelBooks/model")


app.use(express.json())
// app.get("/books/getBooks", async (request, response) => {
//     const books = await book.find{};
//     const successResponse = {
//         message: "Response sent Successfully"
//     }
// }
//     const successResponse = {
//         message: "Response sent successfully",
//         book: book
//     }
//     response.send(successResponse);
// })

app.post("/books/addbook", async (request, response) => {
    // response.send("Hello from the post route.")
    console.log(request.body)
    const newBook = await Book.create({
        id: Math.floor(Math.random()*50),// - now we're linking to a DB this will be automatically generated
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    })
    const successResponse = {
        message: "New book successfully added.",
        newBook: newBook
    }
    response.send(successResponse)
    // const newBook = await Book.create({
    //     title: "Harry Potter and the Chamber of Secrets",
    //     author: "J.K. Rowling",
    //     genre: "Fantasy"
    // })
})

// app.put("/books/updatebookauthor", async (request, response) => {
//     response.send("Hello from the update route.")
    // console.log(request.body)
    // const newBook = {
    //     id: Math.floor(Math.random()*50),
    //     title: request.body.title,
    //     author: request.body.author,
    //     genre: request.body.genre
    // }
    // const successResponse = {
    //     message: "New book successfully added.",
    //     newBook: newBook
    // }
    // response.send(successResponse)
    // const newBook = await Book.create({
    //     title: "Harry Potter and the Chamber of Secrets",
    //     author: "J.K. Rowling",
    //     genre: "Fantasy"
    // })
// })


//app.delete("/books", async (request, response) => {
    //response.send("Hello from the delete route.")
    // console.log(request.body)
    // const newBook = {
    //     id: Math.floor(Math.random()*50),
    //     title: request.body.title,
    //     author: request.body.author,
    //     genre: request.body.genre
    // }
    // const successResponse = {
    //     message: "New book successfully added.",
    //     newBook: newBook
    // }
    // response.send(successResponse)
    // const newBook = await Book.create({
    //     title: "Harry Potter and the Chamber of Secrets",
    //     author: "J.K. Rowling",
    //     genre: "Fantasy"
    // })
//})

app.listen(5001, () => console.log("Server is listening"));

// app.use("/books", express.static("books"));
// app.use("/", express.static("anotherRoute"));
// app.use("/mine", express.static("thisIsMyRoute"));
// app.use("/anotherOne", express.static("yetAnotherRoute"));

// app.get("/book", (request, response) => {
//     response.send("Hello from the book route.")
// })
// app.get("/", (request, response) => {
//     response.send("Hello from another route.")
// })
// app.get("/thisIsMyRoute", (request, response) => {
//     response.send("Hello from MY route.")
// })
// app.get("/yetAnotherRoute", (request, response) => {
//     response.send("Hello from DJ Khaled's route.")
// })

