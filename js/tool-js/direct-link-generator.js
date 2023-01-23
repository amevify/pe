let calculator1 = document.querySelector(".calculator1");
let calculator2 = document.querySelector(".calculator2");
//paypal calculator code start
const paypalCommPct = 3.49,
 PaypalFixedFee = 0.49;
const paypalFeeInp = document.getElementById('paypalFeeInput');
const pcalculateBtn = document.getElementById('CalculateBtn');
const presult = document.getElementById("result");
let calculateAmount = (event) => {
    event.preventDefault();
    let amount = parseInt(paypalFeeInp.value);
    let ownFee = (amount * paypalCommPct / 100 + PaypalFixedFee),
      senderFee = ((100 * amount) + 49) / 96.51 - amount;
    let aPlusS = amount + senderFee;
    let amountPlusSender = aPlusS.toFixed(2);
    presult.innerHTML = `<div class='result-container'>
    <div style='min-width: 300px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC;'>YOU PAY FEES</h2>
        <p>If you ask for <b>$${amount}</b>, you will get <br /><span style='font-size: 28px; font-weight: bold;'>$${amount - ownFee.toFixed(2)}</span></p>
        <p>PayPal Fee - $${ownFee.toFixed(2)}</p>
        
    </div>
    <div style='min-width: 300px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC;'>SENDER PAY FEES</h2>
        <p>If you want <b>$${amount}</b>, you should ask for <br /><span style='font-size: 28px; font-weight: bold;'>$${amountPlusSender}</span></p>
        <p>PayPal Fee - $${senderFee.toFixed(2)}</p>
    </div>
    </div>`
   paypalFeeInp.value = "";
}
//paypal calculator code end
//stripe calculator code start
const stripeCommPct = 2.9,
    stripeFixedFee = 0.30;
const stripeFeeInp = document.getElementById('stripeFeeInput');
const scalculateBtn = document.getElementById('CalculateBtn2');
const sresult = document.getElementById("result2");
let calculateAmount2 = (event) => {
    event.preventDefault();
    let amount2 = parseInt(stripeFeeInp.value);
    let ownFee2 = amount2 * stripeCommPct / 100 + stripeFixedFee,
      senderFee2 = ((100 * amount2) + 30) / 97.1 - amount2;
      let aPlusS = amount2 + senderFee2;
      let amountPlusSender = aPlusS.toFixed(2);
   sresult.innerHTML = `<div class='result-container'>
    <div style='min-width: 400px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC; font-weight: 500;'>YOU PAY FEES</h2>
        <p>If you ask for <b>$${amount2}</b>, you will get <br /><span style='font-size: 28px; font-weight: 600;'>$${amount2-ownFee2.toFixed(2)}</span></p>
        <p>Stripe Fee - $${ownFee2.toFixed(2)}</p>
    </div>
    <div style='min-width: 400px; border: 1px solid #CCC; border-radius: 5px; display: inline-block; margin: 5px; min-width: 260px; max-width: 400px; width: 80%;' class='result1'>
        <h2 style='padding: 10px;border-bottom: 1px solid #CCC; font-weight: 500;'>SENDER PAY FEES</h2>
        <p>If you want <b>$${amount2}</b>, you should ask for <br /><span style='font-size: 28px; font-weight: 600;'>$${amountPlusSender}</span></p>
        <p>Stripe Fee - $${senderFee2.toFixed(2)}</p>
        
    </div>
    </div>`
    stripeFeeInp.value = "";
    return false;
}
// stripe code end
// paypal and stripe btn calcutator change
let navlink1 = document.querySelector('.n-link1');
let navlink2 = document.querySelector('.n-link2');
navlink1.onclick = () => {
 // hide and show paypal btn 1
 navlink2.classList.remove("active")
 navlink1.classList.add("active")
 calculator2.classList.remove("show");
 calculator2.classList.add("hide");
 calculator1.classList.remove("hide");
 calculator1.classList.add("show");
}
navlink2.onclick = () => {
   // hide and show stripe btn
   navlink1.classList.remove("active")
   navlink2.classList.add("active")
   calculator1.classList.remove("show");
   calculator1.classList.add("hide");
   calculator2.classList.remove("hide");
   calculator2.classList.add("show");
   }
// calculate button code here

  