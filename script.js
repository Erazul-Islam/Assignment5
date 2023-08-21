let totalPrice = 0;
function handleClick(target) {
    const selectedItem = document.getElementById('summer-sale');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    document.getElementById('summer-sale').innerText = itemName;

    const price = target.childNodes[3].childNodes[5].innerText;
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById('total').innerText = totalPrice;

    if (totalPrice === 1 || totalPrice > 1) {
        document.getElementById("btn-2").removeAttribute("disabled")
    }
}

// document.getElementById("btn").disabled = false;

document.getElementById('btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-1').value;
    if (totalPrice === 200 || 200 < totalPrice && inputField === 'SELL200') {
        const DiscountPrice = (totalPrice * .2).toFixed(2);
        const total = totalPrice - DiscountPrice;
        return [document.getElementById('discount').innerText = DiscountPrice, document.getElementById('real-total').innerText = total];
    }
})

function goHome(){
    document.getElementById('total').innerText = " ";
    document.getElementById('discount').innerText = " ";
    document.getElementById('real-total').innerText = " ";
    document.getElementById('input-1').value = " ";
}