
console.log(tab.url);

const body = JSON.stringify({
  api_key: "f021a8f6bb80c6fcda683d9db16ade3d",
  data: tab.url
})

const postInit = (body) => {
  method: 'POST',
  headers: new Headers({
   "Content-Type": "text/plain",
   "Content-Length": content.length.toString(),
   "X-Custom-Header": "ProcessThisImmediately"
  }),
  body,
  mode: 'cors',
  credentials: 'include',
  cache: 'default' };

const headers = postInit(body);

fetch("https://apiv2.indico.io/keywords?version=[2]", headers)
  .then(function(res) { console.log(res) });
