rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:zealer-young/gulu.git &&
git push -f -u origin master &&
cd -
echo https://zealer-young.github.io/gulu/index.html
