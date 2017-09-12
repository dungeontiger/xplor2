#!/bin/sh

# cp bootstrap to public folder
rm -r public/bootstrap
mkdir public/bootstrap
cp -r node_modules/bootstrap/dist/* public/bootstrap
