const {createContext, useState } = require("react");


const SidebarContext = createContext()

export function SidebarProvider ({children}){

const [isOpen,setIsOpen] = useState(false)


    return (
        <SidebarContext.Provider value={{isOpen,setIsOpen}}>{children}</SidebarContext.Provider>
    )
}


export default SidebarContext ;