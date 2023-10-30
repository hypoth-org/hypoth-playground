'use client'
import Link from 'next/link'
import '../../wc-spinners/dist/atom-spinner.js'

// import HyButton from '@/public/ui/dist/src/button'
// import Button from '@/ui/components/Button/Button'
// import ButtonElement from "@/ui/components/Lit/Button.client"

// import lazy from "next/dynamic";

// const Buttonlit = lazy(() => import("@/ui/components/Lit/Button.client"), {
//   ssr: false
// });


export default function About() {
    return (
        <>
            <Link href='/'>Home</Link>
            <atom-spinner/> Loading
            {/* <HyButton></HyButton> */}
            {/* <Button 
                onClick={() => console.log('Clicked!')} 
                label="Small"
                ariaLabel="Click me to perform an action"
                size='small'
            />
            <Button 
                onClick={() => console.log('Clicked!')} 
                label="Medium"
                ariaLabel="Click me to perform an action"
                size='medium'
            />
            <Button 
                onClick={() => console.log('Clicked!')} 
                label="Large"
                ariaLabel="Click me to perform an action"
                size='large'
            /> */}
            {/* <Buttonlit
                onClick={() => console.log('Clicked!')} 
            >Lit Button</Buttonlit> */}
        </>
    )
}