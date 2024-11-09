//task 4 Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to update the displayed portfolio value
function updatePortfolioValue() {
    const portfolioValueElement = document.getElementById('portfolio-value');
    portfolioValueElement.textContent = `$${calculatePortfolioValue().toFixed(2)}`;
}

// Function to update the portfolio allocation in the HTML
function updatePortfolioAllocation() {
    const portfolioAllocationElement = document.getElementById('portfolio-allocation');
    const allocationData = getPortfolioAllocation();

    // Clear current allocation
    portfolioAllocationElement.innerHTML = '';

    // Display updated allocation
    allocationData.forEach(asset => {
        const listItem = document.createElement('li');
        listItem.textContent = `${asset.name}: ${asset.allocation.toFixed(2)}%`;
        portfolioAllocationElement.appendChild(listItem);
    });
}

// Initial display of portfolio value and allocation
updatePortfolioValue();
updatePortfolioAllocation();

// Sample transactions to demonstrate the system (can be triggered by user input in a real app)
const buyTransaction = new Transaction(1, 'buy', 10);
buyTransaction.execute();
updatePortfolioValue();
updatePortfolioAllocation();

const sellTransaction = new Transaction(2, 'sell', 10); // Adjust quantity for a successful transaction
sellTransaction.execute();
updatePortfolioValue();
updatePortfolioAllocation();


