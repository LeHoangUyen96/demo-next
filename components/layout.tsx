function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          h4 {
            color: blue;
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout