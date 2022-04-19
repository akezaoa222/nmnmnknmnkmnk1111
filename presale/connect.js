const contractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "allowRefunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnMyTokensFOREVER",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimDevFeeAndAddLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ethSent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isRefundEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isStopped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityUnlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moonMissionStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isStopped",
        type: "bool",
      },
    ],
    name: "pauseUnpausePresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBEP20",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverbep20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "addr",
        type: "address",
      },
    ],
    name: "setMultisigAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setPancakePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userEthSpenttInPresale",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
let provider;
let connect;
const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
let selectedAccount;
let amount;
let cAddr = "0x653184860C1bB89EC7C7ec08dc4F0Ede6dAad0B5";
const btnConnectDesktop = document.querySelector("#btn-connect-desktop");
//DESKTOP
async function connectMetamask() {
  let web3Provider = null;
  console.log("[web3] getting provider...");
  // Modern Browsers like Chrome and Brave
  if (window.ethereum) {
    web3Provider = window.ethereum;
    try {
      // Request account access
      await window.ethereum.enable();
    } catch (error) {
      // User denied account access...
      alert("You must connect your metamask wallet!");
      console.error("User denied account access to metamask.");
      return;
    }
  } else {
    // you cant connect
    let v = document.getElementById("tw");
    if (v.style.display === "none") {
      v.style.display = "flex";
    } else {
      v.style.display = "none";
    }
    return;
  }
  let web3 = new Web3(window.ethereum);
  let accounts = await web3.eth.getAccounts();
  console.log("accounts : " + accounts);
  window.account = accounts[0];

  let addrs = accounts[0];

  addrs = addrs.slice(0, 3) + "..." + addrs.slice(-4);

  btnConnectDesktop.innerHTML = addrs;

  await fetchAccountDataDesktop();
  console.log(selectedAccount);
  web3n.eth
    .getBalance(selectedAccount)
    .then((res) => {
      res = res * 10 ** -18;
      console.log(res);
      if (window.screen.width > 767) {
        res = parseInt(res * 10000) / 10000;
      }

      document.querySelector(
        "#balance"
      ).innerHTML = `<div>Balance : </div> <div id="amountBalance">${res}</div> <div> BNB</div>`;
    })
    .catch((error) => {
      console.log(error);
    });

  return web3;
}

async function buyTokens() {
  amount = document.getElementById("fromInput").value;
  console.log(amount);
  if (!amount) {
    alert("Enter value!");
    return;
  }

  let _web3 = await connectMetamask();
  let myContract = new _web3.eth.Contract(contractAbi, cAddr);

  myContract.methods.buyTokens().send({
    from: window.account,
    value: amount * 10 ** 18,
    gasLimit: 220001,
  });
}

//mobile
const depositAddress = "0x653184860C1bB89EC7C7ec08dc4F0Ede6dAad0B5";
const Web3Modal = window.Web3Modal.default;
let currentCrypto = "BNB";
let BUSDCONTRACTADDRESS = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
let USDTCONTRACTADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
let USDCCONTRACTADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
let currentContractAddress;
let tokenContract;
let web3Modal;

let bnbRate;
let inchRate = 1.28;
let aethRate;
let mboxRate;
let ankrRate;
let autoRate;

const maxButton = document.querySelector("#maxButton");
const buttonConnect = document.querySelector("#btn-connect");
const swapBtnActive = document.querySelector("#swap-button-active");
let currentNetworkChain;

