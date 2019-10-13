$ZipFileChrome = ".\fi-rss-chrome.zip";
$ZipFileFirefox = ".\fi-rss-firefox.zip";

# Remove already existing zip files
if (Test-Path $ZipFileChrome) {
    Remove-Item -Path $ZipFileChrome;
}

if (Test-Path $ZipFileFirefox) {
    Remove-Item -Path $ZipFileFirefox;
}

# Create the new zip files
Compress-Archive -Path ".\dist-chrome\*" -DestinationPath $ZipFileChrome
Compress-Archive -Path ".\dist-firefox\*" -DestinationPath $ZipFileFirefox