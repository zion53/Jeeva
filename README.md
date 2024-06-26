# JEEVA TASK

This is divided into two parts the frontend and backend. Server folder is created using *Node.js*,*Express*,*Moongose* while the client folder is created using *React.js* 

# Installation

### Clone the Repository

1. Open your terminal and navigate to the directory where you want to clone the repository.

2. Run the following command to clone the repository:

   ```shell
   git clone <Repo URL>

### Backend Installation

1. Open the terminal in the downloaded folder and run command:

    ```shell
    cd server

2. When in backend folder run command:

    ```shell
    npm install

### Frontend Installation

1. Open the terminal in the downloaded folder and run command:

    ```shell
    cd client

2. When in backend folder run command:

    ```shell
    npm install

# Usage

### Backend Usage

1. Open the terminal in the downloaded folder and run command:
    ```shell
    cd server
2. When in backend folder either run command:

    ```shell
    nodemon app.js
3. You can also use:
     ```shell
    npm start
4. Once the Server is active, feel free to use Postman or any other service for testing using the following endpoints:

   "http://localhost:5000/form/submit" : submits data along with file 

   "http://localhost:5000/form/records" : gets records of all patient

   "http://localhost:5000/form/soundfile/:id'"  : gives you recording of the patient of particular id

   **Note:** Api documenteation is specifiend inside backend folder.


**Note**:
 It uses local port 5000
### Frontend Usage

1. Open the terminal in the downloaded folder and run command:

    ```shell
    cd client

2. When in frontenf folder run command:

    ```shell
    npm install
3. After all dependencies are installed, run:
    ```shell
    npm start
**Note:** It uses local port 3000

**Note:** Make sure server is live while using the react app.
*Incase any issue arises feel free to contact me.*