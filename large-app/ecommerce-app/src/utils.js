export default function formatCurrency(num) {
    console.log("formatCurrency: num is: ", num);
    return "$ " + Number(num.toFixed(1)).toLocaleString() + " ";
}

