# Recipes API 

## Running through the command line ( Node )
####  You must have those techs installed to run the code
 - [Node Js](https://nodejs.org/en/)
 - [Npm](https://www.npmjs.com/get-npm) ( Node Package Manager )

First, you have to clone the project from this repository:

    https://github.com/pablothobias/recipes-api.git

Then, you have to navigate to the project directory and run the following commands:

    npm install

*The command above will install all the project dependencies.*

Before running the project indeed, you have to go Giphy developers page and create your API key to be able to fetch the gifs.

    [https://developers.giphy.com/docs/api#quick-start-guide](https://developers.giphy.com/docs/api#quick-start-guide)
After that, run:

    GIPHY_API_KEY={YOUR_GIPHY_API_KEY} npm start
  Now you're able to start making requests to our API. For example. Open your browser and paste this line to URL navigation bar:
  

   [http://0.0.0.0:3000/recipes?i=banana,apple](http://0.0.0.0:3000/recipes?i=banana,apple)
*You can make your requests via terminal(curl), or some applications like postman too.*

## Running through Docker 
####  You must have those techs installed to run the code
 - [Docker](https://docs.docker.com/get-docker/)
 - [Docker compose](https://docs.docker.com/compose/install/)

After installing Docker, you have to enter the project directory and run some commands.

    docker build -t {APP_NAME} .
   *You can choose any app name you prefer.*
   
   *This command generates a new app image made on top of **Node Alpine**.*

Enter `docker images` to check if the above image was created. 

If the images was successfully created you can enter:

    docker run -e GIPHY_API_KEY={YOUR_GIPHY_API_KEY} -p {PORT}:3000 -d {APP_NAME}

**YOUR_GIPHY_API_KEY**: Refers to the Giphy API key explained at the beginning of this documentation.
**PORT**: The port you would like to run the API. Recommended: **3000**.
**APP_NAME**: The name of the image that you have inserted in the command to create an image.

Finally, after those commands, you'll be running your container and can access the recipes API. You can check if it is fine, running:

    docker ps

You'll see the information about your container.

Now, just enter again in your browser and copy/paste this link to fetch recipes of your favorite ingredients:

  [http://0.0.0.0:3000/recipes?i=ham,bacon,garlic](http://0.0.0.0:3000/recipes?i=banana,apple)
*You can make your requests via terminal(curl), or some applications like postman too.*


## About the requests 

You can insert your ingredients after te "i" parameter in the link showed in this documentation.

You must select at least 1 ingredient and 3 at most, just like the above examples.

I have created a Giphy project for test purposes for this API. You can create your own, but feel free to use this one bellow.

***YOUR_GIPHY_API_KEY  = Mt6GbN2ZXzCOlZ0WcFTxTW6CibJgGHmb***
