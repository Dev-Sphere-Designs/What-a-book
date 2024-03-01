/**
	Title: customers.js
    Author: Joanna Brumfield
    Team: Dev-Sphere Designs
    Date: 1 March 2024
    Description: MongoDB Shell Scripts for books and customers collections.
 */

// Delete the books and customers collections.
db.books.drop()
db.customers.drop()

// Create books collections using Document Validation.
db.createCollection("books", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                book_name: {
                    bsonType: "string"
                },
                author: {
                    bsonType: "string"
                },
                publisher: {
                    bsonType: "string"
                },
                genre: {
                    bsonType: "string"
                },
                is_ebook: {
                    bsonType: "bool"
                },
                in_stock: {
                    bsonType: "bool"
                },
                qty: {
                    bsonType: "int"
                },
                price: {
                    bsonType: "double"
                }
            }
        }
    }
});

// Create customers collections using Document Validation.
db.createCollection("customers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                username: {
                    bsonType: "string"
                },
                first_name: {
                    bsonType: "string"
                },
                last_name: {
                    bsonType: "string"
                },
                email_address: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "string"
                },
                zip_code: {
                    bsonType: "string"
                },
                wish_list: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        properties: {
                            book_name: {
                                bsonType: "string"
                            },
                            author: {
                                bsonType: "string"
                            },
                            publisher: {
                                bsonType: "string"
                            },
                            genre: {
                                bsonType: "string"
                            },
                            is_ebook: {
                                bsonType: "bool"
                            },
                            in_stock: {
                                bsonType: "bool"
                            },
                            qty: {
                                bsonType: "int"
                            },
                            price: {
                                bsonType: "double"
                            }
                        }
                    }
                }
            }
        }
    }
});

//book list
db.books.insertMany([
    {
        "book_name": "A Christmas Carol",
        "author": "Charles Dickens",
        "publisher": "Chapman & Hall",
        "genre": "Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 12,
        "price": 9.99
    },
    {
        "book_name": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "publisher": " Simon & Schuster",
        "genre": "Historical Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 24,
        "price": 10.99
    },
    {
        "book_name": "Barnaby Rudge",
        "author": "Charles Dickens",
        "publisher": "Simon & Schuster",
        "genre": "Historical Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 6,
        "price": 10.99
    },
    {
        "book_name": "David Copperfield",
        "author": "Charles Dickens",
        "publisher": "Bradbury & Evans",
        "genre": "Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 10,
        "price": 7.99
    },
    {
        "book_name": "Great Expectations",
        "author": "Charles Dickens",
        "publisher": "Simon & Schuster",
        "genre": "Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 14,
        "price": 12.99
    },
    {
        "book_name": "Pirate Latitudes",
        "author": "Michael Crichton",
        "publisher": "Harper",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 7,
        "price": 12.99
    },
    {
        "book_name": "The Hunt for Red October",
        "author": "Tom Clancy",
        "publisher": "Naval Institute Press",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 10,
        "price": 9.99
    },
    {
        "book_name": "Jurassic Park",
        "author": "Michael Crichton",
        "publisher": "Simon & Schuster",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 18,
        "price": 12.99
    },
    {
        "book_name": "The Call of the Wild",
        "author": "Jack London",
        "publisher": "Macmillan & Co.",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 23,
        "price": 9.99
    },
    {
        "book_name": "The Bourne Identity",
        "author": "Robert Ludlum",
        "publisher": "Bantam",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 6,
        "price": 9.99
    },
    {
        "book_name": "The Da Vinci Code",
        "author": "Dan Brown",
        "publisher": "Doubleday Group",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 14,
        "price": 14.99
    },
    {
        "book_name": "The Cloisters: A Novel",
        "author": "Katy Hays",
        "publisher": "Atria Books",
        "genre": "Mystery Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 9,
        "price": 12.99
    },
    {
        "book_name": "The Gunslinger, The Dark Tower",
        "author": "Stephen King",
        "publisher": "Grant, Publisher, Inc.",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 13,
        "price": 15.99
    },
    {
        "book_name": "The Road",
        "author": "Cormac McCarthy",
        "publisher": "Alfred A. Knopf",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 17,
        "price": 12.99
    },
    {
        "book_name": "Treasure Island",
        "author": "Robert Louis Stevenson",
        "publisher": "Simon & Schuster",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 20,
        "price": 9.99
    },
            {
        "book_name": "Twenty Thousand Leagues Under the Sea",
        "author": "Jules Verne",
        "publisher": "Simon & Schuster",
        "genre": "Action and Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 15,
        "price": 12.99
    },
    {
        "book_name": "The Alchemist",
        "author": "Paulo Coelho",
        "publisher": "HarperCollins",
        "genre": "Adventure",
        "is_ebook": true,
        "in_stock": true,
        "qty": 11,
        "price": 9.99
    },
    {
        "book_name": "The Night Circus",
        "author": "Erin Morgenstern",
        "publisher": "Doubleday",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 9,
        "price": 10.99
    },
    {
        "book_name": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "publisher": "G.P. Putnam's Sons",
        "genre": "Mystery & Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 13,
        "price": 12.99
    },
    {
        "book_name": "The Martian",
        "author": "Andy Weir",
        "publisher": "Crown Publishing Group",
        "genre": "Science Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 12,
        "price": 10.99
    },
    {
        "book_name": "Gone Girl",
        "author": "Gillian Flynn",
        "publisher": "Crown Publishing Group",
        "genre": "Thriller",
        "is_ebook": true,
        "in_stock": true,
        "qty": 8,
        "price": 9.99
    },
    {
        "book_name": "The Goldfinch",
        "author": "Donna Tartt",
        "publisher": "Little, Brown and Company",
        "genre": "Literary Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 4,
        "price": 11.99
    },
    {
        "book_name": "Eleanor Oliphant Is Completely Fine",
        "author": "Gail Honeyman",
        "publisher": "Pamela Dorman Books",
        "genre": "Contemporary Fiction",
        "is_ebook": true,
        "in_stock": true,
        "qty": 7,
        "price": 12.99
    },        
    {
        "book_name": "Harry Potter and the Philosopher's Stone",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 13,
        "price": 15.99
    },
    {
        "book_name": "Harry Potter and the Chamber of Secrets",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 12,
        "price": 12.99
    },
    {
        "book_name": "Harry Potter and the Prisoner of Azkaban",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 15,
        "price": 12.99
    },
    {
        "book_name": "Harry Potter and the Goblet of Fire",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 10,
        "price": 10.99
    },
    {
        "book_name": "Harry Potter and the Order of the Phoenix",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 7,
        "price": 15.99
    },
    {
        "book_name": "Harry Potter and the Half-Blood Prince",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 14,
        "price": 14.99
    },
    {
        "book_name": "Harry Potter and the Deathly Hallows",
        "author": "Rowling J.K.",
        "publisher": "Scholastic",
        "genre": "Fantasy",
        "is_ebook": true,
        "in_stock": true,
        "qty": 18,
        "price": 15.99
    } 
])


