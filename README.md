# truck-tracking-web3-prototype

TruckTracking is a decentralized application prototype (DApp) built on the Ethereum blockchain that enables tracking of trucks and their movements using Web3 technologies.

## Features

- Truck tracking on the Ethereum blockchain
- Secure and immutable storage of truck movement data
- Integration with Web3 wallets for user authentication and transaction signing

## Requirements

To run the TruckTracking application locally, you need to have the following packages/libraries installed:

- npm (Node Package Manager)
- Node.js
- Express.js
- Ganache CLI (a command-line version of Ganache)
- Puppeteer
- Mocha
- Chai

## Installation

1. Start Ganache CLI:

	### `npx ganache-cli`

2. Deploy the Smart Contract:

	- Option 1: Using Remix IDE
	  - Open Remix IDE in your web browser.
	  - Import the smart contract from the `contracts` directory.
	  - Select the `development` environment with Ganache as the provider.
	  - Compile and deploy the smart contract.

	- Option 2: Using Truffle

3. Update the Contract Address in `TruckTracking.js`:
	- Open the `TruckTracking.js` file located in the project directory.
	- Update the `ContractAddress` constant with the deployed contract's address on Ganache (e.g., `0x18CE406CDe1dc7B324AD01Df19D0f37749dA5c85`).

4. Start the application server:

	### `node app.js`

5. Open your web browser and visit `http://localhost:3000` to access the TruckTracking app.

## Testing

To run the tests for the TruckTracking application, using Mocha, Chai, and Puppeteer, follow these steps:

- Make sure ganache-cli and the application server are running.
- Open a terminal and navigate to the project/test directory.
- Run the following command:

  	### `npx mocha test.js --timeout 60000`

## Usage

- You can now create shipments and track existing ones by entering the truck details and submitting the form.
- Truck movements and location updates will be stored on the Ethereum blockchain.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request to the GitHub repository.

