/*
============================================
; Title:  dev-sphere-designs-whatAbook.js
; Author: Professor Krasso
; Date: 03.03.2024
; Modified by: Cody Skelton
; Description: WhatABook Database Queries
;===========================================
*/

// display entire book collection
db.books.find()

// display book collection by genre
db.books.aggregate([{
    $sort: {
        genre: 1
    }
}])

// display book collection by author
db.books.aggregate([{
    $sort: {
        author: 1
    }
}])

// display book collection by bookId
db.books.aggregate([{
    $sort: {
        bookId: 1
    }
}])

// display wishlist by customerId
db.customers.aggregate([{
    $sort: {
        username: 1
    }
}])


let book = db.books.findOne({_id: ObjectId('65e23919fe0e7fb6b77bc569')});
let user = db.customers.findOne({"username": "oliviaD21"});

// add books to customer's wishlist
db.customers.updateOne({
    "username": user.username
}, {
    $push: {
        wish_list: 
        {
           book
        }
    }
});

// remove book from customer's wishlist
db.customers.updateOne({
    "username": user.username
}, {
    $pull: {
        wish_list: 
        {
           book
        }
    }
});