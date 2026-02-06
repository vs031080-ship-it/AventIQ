$publicDir = "C:\Users\VaibhavSharma\.gemini\antigravity\AventIQ\public"
$sourceFile = Join-Path $publicDir "index.html"
$sourceContent = Get-Content $sourceFile -Raw -Encoding utf8

# Extract Navbar
if ($sourceContent -match '(?s)(<!-- Navbar -->.*?<nav.*?<\/nav>)') {
    $navHtml = $matches[1]
} else {
    Write-Error "Could not extract Navbar"
    exit
}

# Extract Footer
if ($sourceContent -match '(?s)(<!-- Footer -->.*?<footer.*?<\/footer>)') {
    $footerHtml = $matches[1]
} else {
    Write-Error "Could not extract Footer"
    exit
}

Write-Host "Navbar and Footer extracted."

# Get all HTML files
$files = Get-ChildItem -Path $publicDir -Filter *.html
foreach ($file in $files) {
    if ($file.Name -ne "index.html") {
        Write-Host "Processing $($file.Name)..."
        $path = $file.FullName
        $content = Get-Content $path -Raw -Encoding utf8
        
        # Replace Navbar
        $content = $content -replace '(?s)<!-- Navbar -->.*?<nav.*?<\/nav>', $navHtml
        
        # Replace Footer
        $content = $content -replace '(?s)<!-- Footer -->.*?<footer.*?<\/footer>', $footerHtml
        
        Set-Content -Path $path -Value $content -Encoding utf8
    }
}
Write-Host "Done."
