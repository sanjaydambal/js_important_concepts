

// 1. Get grocery list from mother
function getGroceryList() {
    return [
        { item: 'Rice', quantity: 27},
        { item: 'Sugar', quantity: 1 },
        { item: 'Oil', quantity: 3 }
    ];
}

// 2. Collect approximate amount from father
function collectAmountFromFather() {
    return 1000; // Amount in currency
}

// 3. Choose transport (bike, cycle, car)
function commuteToStore(transportMode) {
    console.log(`Commuting to the store using ${transportMode}`);
}

// 4. Provide list to store owner
function provideListToOwner(list) {
    console.log("Providing list to the store owner.");
    return list;
}

// 5. Employees in different sections gather items
function collectItemsFromStore(list, storeInventory) {
    const collectedItems = [];
    let notFoundItems = [];

    try {
        list.forEach(grocery => {
            const section = storeInventory[grocery.item];

            if (section && section.quantity >= grocery.quantity) {
                section.quantity -= grocery.quantity;
                collectedItems.push(grocery);
            } else {
                notFoundItems.push(grocery);
            }
        });

        // Throw an error if any items are not found or insufficient in quantity
        if (notFoundItems.length > 0) {
            throw new Error("Some items are missing or have insufficient quantity.");
        }

        return { collectedItems, notFoundItems: [] }; // All items found, no missing items

    } catch (error) {
        // Handle the error by logging missing items
        console.log(error.message);
        notFoundItems.forEach(item => console.log(`${item.item} - ${item.quantity}`));
        return { collectedItems, notFoundItems }; // Return both collected and missing items

    } finally {
        // Log summary of items found and not found
        console.log(`Total items found: ${collectedItems.length}`);
        console.log(`Total items not found: ${notFoundItems.length}`);
    }
}


// 7. Calculate total amount and total items count
function calculateTotalAmountAndCount(collectedItems, pricing) {
    let totalAmount = 0;
    let totalCount = 0;

    collectedItems.forEach(item => {
        totalAmount += pricing[item.item] * item.quantity;
        totalCount += item.quantity;
    });

    return { totalAmount, totalCount };
}

// 8. Apply discount logic based on total amount
function applyDiscount(totalAmount) {
    let discount = 0;
    switch (true) {
        case totalAmount > 1000:
            discount = totalAmount * 0.1; // 10% discount
            break;
        case totalAmount > 500:
            discount = totalAmount * 0.05; // 5% discount
            break;
        default:
            discount = 0;
    }
    return totalAmount - discount;
}

// 9. Make payment and handle change
function makePayment(totalAmount, amountPaid) {
    const change = amountPaid - totalAmount;
    if (change >= 0) {
        console.log(`Payment successful. Change to return: ${change}`);
    } else {
        console.log(`Insufficient amount! Please provide extra ${Math.abs(change)}`);
    }
    return change;
}

// 10. Cross-check items at home
function crossCheckItems(collectedItems, originalList) {
    const isComplete = collectedItems.length === originalList.length;
    if (isComplete) {
        console.log("Mother has cross-checked the items, everything is present.");
    } else {
        console.log("Some items are missing.");
    }
    return isComplete;
}

// 11. Father verifies the amount spent
function verifyAmountSpent(amountSpent, amountPaid) {
    if (amountSpent <= amountPaid) {
        console.log("Father has verified the amount, all is good.");
    } else {
        console.log("Father found a mismatch in the spending.");
    }
}


// Main function to execute the process
function buyGroceries() {
    // Store inventory setup
    const storeInventory = {
        'Rice': { quantity: 5 },
        'Sugar': { quantity: 2 },
        'Oil': { quantity: 4 }
    };

    // Pricing setup
    const pricing = {
        'Rice': 50,
        'Sugar': 30,
        'Oil': 100
    };

    // Step-by-step execution
    const groceryList = getGroceryList();
    const amountFromFather = collectAmountFromFather();
    commuteToStore('bike');

    const providedList = provideListToOwner(groceryList);
    const { collectedItems, notFoundItems } = collectItemsFromStore(providedList, storeInventory);

    if (notFoundItems.length === groceryList.length) {
        // If no items were found, cancel the process
        console.log("Buying process incomplete. None of the items were found.");
        return;
    } else if (notFoundItems.length > 0) {
        // If some items were not found, inform the user but proceed
        console.log("Some items were not found, but proceeding with the available items.");
        notFoundItems.forEach(item => console.log(`${item.item} - ${item.quantity}`));
    }

    // Proceed with the collected items
    const { totalAmount, totalCount } = calculateTotalAmountAndCount(collectedItems, pricing);
    console.log(`Total items: ${totalCount}, Total amount before discount: ${totalAmount}`);

    const finalAmount = applyDiscount(totalAmount);
    console.log(`Final amount after discount: ${finalAmount}`);

    const change = makePayment(finalAmount, amountFromFather);
    if (change < 0) {
        console.log("Cannot proceed with insufficient funds.");
        return;
    }

    console.log("Returning home...");
    const allItemsCrossChecked = crossCheckItems(collectedItems, groceryList);
    verifyAmountSpent(finalAmount, amountFromFather);
}

// Execute the process
buyGroceries();




