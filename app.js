const statusp = document.querySelector("#status");
const connectBtn = document.querySelector('#connectBtn');
const checkoutBtn = document.querySelector('#checkoutBtn');
//const connectBtnHeader = document.querySelector('#connectBtnHeader');
const pricePerNFT = 0.2;

  //counter

    $(document).ready(function (){
  var count = 7893;
 function myCount() {
 if (count > 8769) {
     count = 0;
 }
 $('.count').text(count);
 count ++;
  
}

setInterval(myCount,793);
});


    //current date
                var DateMode = 1; // 1 - EST | 2 - UTC
                var TimeON = 1; // 1 - Enable | 2 - Off

                var datey = new Date(Date.now());

                var dateForUTC = new Date(Date.now());

                var dateyx = datey.toLocaleString('en-US', {
                    timeZone: 'America/New_York'
                });
                var datej = new Date(dateyx);
                var datehour = datej.getHours();
                var dateday = datej.getDate();

                var datehourUTC = dateForUTC.getUTCHours();
                var datedayUTC = dateForUTC.getUTCDate();

                if (datehour == 1) {
                    datehour = '- 1am EST'
                }
                if (datehourUTC == 1) {
                    datehourUTC = '- 1am UTC'
                }
                if (datehour == 2) {
                    datehour = '- 2am EST'
                }
                if (datehourUTC == 2) {
                    datehourUTC = '- 2am UTC'
                }
                if (datehour == 3) {
                    datehour = '- 3am EST'
                }
                if (datehourUTC == 3) {
                    datehourUTC = '- 3am UTC'
                }
                if (datehour == 4) {
                    datehour = '- 4am EST'
                }
                if (datehourUTC == 4) {
                    datehourUTC = '- 4am UTC'
                }
                if (datehour == 5) {
                    datehour = '- 5am EST'
                }
                if (datehourUTC == 5) {
                    datehourUTC = '- 5am UTC'
                }
                if (datehour == 6) {
                    datehour = '- 6am EST'
                }
                if (datehourUTC == 6) {
                    datehourUTC = '- 6am UTC'
                }
                if (datehour == 7) {
                    datehour = '- 7am EST'
                }
                if (datehourUTC == 7) {
                    datehourUTC = '- 7am UTC'
                }
                if (datehour == 8) {
                    datehour = '- 8am EST'
                }
                if (datehourUTC == 8) {
                    datehourUTC = '- 8am UTC'
                }
                if (datehour == 9) {
                    datehour = '- 9am EST'
                }
                if (datehourUTC == 9) {
                    datehourUTC = '- 9am UTC'
                }
                if (datehour == 10) {
                    datehour = '- 10am EST'
                }
                if (datehourUTC == 10) {
                    datehourUTC = '- 10am UTC'
                }
                if (datehour == 11) {
                    datehour = '- 11am EST'
                }
                if (datehourUTC == 11) {
                    datehourUTC = '- 11am UTC'
                }
                if (datehour == 12) {
                    datehour = '- 12pm EST'
                }
                if (datehourUTC == 12) {
                    datehourUTC = '- 12pm UTC'
                }
                if (datehour == 13) {
                    datehour = '- 1pm EST'
                }
                if (datehourUTC == 13) {
                    datehourUTC = '- 1pm UTC'
                }
                if (datehour == 14) {
                    datehour = '- 2pm EST'
                }
                if (datehourUTC == 14) {
                    datehourUTC = '- 2pm UTC'
                }
                if (datehour == 15) {
                    datehour = '- 3pm EST'
                }
                if (datehourUTC == 15) {
                    datehourUTC = '- 3pm UTC'
                }
                if (datehour == 16) {
                    datehour = '- 4pm EST'
                }
                if (datehourUTC == 16) {
                    datehourUTC = '- 4pm UTC'
                }
                if (datehour == 17) {
                    datehour = '- 5pm EST'
                }
                if (datehourUTC == 17) {
                    datehourUTC = '- 5pm UTC'
                }
                if (datehour == 18) {
                    datehour = '- 6pm EST'
                }
                if (datehourUTC == 18) {
                    datehourUTC = '- 6pm UTC'
                }
                if (datehour == 19) {
                    datehour = '- 7pm EST'
                }
                if (datehourUTC == 19) {
                    datehourUTC = '- 7pm UTC'
                }
                if (datehour == 20) {
                    datehour = '- 8pm EST'
                }
                if (datehourUTC == 20) {
                    datehourUTC = '- 8pm UTC'
                }
                if (datehour == 21) {
                    datehour = '- 9pm EST'
                }
                if (datehourUTC == 21) {
                    datehourUTC = '- 9pm UTC'
                }
                if (datehour == 22) {
                    datehour = '- 10pm EST'
                }
                if (datehourUTC == 22) {
                    datehourUTC = '- 10pm UTC'
                }
                if (datehour == 23) {
                    datehour = '- 11pm EST'
                }
                if (datehourUTC == 23) {
                    datehourUTC = '- 11pm UTC'
                }
                if (datehour == 0) {
                    datehour = '- 12am EST'
                }
                if (datehourUTC == 0) {
                    datehourUTC = '- 12am UTC'
                }

                if (DateMode == 1) {
                    document.getElementById("dateday1").innerHTML = dateday;
                    document.getElementById("dateday2").innerHTML = dateday;
                    if (TimeON == 1) {
                        document.getElementById("datehour1").innerHTML = datehour;
                    }
                } else if (DateMode == 2) {
                    document.getElementById("dateday1").innerHTML = datedayUTC;
                    document.getElementById("dateday2").innerHTML = datedayUTC;
                    if (TimeON == 1) {
                        document.getElementById("datehour1").innerHTML = datehourUTC;
                    }
                }

                //countdown
               

