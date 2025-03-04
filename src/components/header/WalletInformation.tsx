import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {PropsWithChildren} from "react";

interface WalletInformationProps {
  address?: string;
  onDisconnect: () => void;
  logo: string
}

export default function WalletInformation({children, address, onDisconnect, logo}: WalletInformationProps & PropsWithChildren) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="border-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <img width={40} height={40} className="rounded-full" src={logo} alt="logo"/>
            <p className="text-base text-white">{address}</p>
          </div>
          <div className="w-6 h-6 text-white cursor-pointer" onClick={onDisconnect}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 7.3335C7.63133 7.3335 7.33333 7.03483 7.33333 6.66683V2.00016C7.33333 1.63216 7.63133 1.3335 8 1.3335C8.36867 1.3335 8.66667 1.63216 8.66667 2.00016V6.66683C8.66667 7.03483 8.36867 7.3335 8 7.3335ZM14 8.66683C14 6.5375 12.8506 4.5462 11.002 3.47087C10.6833 3.28553 10.2753 3.39343 10.0907 3.71143C9.90532 4.03009 10.0134 4.43822 10.3314 4.62288C11.772 5.46088 12.6667 7.01083 12.6667 8.66683C12.6667 11.2402 10.5727 13.3335 8 13.3335C5.42733 13.3335 3.33333 11.2402 3.33333 8.66683C3.33333 7.01083 4.22795 5.46088 5.66862 4.62288C5.98729 4.43822 6.09534 4.02943 5.90934 3.71143C5.72334 3.39343 5.31538 3.2842 4.99805 3.47087C3.14938 4.54687 2 6.5375 2 8.66683C2 11.9748 4.69133 14.6668 8 14.6668C11.3087 14.6668 14 11.9748 14 8.66683Z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-1">
          <p className="text-4xl text-white">$0<span className="text-[#5e5e5e]">.00</span></p>
          <div className="flex items-center">
            <div>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"
                   style={{width: 16, height: 16, color: "rgb(33, 201, 94)", transform: "rotate(180deg)"}}
              >
                <path
                  d="M10.6979 16.2453L6.31787 9.75247C5.58184 8.66118 6.2058 7 7.35185 7L16.6482 7C17.7942 7 18.4182 8.66243 17.6821 9.75247L13.3021 16.2453C12.623 17.2516 11.377 17.2516 10.6979 16.2453Z"
                  fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-[#5e5e5e]">0.00%</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center flex-col gap-5">
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="h-[86px] bg-[#311c31] hover:bg-[#38273c] text-[#fc72ff] p-4 rounded-2xl flex-1 flex flex-col justify-between">
              <div>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="8"
                     style={{width: 24, height: 24, color: "rgb(252, 116, 254)"}}
                >
                  <g id="bank">
                    <path
                      d="M2.5 6.76393C2.5 6.38516 2.714 6.0389 3.05279 5.8695L10.6584 2.06672C11.5029 1.64443 12.4971 1.64443 13.3416 2.06672L20.9472 5.8695C21.286 6.0389 21.5 6.38516 21.5 6.76393V7.9959C21.5 8.00435 21.4999 8.01278 21.4997 8.02118C21.4999 8.02927 21.5 8.03739 21.5 8.04553C21.5 8.5702 21.0747 8.99553 20.55 8.99553H20.5274C20.5183 8.99577 20.5092 8.9959 20.5 8.9959H3.5C3.49083 8.9959 3.48169 8.99577 3.47258 8.99553H3.45C2.92533 8.99553 2.5 8.5702 2.5 8.04553C2.5 8.03734 2.5001 8.02917 2.50031 8.02103C2.5001 8.01268 2.5 8.0043 2.5 7.9959V6.76393ZM4.45003 17.5455C3.89774 17.5455 3.45003 17.9932 3.45003 18.5455V20.3455C3.45003 20.8978 3.89774 21.3455 4.45003 21.3455H19.55C20.1023 21.3455 20.55 20.8978 20.55 20.3455V18.5455C20.55 17.9932 20.1023 17.5455 19.55 17.5455H4.45003ZM6.34995 10.4205C5.79766 10.4205 5.34995 10.8682 5.34995 11.4205V15.1205C5.34995 15.6728 5.79766 16.1205 6.34995 16.1205H7.19995C7.75223 16.1205 8.19995 15.6728 8.19995 15.1205V11.4205C8.19995 10.8682 7.75223 10.4205 7.19995 10.4205H6.34995ZM10.575 11.4205C10.575 10.8682 11.0227 10.4205 11.575 10.4205H12.425C12.9773 10.4205 13.425 10.8682 13.425 11.4205V15.1205C13.425 15.6728 12.9773 16.1205 12.425 16.1205H11.575C11.0227 16.1205 10.575 15.6728 10.575 15.1205V11.4205ZM16.8 10.4205C16.2477 10.4205 15.8 10.8682 15.8 11.4205V15.1205C15.8 15.6728 16.2477 16.1205 16.8 16.1205H17.65C18.2023 16.1205 18.65 15.6728 18.65 15.1205V11.4205C18.65 10.8682 18.2023 10.4205 17.65 10.4205H16.8Z"
                      fill="currentColor" fillRule="evenodd" clipRule="evenodd" id="Union"></path>
                  </g>
                </svg>
              </div>
              <span className="text-base font-medium leading-6">Buy</span>
            </div>
            <div className="h-[86px] bg-[#311c31] hover:bg-[#38273c] text-[#fc72ff] flex flex-col justify-between p-4 rounded-2xl flex-1">
              <div>
                <svg viewBox="0 0 29 28" fill="none" strokeWidth="8"
                     style={{width: 24, height: 24, color: "rgb(252, 116, 254)"}}>
                  <path
                    d="M14.8752 2.33301C8.43166 2.33301 3.2085 7.55617 3.2085 13.9997C3.2085 20.4432 8.43166 25.6663 14.8752 25.6663C21.3187 25.6663 26.5418 20.4432 26.5418 13.9997C26.5418 7.55617 21.3187 2.33301 14.8752 2.33301ZM18.9935 15.7847L15.4935 19.2847C15.413 19.3652 15.3163 19.4292 15.2101 19.4736C15.104 19.5179 14.9895 19.5413 14.8752 19.5413C14.7608 19.5413 14.6475 19.5179 14.5402 19.4736C14.4329 19.4292 14.3373 19.3652 14.2568 19.2847L10.7568 15.7847C10.415 15.4429 10.415 14.8887 10.7568 14.5468C11.0986 14.205 11.6528 14.205 11.9947 14.5468L14.0013 16.5535V9.33301C14.0013 8.85001 14.3933 8.45801 14.8763 8.45801C15.3593 8.45801 15.7513 8.85001 15.7513 9.33301V16.5535L17.7579 14.5468C18.0998 14.205 18.654 14.205 18.9958 14.5468C19.3376 14.8887 19.3354 15.4429 18.9935 15.7847Z"
                    fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-base font-medium leading-6">Receive</span>
            </div>
          </div>
          <div>
            <h6 className="text-white">
              Welcome to your wallet!
            </h6>
            <p className="text-[#9b9b9b] text-xs">
              Looks like you have a new wallet. Let’s get it funded before you make your first swap.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}