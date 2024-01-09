

function Star({pos}) {

    const style = {
        '--pos': `${pos*10}ms`
    };

    return (
        <div className={'star'} style={style}
        >
            *
        </div>
    )
}

export default Star;