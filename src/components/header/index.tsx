import logo from "@/assets/images/logo.svg";
import {Command, CommandShortcut} from "@/components/ui/command.tsx";
import { CommandInput} from "cmdk";
import {Button} from "@/components/ui/button.tsx";
import {Search} from "lucide-react";
export default function Header() {
	return (
		<header className="fixed top-0 w-full h-[72px] py-[15px] px-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center gap-1">
					<img src={logo} alt={logo} />
					<span className="text-primary text-[18px] font-semibold">Uniswap</span>
				</div>
				<Command className="w-[400px]">
					<div className="flex items-center justify-between gap-1 px-4 py-2">
						<Search className="w-5 h-5" />
						<CommandInput className="flex-1 bg-transparent border-none outline-none" placeholder="Search tokens" />
						<CommandShortcut className="bg-[#ffffff12] rounded-sm px-2 py-0.5 text-xs text-[#9b9b9b] leading-4 opacity-60">/</CommandShortcut>
					</div>
					
					{/*<CommandList>*/}
					{/*	<CommandEmpty>No results found.</CommandEmpty>*/}
					{/*	<CommandGroup className="text-sm text-white font-medium pl-4" heading="Settings">*/}
					{/*		<CommandItem>*/}
					{/*			<User />*/}
					{/*			<span>Profile</span>*/}
					{/*		</CommandItem>*/}
					{/*		<CommandItem>*/}
					{/*			<CreditCard />*/}
					{/*			<span>Billing</span>*/}
					{/*			<CommandShortcut>⌘B</CommandShortcut>*/}
					{/*		</CommandItem>*/}
					{/*		<CommandItem>*/}
					{/*			<Settings />*/}
					{/*			<span>Settings</span>*/}
					{/*			<CommandShortcut>⌘S</CommandShortcut>*/}
					{/*		</CommandItem>*/}
					{/*	</CommandGroup>*/}
					{/*</CommandList>*/}
				</Command>
				<div>
					<Button variant="default">Connect</Button>
				</div>
			</div>
			
		</header>
	)
}