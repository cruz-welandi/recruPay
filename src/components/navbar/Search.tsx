import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Button } from '../ui/button'

export default function Search() {
    return (
        <div>
            <div className="relative flex rounded border border-solid border-neutral-200 bg-transparent">
                <Button
                    className="flex items-center whitespace-nowrap bg-white px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                    id="button-addon2"
                >
                    <FiSearch size={32} color='black' />

                </Button>
                <input
                    type="search"
                    className="relative m-0 block flex-auto  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    id="exampleFormControlInput2"
                    aria-describedby="button-addon2"
                    required
                />
            </div>


        </div>
    )
}
