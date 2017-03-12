# CSCI3800_HW3
Protecting a main proxy with an OAuth 2.0 proxy hosted on Apigee 

Postman Collection:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c910b7fca71256075758#?env%5Bassignment3_CSCI3800%5D=W3siZW5hYmxlZCI6dHJ1ZSwia2V5IjoiYm9va190aXRsZSIsInZhbHVlIjoidHVyaW5nIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImF1dGhvcml6YXRpb25fdG9rZW4iLCJ2YWx1ZSI6ImtIQlpzaHd5elNnWkpJWmZ5MGZ2SE1iYXNVU2EiLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IndUeWZhUUI1SHhGRjh6Z3h4Mk1ERmo4bjQ2dGkiLCJ0eXBlIjoidGV4dCJ9XQ==)

Apigee Hosted URL- http://maortega3-test.apigee.net/csci3800hw3

Give	one	reason	(there	are	many)	OAuth	tokens	should	not	be	granted	in	the	main	flow,	
assuming	the	user	has	sent	in	the	correct	credentials:

You don't put Oauth tokens in the main flow because they are what grant access to the main flow; it would be counter productive to do this, and you would probably get hacked. Tokens are like temporary passwords, so you have to treat them as such.
