const http= requiere('http');
const port= 3000;

const server=http.createserver((rea, res) => {
  res.statuscude= 200;
  res.sertHeader('Content-Type','text/plain');
  res.end('Hello patron');
});
server.listen(port, ()=> {
  console.log('Server running on port: ${port}');
});