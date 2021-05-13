1. clone the repository
git clone https://yuktibhatt@bitbucket.org/yuktibhatt/yipl-intern-petroleum-report.git
2. Install the node modules
- npm install 
3. Install sqlite database
refer the link for installation "https://www.tutorialspoint.com/sqlite/sqlite_installation.htm"
4. Run the migrations
- npm run migrate
5. Run the following commands 
 i. to fetch the data:   node index.js fetch-oil-data
 ii. to store data in a file:   node index.js store-oil-data-in-file --filename data
 iii. to store data in the database:    node index.js store-oil-data --tablename reports
 iv. to view all data:  node index.js view-oil-data --tablename reports
 v. to view avg sale of each product by country: node index.js view-oil-data-avg --tablename reports
 vi. to view year of min sale of each product: node index.js view-oil-data-min --tablename reports
 