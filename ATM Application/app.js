import * as inquirer from "inquirer";
const users = [
    { id: 1234, pin: 5678, balance: 1000 },
    { id: 5678, pin: 4321, balance: 500 },
    // Add more user data here if needed
];
const mainMenu = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'userId',
            message: 'Enter User ID:',
        },
        {
            type: 'password',
            name: 'pin',
            message: 'Enter PIN:',
        },
    ])
        .then((answers) => {
        const { userId, pin } = answers;
        const user = users.find(u => u.id.toString() === userId && u.pin.toString() === pin);
        if (user) {
            console.log(`Welcome, User ${user.id}`);
            displayMainMenu();
        }
        else {
            console.log('Authentication failed. Please try again.');
            mainMenu();
        }
    });
};
const displayMainMenu = () => {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'Select an option:',
            choices: ['Balance Inquiry', 'Cash Withdrawal', 'Deposit', 'Exit'],
        },
    ])
        .then((answers) => {
        const choice = answers.menuChoice;
        handleMenuChoice(choice);
    });
};
const handleMenuChoice = (choice) => {
    switch (choice) {
        case 'Balance Inquiry':
            console.log(`Your Balance: $${users[0].balance}`);
            displayMainMenu();
            break;
        case 'Cash Withdrawal':
            console.log('Cash Withdrawal chosen');
            // Implement cash withdrawal logic
            break;
        case 'Deposit':
            console.log('Deposit chosen');
            // Implement deposit logic
            break;
        case 'Exit':
            console.log('Exiting...');
            break;
        default:
            console.log('Invalid choice. Please try again.');
            displayMainMenu();
    }
};
mainMenu();
