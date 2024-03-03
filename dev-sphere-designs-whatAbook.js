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
db.books.aggregate([
    { $sort: { genre: 1 }}
])

// display book collection by author
db.books.aggregate([
    { $sort: { author: 1 }}
])

// display book collection by bookId
db.books.aggregate([
    { $sort: { bookId: 1 }}
])

// display wishlist by customerId
db.customers.aggregate([
    { $sort: { username: 1}}
])

// add books to customer's wishlist
db.customers.aggregate([
    {
        //Find customer document
        $match: {
            username: "username"
        }
    },
    {
        //Join collections
        $lookup: {
            from: "books",
            localField: "wish_list.book_name",
            foreignField: "book_name",
            as: "book_docs"
        }
    },
    {
        //Having some issues here
        $merge: {

        }
    }
])

// remove book from customer's wishlist