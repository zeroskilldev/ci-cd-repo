cd ci-cd-repo
git pull origin main
pnpm install
pnpm run build 
pm2 restart all