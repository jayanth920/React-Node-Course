COMMON_MESSAGE="recovered file"
files=($(git ls-files --others --exclude-standard))

if [ -n "$files" ]; then
  for file in $files; do
    git add "$file"
    git commit -m "$COMMON_MESSAGE" -n
  done
else
  echo "No untracked files found."
fi