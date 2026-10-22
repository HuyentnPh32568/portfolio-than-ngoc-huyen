# Push the complete portfolio (including all 7 MP4 files) to the existing GitHub repository.
# Run in PowerShell from the extracted webdemo folder.
$ErrorActionPreference = 'Stop'
$repo = 'https://github.com/HuyentnPh32568/portfolio-than-ngoc-huyen.git'
$source = $PSScriptRoot
$target = Join-Path $env:TEMP ('webdemo-upload-' + [Guid]::NewGuid().ToString('N').Substring(0,8))
$videos = @(Get-ChildItem -LiteralPath (Join-Path $source 'public/videos') -Filter '*.mp4' -File)
if ($videos.Count -ne 7) { throw "Can 7 video MP4 trong public/videos; hien co $($videos.Count)." }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Chua cai Git. Cai Git for Windows va thu lai.' }
Write-Host "Dang clone repository: $repo"
git clone $repo $target
if ($LASTEXITCODE -ne 0) { throw 'Khong clone duoc repository. Kiem tra ket noi va quyen GitHub.' }
foreach ($name in @('src','public','package.json','tsconfig.json','next.config.ts','next-env.d.ts','.gitignore','README.md')) {
  $item = Join-Path $source $name
  if (-not (Test-Path -LiteralPath $item)) { throw "Thieu tep/thư muc $name" }
  Copy-Item -LiteralPath $item -Destination (Join-Path $target $name) -Recurse -Force
}
Push-Location $target
try {
  git add -A
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { Write-Host 'GitHub da co cac tep giong voi ban nay.'; return }
  git commit -m 'Complete Thân Ngọc Huyên portfolio with 7 video edits'
  if ($LASTEXITCODE -ne 0) { throw 'Khong commit duoc. Hay cau hinh git user.name va user.email.' }
  git push origin HEAD:main
  if ($LASTEXITCODE -ne 0) { throw 'Khong push duoc. Kiem tra dang nhap GitHub hoac quyen ghi.' }
  Write-Host 'THANH CONG: Da day 7 video va website len GitHub.'
Write-Host 'https://github.com/HuyentnPh32568/portfolio-than-ngoc-huyen'
} finally { Pop-Location }
