import "./leftbar.scss"
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import Diversity3TwoToneIcon from '@mui/icons-material/Diversity3TwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import PermMediaTwoToneIcon from '@mui/icons-material/PermMediaTwoTone';
import MovieTwoToneIcon from '@mui/icons-material/MovieTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import SlowMotionVideoTwoToneIcon from '@mui/icons-material/SlowMotionVideoTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { useSelector } from "react-redux";



const LeftBar= () =>{
    const currentUser = useSelector(state=>state.authUser.currentUser)
    

    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">

                    <div className="user">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </div>


                    <div className="item">
                        <Diversity1OutlinedIcon/>
                        <span>Friends</span>
                    </div>

                    <div className="item">
                        <Diversity3TwoToneIcon/>
                        <span>Groups</span>
                    </div>

                    <div className="item">
                        <AddBusinessTwoToneIcon/>
                        <span>MarketPlace</span>
                    </div>

                    <div className="item">
                        <MovieTwoToneIcon/>
                        <span>Watch</span>
                    </div>

                    <div className="item">
                        <PermMediaTwoToneIcon/>
                        <span>Memories</span>
                    </div>
                </div>

                <hr/>

                <div className="menu">
                    <span>Your Shortcuts: </span>

                    
                    <div className="item">
                        <SportsEsportsTwoToneIcon/>
                        <span>Gaming</span>
                    </div>

                    <div className="item">
                        <CollectionsTwoToneIcon/>
                        <span>Gallery</span>
                    </div>

                    <div className="item">
                        <SlowMotionVideoTwoToneIcon/>
                        <span>Video</span>
                    </div>

                    <div className="item">
                        <EmojiEventsTwoToneIcon/>
                        <span>Events</span>
                    </div>

                </div>

                <hr/>

                <div className="menu">
                    <span>Others: </span>

                    <div className="item">
                        <DesignServicesTwoToneIcon/>
                        <span>Servises</span>
                    </div>

                    <div className="item">
                        <AccountBalanceTwoToneIcon/>
                        <span>Courses</span>
                    </div>

                    <div className="item">
                        <SchoolTwoToneIcon/>
                        <span>Tutorial</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftBar