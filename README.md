# Challenge-13-E-commerce-Back-End
This repository contains the code used to make the backend for an e-commerce site

## Description
This repository contains the code used to make the backend for an e-commerce site. The purpose of creating the backend for this website is to allow users to be able to pull date from databases stored in external servers. The backend uses sequelize to allows users to fetch data using their cataegory id, product id and tag id. By entering the correct routes users can then request to either GET, CREATE, UPDATE or even DELETE for a categort, product or tag.

## Installation

### Link to insomnia video demo: https://drive.google.com/file/d/1oBysMPLHIPMsBswPcZreJVuCJSf-jcyM/view

On the terminal install the necessary packages using nmp install including dotenv and sequilize packages. Install the following packages by using the code below.


```
npm i
```
```
npm i mysql2
```
```
npm i sequelize
```
```
npm i dotenv
```
Afer all the necessary packages have been installed rin mysql using the following command
```
mysql -u root -p
```
Enter your password to enter mysql. Then select the schema as the source by using the following code.
```
SOURCE schema.sql
```
Seed the database by using the command 
```
npm run seed
```
Then run the server by pputting the following code in the terminal
```
npm run start
```

## Usage

![Challenge-13-E-commerce-Back-End](./images/insomnia%20demo%20for%20requests.png)

The images file contains the screenshot of insomnia used to demonstrate how to put in request to and from the database. The server.js file contains the code used to sync the Sequelize models to the MySQL database on server start. The db files contains the schema file and the config file contains the connection.js file used to specify all the packages needed to connect to the server. The models file contains all the methods used to establish connections between the different models. The seeds files contains all the data that is saved and the routes folder contains the code used to fetch the data accordingly.

## License

Uses the MIT License
# [![License MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)