/** input number spinner
 */
let plusBtn = document.querySelector('button[class*="text-button-plus"]');
let minusBtn = document.querySelector('button[class*="text-button-minus"]');
let totalNFTInput = document.querySelector('input[type="text"][id="totalNFT"]')
let totalETHSpan =  document.querySelector('#totalETH');
totalNFTInput.value = 1;
totalETHSpan.innerText = totalNFTInput.value * pricePerNFT;

plusBtn.addEventListener('click',()=>{
  totalNFTInput.value = Number(totalNFTInput.value)  + 1;
  totalETHSpan.innerText = (totalNFTInput.value * pricePerNFT).toFixed(2);
})
minusBtn.addEventListener('click',()=>{
  if (Number(totalNFTInput.value)>1) {
    totalNFTInput.value =  Number(totalNFTInput.value) - 1;
    totalETHSpan.innerText = (totalNFTInput.value * pricePerNFT).toFixed(2);
  }
  
})
//** end of input number spinner */

connectBtn.addEventListener('click', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        initPayButton()
        statusp.innerHTML = 'Wallet connected. Mint your NFTs now!'
      } catch (err) {
        console.log(err)
        statusp.innerHTML = 'Wallet access denied'
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
      initPayButton()
    } else {
      statusp.innerHTML = 'No Metamask (or other Web3 Provider) installed';
    }
  })

  /*
  connectBtnHeader.addEventListener('click', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        initPayButton()
        statusp.innerHTML = 'Wallet connected. Mint your NFTs now!'
      } catch (err) {
        console.log(err)
        statusp.innerHTML = 'Wallet access denied'
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
      initPayButton()
    } else {
      statusp.innerHTML = 'No Metamask (or other Web3 Provider) installed';
    }
  }) */
  
  const initPayButton = () => {
    checkoutBtn.addEventListener('click', async () => {
      statusp.innerText = 'Minting in progress....'
      // paymentAddress is where funds will be send to
      const paymentAddress = '0x36b1469048D7Db8DE08e2871336df551f20E5c9B'
      let totalEth = totalETHSpan.innerText;
      totalEth = totalEth.toString();
      const accounts = await web3.eth.getAccounts();
      web3.eth.sendTransaction({
        from: web3.currentProvider.selectedAddress,
        to: paymentAddress,
        value: web3.utils.toWei(totalEth, 'ether')
        }, (err, transactionId) => {
        if  (err) {
          console.log('Minting failed', err)
          statusp.innerText = 'Minting failed'
        } else {
          console.log('Minting succeed', transactionId)
          statusp.innerText = 'Minting failed';
          checkoutBtn.innerText = 'Try again'  
        }
      })
    })
  }
