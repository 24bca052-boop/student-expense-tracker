let expenses = [];

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    displayExpenses();
}

function displayExpenses() {
    const list = document.getElementById("expenseList");
    const totalElement = document.getElementById("total");

    list.innerHTML = "";

    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                <strong>${expense.name}</strong><br>
                ₹${expense.amount} - ${expense.category}
            </span>
            <button class="delete-btn" onclick="deleteExpense(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });

    totalElement.textContent = "₹" + total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}
