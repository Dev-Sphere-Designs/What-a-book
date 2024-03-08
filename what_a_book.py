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
import pprint

ca = certifi.where()

# build connection string
# substitute own connection string here
client = MongoClient("mongodb+srv://web335_admin:s3cret@whatabookdb.ff1ouoz.mongodb.net/whatABookDB?retryWrites=true&w=majority", tlsCAFile=ca)

# configure variable to access whatABook collection
# substitute own database name here
db = client['whatABookDB']

# 1. Display a list of books. Format the output so it is easy to read.

def display_book_collection():
  print("Complete Book List: ")
  for books in db.books.find():
    pprint.pprint(books)
    print("\n")
  
# 2. Display a list of books by Genre. For this requirement, supply the user with a list of genre choices 
# and display the appropriate books based on their selection

def display_by_genre():
  genre = input("Enter a Genre (e.g., 'Fiction', 'Fantasy', 'Action and Adventure'): ")
  print("Results for:", genre.capitalize())
  for books in db.books.find({"genre": {"$regex": f'^{genre}$', "$options": "i"}}):
    pprint.pprint(books)
    print("\n")

# 3. Write a query to display a wishlist by customerId.
# For this requirement, prompt the user to enter a customerId (c1007, c1008, or c1009) and display the appropriate wishlist.
# Add basic error handling to account for an invalid customerId 
def display_customer_wishlist():
    cid = input("Enter your username: ")

    user = db.customers.find({"username": cid}, {"_id": 0, "wish_list": 1})

    # the first part of this isn't working properly
    if user is None:
      print("Invalid username. Please try again")
    else:
      for wish_list in user:
        pprint.pprint(wish_list)

# 4. Write a query to add a book to a customer’s wishlist.

# 5. Write a query to remove a book from a customer’s wishlist. 

# start mainline here
def main():
  print("Welcome to WhatABook. Please select from the following options:")
  print("1: Display all books")
  print("2: Search books by genre")
  print("3: Find my wishlist")
  print("4: Add a book to my wishlist")
  print("5: Remove a book from my wishlist")

  choice = int(input("Please enter the number of your option: "))

  if choice == 1:
    print("Option 1 selected")
    display_book_collection()
  elif choice == 2:
    print("Option 2 selected")
    display_by_genre()
  elif choice == 3:
    print("Option 3 selected")
    display_customer_wishlist()
  else:
    print("Invalid option")
  
main()