# https://www.curtisbabin.com

## Tech stack

This site is built on:
- Gatsby (React.js framework)
- React (JSX)
- Tailwind CSS
- Amazon Web Services

## Lessons Learned
- animations are `cool` but remember to keep them `simple`
- learned how to use AWS S3 to redirect a root domain (curtisbabin.com) to a subdomain (www.curtisbabin.com)
- learned my updated AWS S3 bucket's contents couldn't be seen in the browser because I had to create something called an `invalidation` inside AWS Cloudfront, and that cleared the cache