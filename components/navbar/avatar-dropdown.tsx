// importing shadcn components
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// importing icons
import {
    LogOut,
    Mail,
    MessageSquare,
    PlusCircle,
    UserPlus,
    Headset,
    Bell,
    CircleHelp,
    Wallet,
} from "lucide-react";

export function AvatarDropdown() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="font-medium w-10 h-10 cursor-pointer">
                        <AvatarImage
                            src="https://github.com/shadcn.pngg"
                            alt="@shadcn"
                        />
                        <AvatarFallback className="text-foreground text-sm font-bold">
                            HS
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 my-2" align="end">
                    <DropdownMenuLabel>
                        <div className="flex gap-2">
                            <Avatar className="font-medium w-10 h-10 cursor-pointer">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback className="bg-primary text-background">
                                    HS
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col justify-between">
                                <h1>
                                    Hardik Shah
                                </h1>
                                <p className="text-muted-foreground text-xs">
                                    hardikts@gmail.com
                                </p>
                            </div>
                        </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Wallet className="mr-2 h-4 w-4" />
                            <span>Bookings</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <CircleHelp className="mr-2 h-4 w-4" />
                            <span>Help</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Bell className="mr-2 h-4 w-4" />
                            <span>Notification</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Headset className="mr-2 h-4 w-4" />
                            <span>Support</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <UserPlus className="mr-2 h-4 w-4" />
                                <span>Invite users</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>
                                        <Mail className="mr-2 h-4 w-4" />
                                        <span>Email</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        <span>Message</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        <span>More...</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}