

import SideBar from "./SideBar";

import HeadTitle from "@/components/headTitle";



export default function Home() {
  return (

  <div>
 <div className=" flex items-start justify-start">
 <SideBar/>
 </div>
  </div>

    <div className="h-[500px] w-[500px] bg-foreground">
      <HeadTitle label={"Dashboad"}/>
    </div> 

  );
}
