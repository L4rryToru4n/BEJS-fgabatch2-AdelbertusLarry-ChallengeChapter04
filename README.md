# Basic Banking System REST API (Part 1)
## Introduction

Basic Banking System REST API is a basic Express application that serves API to the clients with CRUD (Create, Read, Update, Delete) functionalities, each will return with a JSON response. 

There are five main endpoints to be served, these are:
- Users
- Bank_Accounts
- Profiles
- Transactions
- Account_Transaction

Every data created through the APIs then stored to each appropriate tables using Prisma ORM before to be managed by PostgreSQL RDBMS.

## API Functionalities
### Users
`Users` endpoint will manage the data of users. API functionalities can be accessed using the following uri:
- `/users`
- `/users/{id}`
- `/users/create`
- `/users/update/{id}`
- `/users/delete/{id}`

### Bank_Accounts
`Bank_Accounts` endpoint will manage the data of user's bank accounts. API functionalities can be accessed using the following uri:
- `/bank_accounts`
- `/bank_accounts/{id}`
- `/bank_accounts/create`
- `/bank_accounts/update/{id}`
- `/bank_accounts/delete/{id}`

### Profiles
`Profiles` endpoint will manage the data profiles of users. API functionalities can be accessed using the following uri:
- `/profiles`
- `/profiles/{id}`
- `/profiles/create`
- `/profiles/update/{id}`
- `/profiles/delete/{id}`

### Transactions
`Transactions` endpoint will manage the data transactions of bank accounts. API functionalities can be accessed using the following uri:
- `/transactions`
- `/transactions/{id}`
- `/transactions/create`
- `/transactions/update/{id}`
- `/transactions/delete/{id}`

### Account_Transactions
`Account_Transactions` endpoint will get the related data between transactions and bank accounts. API functionalities can be accessed using the following uri:
- `/account_transactions`
- `/account_transactions/{id}`

## Setup
In order to do demo, clone the project by typing this command into the terminal: 
```
git clone https://github.com/L4rryToru4n/bankaccount-binar-academy-be-chapter-04.git
```
or download the project then extract the .zip file.

## Usage Instructions
After downloading or cloning the repository, head to the main directory using a CLI to initialize the project's database by running the command
```
npx prisma migrate dev --name init
```
Next, to start the project's server run
```
npm run start
```
All endpoints then can be accessed starting from
`localhost:5000/api/v1/{name_of_the_main_endpoint}`.
