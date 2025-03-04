import Header from "@/components/header";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";

function App() {

  return (
    <main>
      <Header />
      <div className="flex items-center justify-center pt-24 w-full">
        <div className="flex items-center justify-center flex-col gap-5 w-[480px]">
          <h2 className="text-white text-[64px] leading-[72px] text-center">Swap anytime, any where.</h2>
          <div className="bg-[#101010] w-full rounded-3xl p-2 flex items-center justify-center flex-col gap-1">
            <div className="flex items-center justify-center flex-col gap-0.5 w-full">
              <div className="bg-[#131313] w-full p-4 flex border border-[#ffffff1f] basis-auto flex-col gap-2 rounded-[20px]">
                <p className="text-[#9B9B9B] font-medium leading-6">Sell</p>
                <div className="flex items-center justify-between">
                  <Input className="placeholder:text-[#5E5E5E] text-white !text-4xl flex-1 p-0 h-auto !border-none !outline-none" placeholder="0" />
                  <div className="flex items-center justify-center h-[38px] text-white font-medium leading-[18px] rounded-full border border-[#393939] px-3">
                    ETH
                  </div>
                </div>
                <p className="text-[#9B9B9B] font-medium leading-6 text-sm">$0</p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-0.5 w-full">
              <div className="bg-[#1B1B1B] w-full p-4 flex basis-auto flex-col gap-2 rounded-[20px]">
                <p className="text-[#9B9B9B] font-medium leading-6">Sell</p>
                <div className="flex items-center justify-between">
                  <Input className="placeholder:text-[#5E5E5E] bg-transparent text-white !text-4xl flex-1 p-0 h-auto !border-none !outline-none" placeholder="0" />
                  <div className="flex items-center justify-center h-[38px] text-white font-medium leading-[18px] rounded-full border border-[#393939] px-3">
                    ETH
                  </div>
                </div>
                <p className="text-[#9B9B9B] font-medium leading-6 text-sm">$0</p>
              </div>
            </div>
            <Button className="w-full rounded-[20px] h-[54px] text-[18px]">Get started</Button>
          </div>
          <p className="text-[#9B9B9B] leading-6 font-medium text-[18px] text-center">The largest onchain marketplace. Buy and sell crypto on Ethereum and 11+ other chains. </p>
        </div>
      </div>
    </main>
  )
}

export default App
