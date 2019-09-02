# Set the location at the root the extension
if (!(Test-Path -Path ".\manifest_base.json")) {
    Set-Location ..
}

# Declare variables
$BuildPath = ".\filtered-rss-chrome-extension\dist"
$DistPath = ".\dist"

# Remove previous build output
if (Test-Path -Path $DistPath) {
    Remove-Item -Recurse $DistPath | Out-Null;
}

# Copy the new build output
Copy-Item -Recurse -Path "$BuildPath" -Destination "$DistPath"

# Patch the extension manifest file
$JsFiles = $(Get-ChildItem "$DistPath\js" | Where-Object { $_.extension -eq ".js" } | Select-Object -ExpandProperty Name | ForEach-Object { "`"./js/$($_)`"" });
$JsFilesListString = $($JsFiles -join ", ")

$(Get-Content -Path ".\manifest_base.json") -replace "#{scripts_list}", "$JsFilesListString" | Set-Content -Path "$DistPath\manifest.json"