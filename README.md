# mocha


##### 1. Install mocha
```npm install --global mocha```
The global parameter means that rather than installing Mocha to a local folder within your project root folder, Mocha is installed in your home directory and can then be used in your terminal or command line at any time against any project.

##### 2. Check mocha version
```mocha --version```
You can test this out by opening a new terminal/command line window and calling Mocha to see if it’s installed correctly.

##### 3. Create folder qa_test and enter the folder
```mkdir qa_test```
```cd qa_test```
First up we need to create a folder named qa_test in our project. As default, Mocha looks for a test folder and then executes any test files that exist in that folder. Then cd to your working directory. Start your project by typing npm init inside your working directory.

##### 4. Create package.json file 
```npm init -y```
Now, let’s start by creating the init file. Open terminal(command prompt, if you are on windows). 
It will generate a package.json file for you.

##### 5. Install chai assertion library
```npm install chai```
How do we know if our test was successful? This is where assertions come in.

Assertions are important. Very important when it comes to automated checking. This is our attempt at replacing ourselves. When we run the scenario we are automating, how are we deciding if what the application is presenting us is acceptable? We need to work out what this is and instruct our code to do the assertions that meet that acceptable criterion. Fortunately, they give us many options for doing this.

Mocha itself doesn’t come with assertion libraries, but there are many assertion libraries that you can choose from. For now we are going to use Chai, which is a very popular assertion library for Node. To install it, simply run:

With Chai installed we can then add assertions into our code.

// First of all we need to import the chai library to use in our

// tests. Chai comes in three different flavours should, expect and

// assert, so we are going to use the expect library.

var expect = require('chai').expect;

##### 6. add file env.sample
```cp env.sample .env```
to create .env file






