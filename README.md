>>App.js -  parent of all components including Router.

>> Note : "Redux" is not used for state management.

>>Application is divided into two parts- "actions" and "components".

>>actions - contains apis for fetching data.

>>components - contains all the react components.

>>components hierarchy : 

App
    -Mainview
        -Sidebar
        -Home
            
            -BankSearchField (Stateless, inline Home)
                -AutoComplete (StateFul)
            -IFSCSearchField (Stateless, inline Home)
            -BankDetails (Stateless, inline Home)


