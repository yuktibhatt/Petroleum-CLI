1. Install node js (if already installed go to step 2):
Headover to the https://nodejs.org/ and download the latest version of the node. Download the LTS version.
Go through the installation process mentioned there and check the installed version from your terminal by node -v.
2. Clone the repository: 
Open your git bash and clone the repository.
git clone https://yuktibhatt@bitbucket.org/yuktibhatt/yipl-intern-petroleum-report.git
3. Install the node modules:
- npm install 
4. Install sqlite database:
Refer the link for installation "https://www.tutorialspoint.com/sqlite/sqlite_installation.htm"
5. Run the migrations:
- npm run migrate
6. Run the following commands in you terminal:  
 i. to fetch the data:   node index.js fetch-oil-data
 ii. to store data in a file:   node index.js store-oil-data-in-file --filename data
 iii. to store data in the database:    node index.js store-oil-data --tablename reports
 iv. to view all data:  node index.js view-oil-data --tablename reports
 v. to view avg sale of each product by country: node index.js view-oil-data-avg --tablename reports
 vi. to view year of min sale of each product: node index.js view-oil-data-min --tablename reports
 