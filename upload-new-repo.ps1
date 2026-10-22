# New repository only. Does NOT modify old webdemo.
$ErrorActionPreference = 'Stop'
$repo = 'https://github.com/HuyentnPh32568/portfolio-than-ngoc-huyen.git'
Set-Location -LiteralPath $PSScriptRoot
$videos = @(Get-ChildItem -LiteralPath './public/videos' -Filter '*.mp4' -File)
if ($videos.Count -ne 7) { throw "Expected seven videos; found $($videos.Count)." }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git not found. Install Git for Windows first.' }
if (Test-Path -LiteralPath '.git') { throw 'This folder already has a .git repository. Use a fresh extracted folder.' }
Write-Host 'Uploading portfolio with 7 MP4 files to NEW repository:' $repo
Write-Host 'Make sure this repository already exists and is EMPTY on GitHub.'
git init
if ($LASTEXITCODE -ne 0) { throw 'git init failed' }
git branch -M main
git add -A
if ($LASTEXITCODE -ne 0) { throw 'git add failed' }
git -c user.name='Portfolio Upload' -c user.email='portfolio-upload@users.noreply.github.com' commit -m 'Initial complete portfolio with seven edited videos'
if ($LASTEXITCODE -ne 0) { throw 'Git commit failed' }
git remote add origin $repo
if ($LASTEXITCODE -ne 0) { throw 'Could not set git remote' }
git push -u origin main
if ($LASTEXITCODE -ne 0) { throw 'Push failed. Check GitHub sign-in, Git installation and that the NEW repository exists and is empty.' }
Write-Host 'SUCCESS: Website and all seven MP4 videos pushed to the NEW repository.'
