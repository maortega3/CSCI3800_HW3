# CSCI3800_HW3
Protecting a main proxy with an OAuth 2.0 proxy hosted on Apigee 

Postman Collection:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/43b8e99a75d79d41fea9)

Apigee Hosted URL- http://maortega3-test.apigee.net/csci3800hw3

Give	one	reason	(there	are	many)	OAuth	tokens	should	not	be	granted	in	the	main	flow,	
assuming	the	user	has	sent	in	the	correct	credentials:

You don't put Oauth tokens in the main flow because they are what grant access to the main flow; it would be counter productive to do this, and you would probably get hacked. Tokens are like temporary passwords, so you have to treat them as such.
