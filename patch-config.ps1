# Set the location at the root the extension
if (!(Test-Path -Path ".\manifest_base.json")) {
    Set-Location ..
}

# Declare variables
$BuildPath = "./filtered-rss-chrome-extension"

# Remove previous build output
Remove-Item -Recurse "css" -ErrorAction "SilentlyContinue" | Out-Null
Remove-Item -Recurse "img" -ErrorAction "SilentlyContinue" | Out-Null
Remove-Item -Recurse "js" -ErrorAction "SilentlyContinue" | Out-Null
Remove-Item "favicon.png" -ErrorAction "SilentlyContinue" | Out-Null
Remove-Item "index.html" -ErrorAction "SilentlyContinue" | Out-Null

# Copy the new build output
Copy-Item -Recurse -Path "$BuildPath/dist/*" -Destination "./"

# Patch the extension manifest file
$JsFiles = $(Get-ChildItem ".\js" | Where-Object { $_.extension -eq ".js" } | Select-Object -ExpandProperty Name | ForEach-Object { "`"./js/$($_)`"" });
$JsFilesListString = $($JsFiles -join ", ")

$(Get-Content -Path ".\manifest_base.json") -replace "#{scripts_list}", "$JsFilesListString" | Set-Content -Path ".\manifest.json"