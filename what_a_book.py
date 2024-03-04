#
# Title: what_a_book.py
# Author: Cody Skelton
# Edited by: Joanna Brumfield
# Date: 03.03.2024
# Purpose: What-A-Book Project Mainline 
# Requirements from WEB 335 WhatABook Business Requirements
# Code sources from Python Guide, courtesy of Professor Krasso
#


#import MongoClient
from pymongo import MongoClient
import certifi
from bson import ObjectId
import json

ca = certifi.where()

# build connection string
# substitute own connection string here
client = MongoClient("mongodb+srv://web335_admin:s3cret@whatabookdb.ff1ouoz.mongodb.net/whatABookDB?retryWrites=true&w=majority", tlsCAFile=ca)

# configure variable to access whatABook collection
# substitute own database name here
db = client['whatABookDB']

# Display a list of books. Format the output so it is easy to read.
# print("Complete Book List: ")
# for books in db.books.find():
#   print(json.dumps(books, indent=3, default=str))
  
# Display a list of books by Genre. For this requirement, supply the user with a list of genre choices 
# and display the appropriate books based on their selection
# Want to figure out how to do search with $or since some genres in collection have two keywords ('Action and Adventure', etc) 
genre = input("Enter a Genre (e.g., 'Fiction', 'Fantasy', 'Action and Adventure'):")
print("Results for:", genre.capitalize())
for books in db.books.find({"genre": {"$regex": f'^{genre}$', "$options": "i"}}):
  print(json.dumps(books, indent=3, default=str))

# Write a query to display a wishlist by customerId.
# For this requirement, prompt the user to enter a customerId (c1007, c1008, or c1009) and display the appropriate wishlist.
# Add basic error handling to account for an invalid customerId 

# Write a query to add a book to a customer’s wishlist.

# Write a query to remove a book from a customer’s wishlist. 

# start mainline here