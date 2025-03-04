import {Button} from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {useState} from "react";
import {ethers} from "ethers";
import {shortenAddress} from "@/lib/utils.ts";
import WalletInformation from "@/components/header/WalletInformation.tsx";
import metamaskLogo from "@/assets/images/metamask-logo.svg";
import phantomLogo from "@/assets/images/phantom-logo.png";

export default function ConnectButton() {
  const [showWallet, setShowWallet] = useState(false);
  const [ethAddress, setEthAddress] = useState(null);
  const [solAddress, setSolAddress] = useState(null);
  
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setEthAddress(accounts[0]);
        setShowWallet(false);
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("No metamask install!");
    }
  };
  
  const connectPhantom = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setSolAddress(response.publicKey.toString());
        setShowWallet(false);
      } catch (error) {
        console.error("Phantom connection error:", error);
      }
    } else {
      alert("No phantom install!");
    }
  };
  
  const disconnectWallet = async () => {
    if (window.solana?.isPhantom) {
      await window.solana.disconnect();
    }
    setSolAddress(null);
    setEthAddress(null);
  };
  
  console.log("sol", solAddress);
  
  return (
    <div>
      <DropdownMenu open={showWallet} onOpenChange={setShowWallet}>
        {
          ethAddress || solAddress ? (
            <WalletInformation address={shortenAddress(ethAddress || solAddress || "")} logo={ethAddress ? metamaskLogo : phantomLogo} onDisconnect={disconnectWallet}>
              <div
                className="cursor-pointer h-9 py-[0.5rem] px-[0.25rem] flex items-center justify-center gap-2 rounded-full text-white bg-[#1b1b1b] border border-[#1b1b1b] hover:bg-[#131313] hover:border-[#131313]">
                <img width={24} height={24} className="rounded-full" src={ethAddress ? metamaskLogo : phantomLogo}
                     alt="logo"/>
                {shortenAddress(ethAddress || solAddress || "")}
              </div>
            </WalletInformation>
          ) : (
            <DropdownMenuTrigger asChild>
              <Button variant="default">Connect</Button>
            </DropdownMenuTrigger>
          )
        }
        <DropdownMenuContent className="min-w-[355px] rounded-[20px] px-4 pt-4 pb-5 bg-[#131313]">
          <DropdownMenuLabel className="leading-6">Connect a wallet</DropdownMenuLabel>
          <div className=" flex items-center justify-center flex-col gap-0.5 cursor-pointer">
            <div
              className="bg-[#1b1b1b] flex items-center justify-between p-[18px] w-full rounded-ss-2xl rounded-se-2xl hover:bg-[#ffffff12]">
              <div className="flex items-center gap-2" onClick={() => connectMetaMask()}>
                <img width={40} height={40} alt="metamask" className="rounded-lg" src={metamaskLogo}/>
                <h2 className="text-base font-medium ">Metamask</h2>
              </div>
              <p className="text-[#9B9B9B] text-xs font-medium">Detected</p>
            </div>
            <div
              className="bg-[#1b1b1b] flex items-center justify-between p-[18px] w-full rounded-es-2xl rounded-ee-2xl hover:bg-[#ffffff12]">
              <div className="flex items-center gap-2" onClick={() => connectPhantom()}>
                <img width={40} height={40} alt="phantom" src={phantomLogo} />
                <h2 className="text-base font-medium ">Phantom</h2>
              </div>
              <p className="text-[#9B9B9B] text-xs font-medium">Detected</p>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

