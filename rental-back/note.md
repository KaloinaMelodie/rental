npm init
npm install express
npm install nodemon
npm install --save-dev jest

pytest
pydantic 
python-dotenv
passlib[bcrypt]
pymongo
python-multipart
uvicorn
fastapi
httpx
pydantic[email]

# To do

# Core functionnality to do 
- Understand it as clear as possible

## List requirements to install for an environment

## Open github, clone repo; Open Bruno, create collection

## Create structure framework as quick as possible

## Make unit test
la syntaxe sync : expect(() => fn()).toThrow(...)
avec la syntaxe async : await expect(promise).rejects.toThrow(...)

## Write the documentation correctly


- Apply status code correctly
    - error handling
- How to write the documentation correctly
- Speach: vocabulary, 1 a 2 a 5 minute of presenting yourself
- Make a test in Node FastApi / Bruno
    - unit test
- React


Priority 2: rehearse the things they are likely to care about
Focus on:
clean endpoint design
request validation
business-rule handling
edge cases
readable code structure
clear naming
basic tests
practical error handling
small but solid documentation

Priority 3: review these business domains
Because they map directly to their product:
reservations / booking status
availability conflicts
cleaning-task assignment
guest check-in flow
property/unit data  
payment or upsell states
operational dashboards
automation triggers

Priority 4: be ready for integration patterns
Review:
REST API consumption
webhook-like event handling
idempotency basics
async job mindset
mapping external data to internal models