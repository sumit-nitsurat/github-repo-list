### ADR( Architectural Document Records)

**Goal: React application to view a list of GitHub repositories with search functionality.**

**Assumptions:** Search api is provided to get the list of github repositories.

**Functionality:** 

1. List of github repos. 
    As a user I want to see the list of github repositories. 

    Acceptance Criteria: 
- Display repository’s Id, name, watchers_count
- Sort the results by the number of stars
        
2. Search github repos 
    As a user I want to look for the repository by typing in search bar

    Acceptance Criteria:
- Have a search input that will show results (from all possible repositories) to those that have its name matches the search field.

3. Pagination
    As a user I want to navigate to different pages to see the more results. 

    Acceptance Criteria:
-  Pagination bar to display the 10 pages at a time and clicking on the page should load the respective results.


### Project Setup

  **We will bootstrap our application using create-react-app. Which will initialize our app with required setup i.e webpack for build, jest for testing etc.** 

  **Directory Structure:** We will be using flat directory structure as we only have one component. Depending on the app size and functionality we can opt for module structure or container/compomnent structure to write our app.
  
  
  **File Name:** Pascal case for the file naming.
  

  **CSS:** We will be using bootstrap to beautify our application and custom css will be defined parallel to the component. 
  
### Solution Thinking: 

  **Component Design:** we are going to use container/component design approach. As we dont want to pollute all component with state mutation.
  

  we will keep in mind **Separation of concerns** principle to breakdown component.

  **Container** 
  
  - GithubRepoList.js: container component will contain the logic to fetch the github repositories and handling of error and loader display decision. it wont handle any UI display. 
  
     We wil fetch initial repo list on component load with default param which has been set to "sumit" for this project. 
    we will display 10 records per page. 

   **Components:** 
   
- Table.js: Pure component to render the table given data.

    We will breakdown table component to wrapper component which renders head, body wrapper and renderRow component to render a single row. 
            
- Search.js: Pure component to render the search bar.
            
- Loader.js: Component to show loader while fetching data.

    For Pagination using react-js-pagination lib. we will keep the current page as the state and change it depending on the pagination click and call the api with given page number. 
    

 **State management:** 
   
   Because its a single component app we can keep the states locally.

 **Optimization:**
   
- As we know github repositories list can be very large. So to fetch the list efficiently we need to fetch data in chunks. for that we are going to user github search pagination api and we will display 10 records per page.

- As we are going to fetch on the fly while searching in the search. we want to reduce the api calls as much as possible. For that we going to use debounce technique. Which will wait for the given time after user has finished typing. 



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