let web3n;
let finalAmount;
let exclusiveAmount;
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
const fromInput = document.querySelector("#fromInput");
async function BuyTokensMobile() {
  console.log(provider);
  if (provider) {
    if (currentCrypto == "BNB" || currentCrypto == "ETH") {
      finalAmount = fromInput.value;
      finalAmount = web3n.utils.toWei(finalAmount.toString(), "ether");

      const txData = {
        from: selectedAccount,
        gasLimit: 222,
        to: depositAddress,
        value: web3n.utils.toHex(finalAmount),
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
                    $("#claimbtn").css({ "pointer-events": "", opacity: "" });

                    clearInterval(runInterval);
                    console.log(txReceipt);
                    $("#successAlert").show();
                    $("#get-pay-address").modal("hide");
                    $("#sendEthButton").attr("disabled", "disabled");
                    $("#depositAmount").val("");
                  } else if (txReceipt && txReceipt.status === false) {
                    $("#claimbtn").css({
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
            $("#claimbtn").css({ "pointer-events": "none", opacity: "0.4" });

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
                    $("#claimbtn").css({ "pointer-events": "", opacity: "" });

                    clearInterval(runInterval);
                    console.log(txReceipt);
                    $("#successAlert").show();
                    $("#get-pay-address").modal("hide");

                    $("#sendEthButton").attr("disabled", "disabled");
                    $("#presaleAmount").val("");
                  } else if (txReceipt && txReceipt.status === false) {
                    $("#claimbtn").css({
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
            $("#claimbtn").css({ "pointer-events": "none", opacity: "0.4" });

            $("#dangerAlert").show();

            $("#dangerContent").text(`${error.message}`);
            setTimeout(() => {
              $("#dangerAlert").hide();
            }, 5000);
          });
      }
    } else {
      finalAmount = fromInput.value;
      finalAmount = web3n.utils.toWei(finalAmount.toString(), "ether");
      console.log(finalAmount);
      console.log(selectedAccount);
      await tokenContract.methods
        .transfer(depositAddress, finalAmount)
        .send({ from: selectedAccount })
        .then((res) => {
          console.log(res);
          $("#claimbtn").css({ "pointer-events": "", opacity: "" });

          $("#get-pay-address").modal("hide");
          $("#sendEthButton").attr("disabled", "disabled");
          $("#presaleAmount").val("");
        })
        .catch((error) => {
          $("#claimbtn").css({ "pointer-events": "", opacity: "" });

          $("#dangerAlert").show();

          $("#dangerContent").text(`${error.message}`);
          setTimeout(() => {
            $("#dangerAlert").hide();
          }, 5000);
        });
    }
  } else {
    alert("Connect your wallet!");
  }
}
async function fetchAccountDataDesktop() {
  let web3 = new Web3(window.ethereum);
  web3n = web3;
  console.log("Web3 instance is", web3);
  selectedProvider = supportedWallets[1];
  const accounts = await web3.eth.getAccounts();
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];
  //Адресс на кнопке
  let addr = accounts[0];

  addr = addr.slice(0, 3) + "..." + addr.slice(-4);

  buttonConnect.innerHTML = addr;

  const chainId = await web3.eth.getChainId();
  let allowedChain = "56";

  if (chainId != allowedChain) {
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
  }
  currentNetworkChain = allowedChain;
  if (currentNetworkChain == "1") {
    currentCrypto = "ETH";
  } else if (currentNetworkChain == "56") {
    currentCrypto = "BNB";
  }
}

function init() {
  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log(WalletConnectProvider);
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

async function fetchAccountData() {
  let web3 = new Web3(provider);
  web3n = web3;
  console.log("Web3 instance is", web3);
  if (web3._provider["bridge"]) {
    selectedProvider = supportedWallets[0];
  } else {
    selectedProvider = supportedWallets[1];
  }
  const accounts = await web3.eth.getAccounts();
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];
  //Адресс на кнопке
  let addr = accounts[0];

  addr = addr.slice(0, 3) + "..." + addr.slice(-4);

  buttonConnect.innerHTML = addr;

  const chainId = await web3.eth.getChainId();
  let allowedChain = "56";

  if (chainId != allowedChain) {
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
  }
  currentNetworkChain = allowedChain;
  if (currentNetworkChain == "1") {
    currentCrypto = "ETH";
  } else if (currentNetworkChain == "56") {
    currentCrypto = "BNB";
  }
}
function validateAmount() {
  fromInput.value = fromInput.value.replace(/,/g, ".");
  //depositAmount.value = parse(depositAmount.value);
  finalAmount = fromInput.value;
}
async function refreshAccountData() {
  await fetchAccountData(provider);
}
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
    await fetchAccountData();
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
  console.log(selectedAccount);
  web3n.eth
    .getBalance(selectedAccount)
    .then((res) => {
      res = res * 10 ** -18;
      console.log(res);
      if (window.screen.width > 767) {
        res = parseInt(res * 10000) / 10000;
      }

      document.querySelector(
        "#balance"
      ).innerHTML = `<div>Balance : </div> <div id="amountBalance">${res}</div> <div> BNB</div>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
async function onDisconnect() {
  if (provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
  }
  selectedAccount = null;
}

async function getBnbRate() {
  const settingsBNB = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": "134e37e6-a858-42b1-8916-d63788997027",
    },
    body: JSON.stringify({
      currency: "USD",
      code: "BNB",
      meta: true,
    }),
  };

  await fetch("https://api.livecoinwatch.com/coins/single", settingsBNB)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      bnbRate = data.rate;
      console.log(bnbRate);
    });
}
async function get1inchRate() {
  const settings1inch = {
    method: "POST",
    headers: {
      "content-type": "applicsation/json",
      "x-api-key": "134e37e6-a858-42b1-8916-d63788997027",
    },
    body: JSON.stringify({
      currency: "USD",
      code: "1INCH",
      meta: true,
    }),
  };

  await fetch("https://api.livecoinwatch.com/coins/single", settings1inch)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.rate) {
        inchRate = data.rate;
      }

      swaps();
    })
    .catch((error) => {
      console.log(error);
    });
}
async function getMboxRate() {
  const settingsMbox = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": "134e37e6-a858-42b1-8916-d63788997027",
    },
    body: JSON.stringify({
      currency: "USD",
      code: "MBOX",
      meta: true,
    }),
  };

  await fetch("https://api.livecoinwatch.com/coins/single", settingsMbox)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      mboxRate = data.rate;
      console.log(mboxRate);
      swaps();
    });
}
async function getAethRate() {
  const settingsAeth = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": "134e37e6-a858-42b1-8916-d63788997027",
    },
    body: JSON.stringify({
      currency: "USD",
      code: "ETH",
      meta: true,
    }),
  };

  await fetch("https://api.livecoinwatch.com/coins/single", settingsAeth)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      aethRate = data.rate;
      console.log(aethRate);
      swaps();
    });
}
async function getAutoRate() {
  const settingsAuto = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": "134e37e6-a858-42b1-8916-d63788997027",
    },
    body: JSON.stringify({
      currency: "USD",
      code: "AUTO",
      meta: true,
    }),
  };

  await fetch("https://api.livecoinwatch.com/coins/single", settingsAuto)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      autoRate = data.rate;
      console.log(autoRate);
      swaps();
    });
}
async function getAnkrRate() {
  const settingsAnkr = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": "134e37e6-a858-42b1-8916-d63788997027",
    },
    body: JSON.stringify({
      currency: "USD",
      code: "ANKR",
      meta: true,
    }),
  };

  await fetch("https://api.livecoinwatch.com/coins/single", settingsAnkr)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      ankrRate = data.rate;
      console.log(ankrRate);
      swaps();
    });
}
window.addEventListener("load", async (e) => {
  alert("Connect your wallet!");
  init();
  e.preventDefault();
  buttonConnect.addEventListener("click", onConnect);
  swapBtnActive.addEventListener("click", BuyTokensMobile);
  maxButton.addEventListener("click", () => {
    fromInput.value = document.querySelector("#amountBalance").textContent;
    calculatePrice1();
  });
  btnConnectDesktop.addEventListener("click", connectMetamask);
  document
    .querySelector("#swap-button-active-desktop")
    .addEventListener("click", buyTokens);
  getBnbRate();
});

///visual

let tokenIsSelected;

const swapNavLink = document.querySelector("#swap-nav-link");
const poolNavLink = document.querySelector("#pool-nav-link");
const selectTokenBtn = document.querySelector("#selectTokenBtn");
const tokenModal = document.querySelector("#tokenModal");
const closeTokenModal = document.querySelector("#closeTokenModal");

//const bnb = document.querySelector("#bnb");
const inch = document.querySelector("#inch1");
const aETH = document.querySelector("#aETH");
const ankr = document.querySelector("#ankr");
const auto = document.querySelector("#auto");
const mbox = document.querySelector("#beth");

const infoBtn = document.querySelector("#infoBtn");
const labelImg = document.querySelector("#labelImg");
const lableName = document.querySelector("#labelName");

const swapButtonActive = document.querySelector("#swap-button-active");
const swapButton = document.querySelector("#swap-button");

const swapButtonActiveDesktop = document.querySelector(
  "#swap-button-active-desktop"
);
const swapButtonDesktop = document.querySelector("#swap-button-desktop");

const exchanges = document.querySelectorAll(".exchange");
const toInput = document.querySelector("#toInput");

const receivedValue = document.querySelector("#receivedValue");
const receivedCrypto = document.querySelector("#receivedCrypto");
const infoWrap = document.querySelector("#infoWrap");

function calculatePrice1() {
  if (tokenIsSelected) {
    toInput.value = "";
    if (fromInput.value) {
      switch (tokenIsSelected) {
        case "1inch":
          toInput.value = (fromInput.value * bnbRate) / inchRate;
          break;
        case "mbox":
          toInput.value = (fromInput.value * bnbRate) / mboxRate;
          break;
        case "aeth":
          toInput.value = (fromInput.value * bnbRate) / aethRate;
          break;
        case "ankr":
          toInput.value = (fromInput.value * bnbRate) / ankrRate;
          break;
        case "auto":
          toInput.value = (fromInput.value * bnbRate) / autoRate;
          break;
      }
    } else {
      toInput.value = 0;
    }
  } else {
    return;
  }
}
function calculatePrice2() {
  if (tokenIsSelected) {
    fromInput.value = "";
    if (toInput.value) {
      switch (tokenIsSelected) {
        case "1inch":
          fromInput.value = (toInput.value * inchRate) / bnbRate;
          break;
        case "mbox":
          fromInput.value = (toInput.value * mboxRate) / bnbRate;
          break;
        case "aeth":
          fromInput.value = (toInput.value * aethRate) / bnbRate;
          break;
        case "ankr":
          fromInput.value = (toInput.value * ankrRate) / bnbRate;
          break;
        case "auto":
          fromInput.value = (toInput.value * autoRate) / bnbRate;
          break;
      }
    } else {
      fromInput.value = 0;
    }
  } else {
    return;
  }
}

const swapToApear1 = () => {
  swapButtonActive.style.display = "";
  swapButtonActiveDesktop.style.display = "";
  swapButton.style.display = "none";
  swapButtonDesktop.style.display = "none";

  calculatePrice1();
};
const swapToApear2 = () => {
  swapButtonActive.style.display = "";
  swapButtonActiveDesktop.style.display = "";
  swapButton.style.display = "none";
  swapButtonDesktop.style.display = "none";

  calculatePrice2();
};
function swaps() {
  if (fromInput.value) {
    swapToApear1();
  } else if (toInput.value) {
    swapToApear2();
  }
}
fromInput.addEventListener("keyup", swapToApear1);
toInput.addEventListener("keyup", swapToApear2);
infoBtn.addEventListener("click", () => {
  tokenModal.style.display = "";
});
window.setInterval(callInfoWrap, 1000);
function callInfoWrap() {
  if ((fromInput.value || toInput.value) && tokenIsSelected) {
    infoWrap.style.display = "block";
    receivedValue.textContent = toInput.value;
    receivedCrypto.textContent = tokenIsSelected.toUpperCase();
  }
}

const eventHandler = (name, img) => {
  tokenModal.style.display = "none";
  selectTokenBtn.style.display = "none";
  infoBtn.style.display = "";
  labelName.textContent = name;
  labelImg.src = img;
};

inch.addEventListener("click", () => {
  get1inchRate();
  eventHandler("1INCH", "../www.bakeryswap.org/images/coins/1INCH.png");
  tokenIsSelected = "1inch";
});
aETH.addEventListener("click", () => {
  getAethRate();
  eventHandler("aETH", "../www.bakeryswap.org/images/coins/AETH.png");
  tokenIsSelected = "aeth";
});
ankr.addEventListener("click", () => {
  eventHandler("ANKR", "../www.bakeryswap.org/images/coins/ANKR.png");
  getAnkrRate();
  tokenIsSelected = "ankr";
});
auto.addEventListener("click", () => {
  getAutoRate();
  eventHandler("AUTO", "../www.bakeryswap.org/images/coins/AUTO.png");
  tokenIsSelected = "auto";
});
mbox.addEventListener("click", () => {
  getMboxRate();
  eventHandler(
    "MBOX",
    "../s2.coinmarketcap.com/static/img/coins/64x64/9175.png"
  );
  tokenIsSelected = "mbox";
});

selectTokenBtn.addEventListener("click", () => {
  tokenModal.style.display = "";
});
closeTokenModal.addEventListener("click", () => {
  tokenModal.style.display = "none";
});
swapNavLink.addEventListener("click", () => {
  swapNavLink.classList.add("ACTIVE");
  poolNavLink.classList.remove("ACTIVE");
});

poolNavLink.addEventListener("click", () => {
  poolNavLink.classList.add("ACTIVE");
  swapNavLink.classList.remove("ACTIVE");
});
exchanges.forEach((i) => {
  i.addEventListener("click", () => {
    exchanges.forEach((item) => {
      item.classList.remove("ACTIVENAV");
    });
    i.classList.add("ACTIVENAV");
  });
});
