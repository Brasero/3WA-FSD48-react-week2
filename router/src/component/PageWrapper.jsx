

function PageWrapper({children}) {

    return (
        <main style={{
            padding: '5px 15px'
        }}>
            {children}
        </main>
    )
}

export default PageWrapper;