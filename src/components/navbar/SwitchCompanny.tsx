import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronsUpDown } from 'lucide-react'


export default function SwitchCompanny() {
  return (
    <div>
      <Dialog>

        <DialogTrigger className='flex items-center gap-10'>
          <div>
            <div>
              <span className='text-gray-400 text-lg'>Votre organisation</span>
            </div>

            <div className='flex justify-start mt-1'>
              <span className='text-xl font-black'>Samba Tech</span>
            </div>
          </div>

          <div>
            <ChevronsUpDown color='gray' className=" h-6 w-6 shrink-0 opacity-50" />
          </div>
        </DialogTrigger>



        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}
