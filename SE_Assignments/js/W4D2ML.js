//Go to http://dummy.restapiexample.com/ (Links to an external site.)
//Identify all the HTTP methods for this API
GET, POST, PUT, DELETE
//Identify the differences in their URLs
Each URL focuses on a specific task within the employee record database.
 Ex. Viewing all employee data or a single data record
     Creating a new record in the database
     Updating or Deleting employee records
//What are different types of Web Services?
There are a few central types of web services: XML-RPC, UDDI, SOAP, and REST:
XML-RPC (Remote Procedure Call) is the most basic XML protocol to exchange data
between a wide variety of devices on a network. It uses HTTP to quickly and easily
transfer data and communication other information from client to server.
UDDI (Universal Description, Discovery, and Integration) is an XML-based standard
for detailing, publishing, and discovering web services. It’s basically an internet
registry for businesses around the world. The goal is to streamline digital
transactions and e-commerce among company systems.
SOAP, which will be described in detail later in the blog, is an XML-based Web
service protocol to exchange data and documents over HTTP or SMTP
(Simple Mail Transfer Protocol). It allows independent processes operating on
disparate systems to communicate using XML.
REST, which will also be described in great detail later in the blog, provides
communication and connectivity between devices and the internet for API-based
tasks. Most RESTful services use HTTP as the supporting protocol.
Here are some well-known web services that use markup languages:
Web template
JSON-RPC
JSON-WSP
Web Services Description Language (WSDL)
Web Services Conversation Language (WSCL)
Web Services Flow Language (WSFL)
Web Services Metadata Exchange (WS-MetadataExchange)
XML Interface for Network Services (XINS)
//What are disadvantages of SOAP Web Services?
Only XML can be used, JSON and other lightweight formats are not supported.
SOAP is based on the contract, so there is a tight coupling between client and server applications.
SOAP is slow because payload is large for a simple string message, since it uses XML format.
Anytime there is change in the server side contract, client stub classes need to be generated again.
Can’t be tested easily in browser
Only XML can be used, JSON and other lightweight formats are not supported.
SOAP is based on the contract, so there is a tight coupling between client and server applications.
SOAP is slow because payload is large for a simple string message, since it uses XML format.
Anytime there is change in the server side contract, client stub classes need to be generated again.
Can’t be tested easily in browser
//What are disadvantages of REST web services?
You can lose the ability to maintain state in REST, such as within sessions. It can also be more difficult for newer developers to use. It's important to understand what makes a REST API RESTful, and why these constraints exist before building your API.
- Since there is no contract defined between service and client, it has to be communicated through other means such as documentation or emails.
- Since it works on HTTP, there can't be asynchronous calls.
- Sessions can't be maintained.
//What are different HTTP Methods supported in Restful Web Services?
POST, GET, PUT, PATCH, and DELETE (also OPTIONS and HEAD)
//What is JAX-RS API?
JAX-RS stands for JAVA API for RESTful Web Services. JAX-RS is a JAVA based programming
language API and specification to provide support for created RESTful Web Services.
Its 2.0 version was released on the 24th May 2013. JAX-RS uses annotations available
from Java SE 5 to simplify the development of JAVA based web services creation and
deployment. It also provides supports for creating clients for RESTful Web Services.
//Create a URI for the different Http Verbs for a School.
GET for list of students:
http://dummy.codingschool.com/api/v1/student
GET data on student ID#1:
http://dummy.codingschool.com/api/v1/student/1
POST student data:
http://dummy.codingschool.com/api/v1/create
PUT additional data for student ID#21:
http://dummy.codingschool.com/api/v1/update/21
DELETE student ID#2:
http://dummy.codingschool.com/api/v1/delete/2
