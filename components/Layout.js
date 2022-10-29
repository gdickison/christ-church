import NavMenu from "./NavMenu";

export default function Layout ({children}) {
  return (
    <>
      <NavMenu/>
        <main>{children}</main>
      {/* <Footer/> */}
    </>
  )
}