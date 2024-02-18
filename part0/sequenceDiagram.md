```mermaid
   sequenceDiagram
        Browser-->Server: User enters a note into form text input field
        Browser->>Server: User clicks save button and input gets sent to the server 
        Server-->Browser: HTTP POST method is executed as a request to /new_note url 
        Server->>Browser: Input is pushed to 'notes' array in the body of POST request
        Browser-->Server: Event handler executes and renders new note on page
   
  
```