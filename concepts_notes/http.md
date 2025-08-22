# HTTP 
[What is HTTP](https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/)

## HTTP Request 
1. HTTP version type
2. a URL
3. an HTTP method (e.g. GET, POST)
4. HTTP request headers (information such as :authotity, :method, :path, etc.)
5. Optional HTTP body.

## HTTP Response 
1. an HTTP status code
2. HTTP response headers
3. optional HTTP body

### status code 
- 1xx Informational
- 2xx Success (e.g. 200 OK)
- 3xx Redirection
- 4xx Client Error (e.g. 404 NOT FOUND)
- 5xx Server Error

## Why HTTP 
- privacy: encrypted
- integrity: info not manipulated on the way 
- identification: who

### encryption 
- symmetric key algorithm: one key for both encrypt and decrypt 
- asymmetric key algorithm: one public and one private

### HTTPS, SSL, TLS
- secured version of HTTP, HyperText Transfer Protocol
- communication between browser and server
- encrypted with SSL/TLS
- Secure Sockets Layer (SSL) renamed to Transport Layer Security (TLS) in 1999!

### Certificate
Certificate Authority (CA): 
1. Issuing certificate
2. Conforming identity of certificate owner 
3. Provide proof that certificate is valid

Roots: database of trusted CA      

Certificate:    
1. Domain validated
2. Organization validated 
3. Extended validation 

chain of trust: self-signed -> intermediate -> root (trusted)
