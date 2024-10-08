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
        <div className=''>
            <Sheet>
                <SheetTrigger  className="bg-[#ebebeb] rounded-full h-12 w-12 items-center flex justify-center">
                    <IoNotificationsOutline color='black' size={26} />
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
