import "./rightbar.scss"
import img from "../../images/pic1.jpg"
const RightBar= () =>{

    return(
        <div className="rightbar">
            <div className="container">
                <div className="menu">
                    <span>Suggestion For You:</span>
                    <div className="item">
                       <div className="left">
                       <img src="" alt="" />
                        <span>Alex Benjamin</span>
                       </div>
                        <div className="right">
                            <button className="follow">Follow</button>
                            <button className="dismiss">Dismiss</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                        <img src="" alt="" />
                        <span>The Freak</span>
                        </div>
                        <div className="right">
                            <button className="follow">Follow</button>
                            <button className="dismiss">Dismiss</button>
                        </div>
                    </div>
                    </div>


                <div className="menu">
                    <span>Latest Activity:</span>
                    <div className="item">
                        <div className="left">
                            <img src="" alt="" />
                            <span>Jhon Doe</span>
                            <small>changed status</small>
                        </div>
                        <small className="right">1 min Ago</small>
                    </div>
                    <div className="item">
                        <div className="left">
                            <img src="" alt="" />
                            <span>Loid froid</span>
                            <small>changed bio</small>
                        </div>
                        <small className="right">1 hour Ago</small>
                    </div>
                    <div className="item">
                        <div className="left">
                            <img src="" alt="" />
                            <span>Alex Lion</span>
                            <small>last seen</small>
                        </div>
                        <small className="right">recently</small>
                    </div>
                    <div className="item">
                        <div className="left">
                            <img src="" alt="" />
                            <span>Loner One</span>
                            <small>Live</small>
                        </div>
                        <small className="right">30 min Ago</small>
                    </div>
                    <div className="item">
                        <div className="left">
                            <img src="" alt="" />
                            <span>Hamed Holy</span>
                            <small>liked your bio</small>
                        </div>
                        <small className="right">1 day Ago</small>
                    </div>
               
                </div>

                <div className="menu">
                    <span>Online Friend:</span>
                    <div className="item">
                      <div className="left">
                      <img src="" alt="" />
                      <div className="online"/>
                        <span>Doe Jhon</span>
                      </div>
                    </div>
                    <div className="item">
                        <div className="left">
                        <img src="" alt="" />
                        <div className="online"/>
                        <span>Sanjid</span>
                        </div>
                    </div>
                    <div className="item">
                       <div className="left">
                       <img src="" alt="" />
                       <div className="online"/>
                        <span>Jamal</span>
                       </div>
                    </div>
                    <div className="item">
                        <div className="left">
                        <img src="" alt="" />
                        <div className="online"/>
                        <span>Zimmer Hualt</span>
                        </div>
                    </div>
                    <div className="item">
                       <div className="left">
                       <img src="" alt="" />
                       <div className="online"/>
                        <span>Nour Alla</span>
                       </div>
                    </div>
                    <div className="item">
                        <div className="left">
                        <img src="" alt="" />
                        <div className="online"/>
                        <span>Zahid Akhchamal</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RightBar