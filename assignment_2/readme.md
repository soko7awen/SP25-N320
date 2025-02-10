## sp25-create-havenapp

My submission for assignment 2 during the Spring 25 session of N320.

This purpose of this app is to create the scaffold for any new project given the input of 1) The project name, and 2) Whether or not sass will be used.

### Usage

**Getting Started**  
To install this module, enter this in your terminal:  
``npm i sp25-create-havenapp``  
Or to install globally:  
``npm i -g sp25-create-havenapp``  

**Running the Module**  
To run if installed locally:  
``npx create-havenapp``  
And to run if installed globally:  
``create-havenapp``  


**Configuring Your Project**  
There are two prompts:  
 - Name of Project
   - Simply enter whatever name is appropriate for the current project.
 - Include Sass folder (Y/n)?
   - If using Sass, answer "y" and the 'scss/' folder and 'scss/styles.scss' file will be created
   - Otherwise, answer "n" and no 'scss' folder will be created, and the 'css/styles.css' file will be created.


### Key Takeaways

Using Built-in modules:  
 - 'path'
   - Very useful for working with the paths of files and folders.
   - join()
     - Simplifies the processes of joining together path segments.
   - resolve()
     - Returns the full path of a file relative to the current working directory.
   - basename()
     - Returns last segment of path, either file or folder.
 - 'fs'
   - Required for working with local files.
   - Each method comes with a 'sync' version.
 - 'readline'
   - Great for creating interactive cli applications.

Processing Environment Variables:
 - Useful for the cli.
 - Useful for informing the application of a specific condition, like 'TEST' could be for the development condition.
 
NPM Publishing:
 - All that is required is an NPM account.
   - And the confidence that what you have is worth publishing...
 - 'version' field
   - Specifies current version, can be upgraded patch, minor, and major.
 - 'bin' field
   - Specifies an executable binary that can be ran when installed.
 - 'files' field
   - Specifies what files to be included when published.
   - Good for saving space.


