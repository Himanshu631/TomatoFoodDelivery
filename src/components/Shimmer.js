const Shimmer = () => {
    return <div className="shimmer-cont">
        <div className="body">       
                
                <div className="filter">
                    <div className="top-cont">
                        <input 
                            type="text"
                            className="input-box"
                             />
                        <button className="search-btn"
                        >Search</button>
                    </div>
                
                    <button className="filter-btn" >Top rated restaurant</button>
                </div>

                <div className="res-container">
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                    <div className="shimmer-card"></div>
                </div>
        </div>
    </div>
    
}

export default Shimmer;