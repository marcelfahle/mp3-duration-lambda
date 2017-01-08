#!/bin/zsh

rm index.zip 
cd lambda 
zip -r ../index.zip *
cd ..

AWS_DEFAULT_REGION=eu-west-1 aws lambda update-function-code --function-name mp3Duration --zip-file fileb://index.zip
