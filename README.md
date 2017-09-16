Overview
Demonstrate a working example of a user being able to save and retrieve two different URLs into their Seneca chrome extension. Keywords related to each webpage will automatically be extracted using a publicly available API and then returned to the browser.

User Flow
A user views a webpage in their browser and they want to save it
Saves the url to their seneca account via a chrome plugin (Capital S logo)
URL is processed by Seneca (refer to data flow section below for example data flow)
Browser displays a custom success message indicating that their URL has been saved.
User is able to view their library via the chrome plugin button (down arrow) and can see:
An image/media thumbnail from the saved article
The headline of the article
the source of the article e.g. www.address.com
a list of the keywords, tags extracted from the article
a close/delete (cross icon) button
User is able to remove an entry from their library (clicking the cross icon)

Data Flow
Grab the user’s URL when they push the chrome plug-in “S” button on the browser.
Send the URL to an API that can perform natural language processing on it, so that the keywords, title, context etc can be extracted.
You can use any publicly available API that you prefer for this. Here are a few suitable options that I have been working with: SMMY.API, ALYIEN, Indico.
Here is my API key for Indico, which you are welcome to use
API KEY: f021a8f6bb80c6fcda683d9db16ade3d
Note there is a limit of 300 API calls per day so please stay below that.
Return the article headline, URL address, key image, top keywords/tags as extracted from the API.
Display this information in the chrome extension drop down box.

Resources
Invision Prototype: https://invis.io/TJDI2X625
Logos are attached - use whatever ones you need
