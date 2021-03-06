# https://www.curtisbabin.com

## Tech stack

This site is built on:
- Gatsby (React.js framework)
- React (JSX)
- Tailwind CSS
- Amazon Web Services

## Lessons learned
- animations are `cool` but remember to keep them `simple`
- Cloudfront was sending a `500` error when sending a GET request for my site since my site had no SSL certificate and no alternate domain name
- learned how to get SSL certificates with AWS Certificate Manager
- learned how to use AWS S3 to redirect a root domain (curtisbabin.com) to a subdomain (www.curtisbabin.com)
- learned my updated AWS S3 bucket's contents couldn't be seen in the browser because I had to create something called an `invalidation` inside AWS Cloudfront, and that cleared the cache
- `backdrop-filter` works to blur contents behind the navbar for Chrome on macOS Big Sur 11.6, but Safari on the iPhone requires `-webkit-backdrop-filter` to work the same way
- keep size units the same throughout the project to prevent positioning issues