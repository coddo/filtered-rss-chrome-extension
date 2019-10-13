### Step 1 - Chrome

# Set the location at the root the extension
if (!(Test-Path -Path ".\manifest_base.json")) {
    Set-Location ..
}

# Declare variables
$BuildPath = ".\filtered-rss-chrome-extension\dist"
$DistPathChrome = ".\dist-chrome"
$DistPathFirefox = ".\dist-firefox"

# Remove previous build output
if (Test-Path -Path $DistPathChrome) {
    Remove-Item -Recurse $DistPathChrome | Out-Null;
}

# Copy the new build output
Copy-Item -Recurse -Path "$BuildPath" -Destination "$DistPathChrome"

# Patch the extension manifest file
$JsFiles = $(Get-ChildItem "$DistPathChrome\js" | Where-Object { $_.extension -eq ".js" } | Select-Object -ExpandProperty Name | ForEach-Object { "`"./js/$($_)`"" });
$JsFilesListString = $($JsFiles -join ", ")

$(Get-Content -Path ".\manifest_base.json") -replace "#{scripts_list}", "$JsFilesListString" | Set-Content -Path "$DistPathChrome\manifest.json"



### Step 2 - Firefox

# Remove previous build output
if (Test-Path -Path $DistPathFirefox) {
    Remove-Item -Recurse $DistPathFirefox | Out-Null;
}

# Copy the dist path for chrome into the one fore firefox
Copy-Item -Path "$DistPathChrome" -Destination "$DistPathFirefox" -Recurse

# Set the directory inside the firefox dist path
Set-Location "$DistPathFirefox"

# Patch file references in the manifest file
$(Get-Content -Path ".\manifest.json") -replace "./js/", "./" | Set-Content -Path ".\manifest.json"

# Patch file references in index.html
$(Get-Content -Path ".\index.html") -replace "/js/", "" | Set-Content -Path ".\index.html"
$(Get-Content -Path ".\index.html") -replace "/css/", "" | Set-Content -Path ".\index.html"

# Patch file references in JS and CSS files
Get-ChildItem ".\js\" | 
    Foreach-Object {
        $(Get-Content -Path $_.FullName) -replace "`"js/", "`"" | Set-Content -Path $_.FullName
        $(Get-Content -Path $_.FullName) -replace "css/", "" | Set-Content -Path $_.FullName
        $(Get-Content -Path $_.FullName) -replace "img/", "" | Set-Content -Path $_.FullName
    }

Get-ChildItem ".\css\" | 
    Foreach-Object {
        $(Get-Content -Path $_.FullName) -replace "img/", "" | Set-Content -Path $_.FullName
    }

# Flatten the directory structure
Copy-Item -Path ".\js\*" -Destination ".\" -Recurse
Copy-Item -Path ".\css\*" -Destination ".\" -Recurse
Copy-Item -Path ".\img\*" -Destination ".\" -Recurse
Remove-Item -LiteralPath ".\js" -Force -Recurse
Remove-Item -LiteralPath ".\css" -Force -Recurse
Remove-Item -LiteralPath ".\img" -Force -Recurse