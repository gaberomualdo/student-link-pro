#!/bin/bash

# Prompt user for input, and read response
read -p "Build extension for Chrome [1] or Firefox [2]? " answer

# Handle user response
while true
do
  case $answer in
#chrome
   [1] )  echo "Packaging Chrome extension!"
           cd ./extension/chrome
           # build the extension as .zip to site directory (public/)
           zip -r ../../public/StudentLinkProChrome.zip ./*
           break;;
# firefox
   [2] )  echo "Packaging Firefox extension!"
           cd ./extension/firefox
           # build the extension as .zip to site directory (public/)
           zip -r ../../public/StudentLinkProFirefox.zip ./*
           break;;
# any other input exits script
   * )     echo "Invalid input, exiting."; break ;;
  esac
done
