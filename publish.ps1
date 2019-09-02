$ZipFile = ".\fi-rss.zip";

# Remove already existing zip file
if (Test-Path $ZipFile) {
    Remove-Item -Path $ZipFile;
}

# Create a new zip file
Compress-Archive -Path ".\dist\*" -DestinationPath $ZipFile