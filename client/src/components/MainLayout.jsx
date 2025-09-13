
import  Header  from "./Header/Header"
import  Footer  from "./Footer/Footer"

export default function MainLayout ({children}){
    return(
        <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
    )
    
}