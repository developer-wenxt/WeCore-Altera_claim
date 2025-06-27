STEP 1: Project directory do 'npm install'
STEP 2: RUN COMMAND 'node server.js'
# FLOW EXPLANATION
server.js --> app.js --> routes --> controller --> services --> database connection

routes is separated into private and public endpoint, public endpoint dont need any token.
For private endpoint send token in Authorization header: token 'ENTER_TOKEN_HERE'