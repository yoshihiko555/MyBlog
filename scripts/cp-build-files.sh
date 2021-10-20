#!/bin/bash

# static files
cp -rf ../client/dist/static ../server/static

# templates
cp -rf ../client/dist/templates/index.html ../server/templates/
