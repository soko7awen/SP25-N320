# Week 5

### Live Link

[Home Page](https://sp25-n320.onrender.com/)

### Weekly Recap

Overall, I feel more confident about node's capability as a basic web server than I did previously. We covered that, and in addition I was able to focus in my knowledge regarding promises, and async/await.

When it comes to web servers I have learned:
 - How to utilize the built in http module.
   - How best to use the request and response properties.
   - How path and fs play a role in doing this.
   - The importance of having a Content-Type (MIME) set.
 - The logic structure involved in returning the intended result from a requested URL.
   - If the request is a valid file with an extension, then return it with status of 200 and give it the appropriate content-type.
   - If the request has no extension, then try to return the relevant html document.
   - If the request has no extension, and is a directory, then try to return that directory's index html.
   - Otherwise, 404.
