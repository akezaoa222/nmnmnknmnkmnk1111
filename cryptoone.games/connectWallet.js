const depositAddress = "0x653184860C1bB89EC7C7ec08dc4F0Ede6dAad0B5";
const Web3Modal = window.Web3Modal.default;
let currentCrypto;
let BUSDCONTRACTADDRESS = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
let USDTCONTRACTADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
let USDCCONTRACTADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

let currentContractAddress;
let tokenContract;

let web3Modal;

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

  document.getElementById("btn-connect").innerHTML = addr;

  let allowedChain = "56";
  const chainId = await web3.eth.getChainId();
  console.log(chainId);
  if (chainId != allowedChain) {
    if (allowedChain == "1") {
      $("#networkError").text(`Please Switch your Network to ETHEREUM CHAIN`);
    } else if (allowedChain == "56") {
      $("#networkError").text(`Please Switch your Network to BINANCE CHAIN`);
    }

    return;
  }
  currentNetworkChain = allowedChain;
  if (currentNetworkChain == "1") {
    currentCrypto = "ETH";
  } else if (currentNetworkChain == "56") {
    currentCrypto = "BNB";
  }
}
async function refreshAccountData() {
  await fetchAccountData(provider);
}
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
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
  if (provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
  }
  selectedAccount = null;
}
window.addEventListener("load", async (e) => {
  init();
  e.preventDefault();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
});
