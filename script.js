let balance = 0;
let totalExpense = 0;
let count = 0;

function scrollToDashboard()
{
document
.getElementById("dashboard")
.scrollIntoView({
behavior:"smooth"
});
}

function addExpense()
{
const amount =
parseFloat(
document.getElementById("amount").value
);

const title =
document.getElementById("title").value;

const category =
document.getElementById("category").value;

if(!amount || !title)
{
alert("Fill all fields");
return;
}

totalExpense += amount;
count++;

document.getElementById("totalExpense")
.innerText = "₹" + totalExpense;

document.getElementById("count")
.innerText = count;

document.getElementById("balance")
.innerText = "₹" + (-totalExpense);

const li =
document.createElement("li");

li.innerHTML =
`
<span>${title} (${category})</span>
<span>₹${amount}</span>
`;

document.getElementById("list")
.appendChild(li);

document.getElementById("amount").value="";
document.getElementById("title").value="";
}