//customer list
db.customers.insertMany([
    {
        "username": "johnDoe92",
        "first_name": "John",
        "last_name": "Doe",
        "email_address": "johnd@example.com",
        "address": "456 Oak Lane",
        "zip_code": "95673",
        "wish_list": [
            {
                "book_name": "The Martian",
                "author": "Andy Weir",
                "publisher": "Crown Publishing Group",
                "genre": "Science Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 12
            },
            {
                "book_name": "Eleanor Oliphant Is Completely Fine",
                "author": "Gail Honeyman",
                "publisher": "Pamela Dorman Books",
                "genre": "Contemporary Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 7
            }
        ]
    },
    {
        "username": "sarahM1985",
        "first_name": "Sarah",
        "last_name": "Miller",
        "email_address": "s.miller85@example.com",
        "address": "789 Pine Circle",
        "zip_code": "95673",
        "wish_list": [
            {
                "book_name": "Harry Potter and the Prisoner of Azkaban",
                "author": "Rowling J.K.",
                "publisher": "Scholastic",
                "genre": "Fantasy",
                "is_ebook": true,
                "in_stock": true,
                "qty": 15,
                "price": 12.99
            },
            {
                "book_name": "Harry Potter and the Goblet of Fire",
                "author": "Rowling J.K.",
                "publisher": "Scholastic",
                "genre": "Fantasy",
                "is_ebook": true,
                "in_stock": true,
                "qty": 10,
                "price": 10.99
            },
            {
                "book_name": "Harry Potter and the Order of the Phoenix",
                "author": "Rowling J.K.",
                "publisher": "Scholastic",
                "genre": "Fantasy",
                "is_ebook": true,
                "in_stock": true,
                "qty": 7,
                "price": 15.99
            }
        ]
    },
    {
        "username": "mikeB2020",
        "first_name": "Mike",
        "last_name": "Brown",
        "email_address": "mike.brown20@example.com",
        "address": "101 Apple Blvd",
        "zip_code": "95673",
        "wish_list": [
            {
                "book_name": "Jurassic Park",
                "author": "Michael Crichton",
                "publisher": "Simon & Schuster",
                "genre": "Action and Adventure",
                "is_ebook": true,
                "in_stock": true,
                "qty": 18,
                "price": 12.99
            },
            {
                "book_name": "The Call of the Wild",
                "author": "Jack London",
                "publisher": "Macmillan & Co.",
                "genre": "Action and Adventure",
                "is_ebook": true,
                "in_stock": true,
                "qty": 23,
                "price": 9.99
            }
        ]
    },
    {
        "username": "emilyW73",
        "first_name": "Emily",
        "last_name": "Wilson",
        "email_address": "emilyw73@example.com",
        "address": "202 Cherry St",
        "zip_code": "95673",
        "wish_list": [
            {
                "book_name": "The Martian",
                "author": "Andy Weir",
                "publisher": "Crown Publishing Group",
                "genre": "Science Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 12,
                "price": 10.99
            },
            {
                "book_name": "Gone Girl",
                "author": "Gillian Flynn",
                "publisher": "Crown Publishing Group",
                "genre": "Thriller",
                "is_ebook": true,
                "in_stock": true,
                "qty": 8,
                "price": 9.99
            },
            {
                "book_name": "The Goldfinch",
                "author": "Donna Tartt",
                "publisher": "Little, Brown and Company",
                "genre": "Literary Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 4,
                "price": 11.99
            }
        ]
    },
    {
        "username": "alexT88",
        "first_name": "Alex",
        "last_name": "Thompson",
        "email_address": "alext88@example.com",
        "address": "303 Birch Road",
        "zip_code": "95673",
        "wish_list": [
            {
                "book_name": "The Road",
                "author": "Cormac McCarthy",
                "publisher": "Alfred A. Knopf",
                "genre": "Action and Adventure",
                "is_ebook": true,
                "in_stock": true,
                "qty": 17,
                "price": 12.99
            },
            {
                "book_name": "Treasure Island",
                "author": "Robert Louis Stevenson",
                "publisher": "Simon & Schuster",
                "genre": "Action and Adventure",
                "is_ebook": true,
                "in_stock": true,
                "qty": 20,
                "price": 9.99
            }
        ]
    },
    {
        "username": "betty123",
        "first_name": "Betty",
        "last_name": "Callahan",
        "email_address": "bettyc@me.com",
        "address": "123 Maple Street",
        "zip_code": "95656",
        "wish_list": [
            {
                "book_name": "The Cloisters: A Novel",
                "author": "Katy Hays",
                "publisher": "",
                "genre": "Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 4
            },
            {
                "book_name": "The Alchemist",
                "author": "Paulo Coelho",
                "publisher": "",
                "genre": "Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 4
            },
            {
                "book_name": "Harry Potter and the Philosopher's Stone",
                "author": "Rowling J.K",
                "publisher": "",
                "genre": "Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 4
            },
            {
                "book_name": "The Little Prince",
                "author": "Antoine de Saint-Exupéry",
                "publisher": "",
                "genre": "Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 4
            }
        ]
    },
    {
        "username": "oliviaD21",
        "first_name": "Olivia",
        "last_name": "Davis",
        "email_address": "oliviad21@example.com",
        "address": "505 Cedar Lane",
        "zip_code": "95623",
        "wish_list": [
            {
                "book_name": "Where the Crawdads Sing",
                "author": "Delia Owens",
                "publisher": "G.P. Putnam's Sons",
                "genre": "Mystery & Fiction",
                "is_ebook": true,
                "in_stock": true,
                "qty": 13,
                "price": 12.99
            }
        ]
    },
    {
        "username": "ethanJ04",
        "first_name": "Ethan",
        "last_name": "Johnson",
        "email_address": "ethanj04@example.com",
        "address": "606 Spruce Ave",
        "zip_code": "95673",
        "wish_list": [
            {
                "book_name": "The Alchemist",
                "author": "Paulo Coelho",
                "publisher": "HarperCollins",
                "genre": "Adventure",
                "is_ebook": true,
                "in_stock": true,
                "qty": 11,
                "price": 9.99
            },
            {
                "book_name": "The Night Circus",
                "author": "Erin Morgenstern",
                "publisher": "Doubleday",
                "genre": "Fantasy",
                "is_ebook": true,
                "in_stock": true,
                "qty": 9,
                "price": 10.99
            }
        ]
    },
    {
        "username": "sophiaL10",
        "first_name": "Sophia",
        "last_name": "Lee",
        "email_address": "sophial10@example.com",
        "address": "707 Maple Drive",
        "zip_code": "95576",
        "wish_list": []
    },
    {
        "username": "danielK78",
        "first_name": "Daniel",
        "last_name": "King",
        "email_address": "danielk78@example.com",
        "address": "808 Oakwood Terrace",
        "zip_code": "95645",
        "wish_list": []
    }
]);