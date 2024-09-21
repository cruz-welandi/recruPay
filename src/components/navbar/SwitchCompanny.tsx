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
import Search from './Search'
import Organization from './Organization'
import { Button } from '../ui/button'
import { MdAddCircle } from "react-icons/md";


export default function SwitchCompanny() {
  return (
    <div>
      <Dialog>

        <DialogTrigger className='flex items-center gap-28 py-1.5'>
          <div>
            <div>
              <span className='text-gray-400 text-md'>Votre organisation</span>
            </div>

            <div className='flex justify-start mt-1'>
              <span className='text-lg font-black'>Samba Tech</span>
            </div>
          </div>

          <div>
            <ChevronsUpDown color='gray' className=" h-6 w-6 shrink-0 opacity-50" />
          </div>
        </DialogTrigger>



        <DialogContent className=''>
          <DialogHeader>

            <div className='flex items-center justify-between'>
              <DialogTitle className='text-2xl'>Mes organisations</DialogTitle>
              <Button className='bg-theme-2 gap-2 items-center font-black'>
                <MdAddCircle size={20} className='' />
                AJOUTER
              </Button>
            </div>

            <DialogDescription className=''>
              Liste des entreprises dont vous gerer le recrutement 
            </DialogDescription>

            <div className='py-6'>
              <Search />
            </div>

            <div>
              <Organization />
            </div>

          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}
