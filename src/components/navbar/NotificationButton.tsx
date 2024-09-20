import { Button } from '@/components/ui/button'
import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function NotificationButton() {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Button className="bg-gray-200 rounded-full h-20 w-20">
                        <IoNotificationsOutline size={32} />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}
