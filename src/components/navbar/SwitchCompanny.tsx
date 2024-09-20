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

        <DialogTrigger className='border-r-2 h-24'>
          <div>
            <div>
              <span className='text-gray-400 text-xl'>Votre organisation</span>
            </div>

            <div>
              <span >fgbujniug</span>
            </div>
          </div>

          <div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />

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
