#
# Title: what_a_book.py
# Author: Cody Skelton
# Date: 03.03.2024
# Purpose: What-A-Book Project Mainline 
# Requirements from WEB 335 WhatABook Business Requirements
# Code sources from Python Guide, courtesy of Professor Krasso
#

#import MongoClient
from pymongo import MongoClient

# build connection string
# substitute own connection string here
client = MongoClient()

# configure variable to access whatABook collection
db = client['whatABook']

# start mainline here