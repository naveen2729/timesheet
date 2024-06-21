<template>
    <div class="main">
        <header>
        <img src="https://www.payagri.com/assets/images/logo.png" alt="Company Logo" class="logo">
        <h1 class="heading">Timesheet Management</h1>
        <div class="profile-box">
            <img src="../assets/image/user.png" class="profile">
            <p class="profile-text">{{ name }}</p>
        </diV>
    </header>
    
    <div class="container">
        <!--div class="box">
            <a href="www.navi.com"><img src="Time Log.png" alt="Image 1" class="img1"></a>
            <a href="www.navi.com" class="txt1"><h2>Time Log</h2></a>
        </div>
        <div class="box">
            <a href="www.navi.com"><img src="Daily log.png" alt="Image 2" class="img2"></a>
            <a href="www.navi.com" class="txt2"><h2>Daily Log</h2></a>
        </div-->
        <div class="box" @click="goToWeeklyLog">
            <a ><img src="../assets/image/weekly log.png" alt="Image 3" class="img3"></a>
            <a class="txt3"><h2>Weekly Log</h2></a>
        </div>
        <div class="box" @click="goToCalender">
            <a><img src="../assets/image/my calender.png" alt="Image 4" class="img4"></a>
            <a class="txt4"><h2>My Calendar</h2></a>
        </div>
        <!--div class="box">
            <a href="www.navi.com"><img src="my log.png" alt="Image 5" class="img5"></a>
            <a href="www.navi.com" class="txt5"><h2>My Log</h2></a>
        </div>
        <div class="box">
            <a href="www.navi.com"><img src="https://icon-library.com/images/icon-dashboard/icon-dashboard-14.jpg" alt="Image 6" class="img6"></a>
            <a href="www.navi.com" class="txt6"><h2>Dashboard</h2></a>
        </div-->
    </div>
    </div>
</template>

<script>
import { auth, db } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default {
    data() {
        return {
            userId: '',
            zId: '',
            name:''
        };
    },
    mounted() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                this.userId = user.uid;
                // Fetch z-id from Firestore
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.zId = docSnap.data().zId;
                } else {
                    console.error('No such document!');
                }
            } else {
                // Handle the case where the user is not authenticated
                this.$router.push('/');
            }
        }),
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                this.userId = user.uid;
                // Fetch z-id from Firestore
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.name = docSnap.data().name;
                } else {
                    console.error('No such document!');
                }
            } else {
                // Handle the case where the user is not authenticated
                this.$router.push('/');
            }
        });
    },
    methods: {
        goToWeeklyLog() {
        if (this.zId) {
            const url = 'https://creatorapp.zohopublic.in/zoho.admin_payagri/timesheet-management/form-perma/Weekly_Logs/UWfECDWhPdzAbSjhh1bq0FHpUnUy5Q1y9zW5hJ2QdkbBFzRZhmk0XtxdBCkSDEYQQ2BpXUBnTUfavGQXJGwVTVES9aHAwTXGwXFz?Employee_Name=' + this.zId +'&Check=true';
            window.location.href = url;
        } else {
            console.error('zId is not available');
        }
    },
    goToCalender(){
        if (this.zId) {
            const url = 'https://creatorapp.zohopublic.in/zoho.admin_payagri/timesheet-management/report-perma/My_Calender/pbF8g2ypMpkjt29gVmjOkN3DKBfA2XpJYCpMQspb3GWKArBm8XyjR3WQKuFT74gn63rwgtsRfA2AgnXAGBBdmy6khqHm3YF4Ahpu?zc_AddRec=false&zc_DelRec=false&zc_ShowAs=false&zc_Search=false&Employee_Name=' + this.zId;
            window.location.href = url;
        } else {
            console.error('zId is not available');
        }
    }
    }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    user-select: none; /* Disable text selection */
    
}

.home-link {
    position: fixed;
    top: 10px; /* Adjust top position as needed */
    left: 10px; /* Adjust left position as needed */
    text-decoration: none;
    color: #333; /* Adjust color as needed */
    font-weight: bold;
  }

.main {
    min-height: 100vh;
    background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOP2.img);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    text-align: center;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    background-color: rgba(0, 0, 0, 0.5);
}


.logo {
    width: 13vw;
    margin-right: 20px;
}



.heading {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: transparent;
}

/* Remove focus outline */
.heading:focus {
    outline: none;
}

/* Remove the default color of active links */
.heading:active {
    color: inherit;
}

/* Remove the default color of visited links */
.heading:visited {
    color: inherit;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;
    padding: 6em 1em;
}

.box {
    flex: 0 0 30%;
    max-width: 24%;
    background-color: #ccc;
    margin: 10px;
    border-radius: 20px;
    text-align: center;
    transition: 0.5s;
    padding: 1em;
    box-sizing: border-box;
}

.box:hover {
    transform: scale(1.05);
    opacity: 0.8;
}

.box img {
    max-width: 33%;
    height: auto;
    display: block;
    margin: 0 auto 1em;
}
/* Remove focus outline */
.box img:focus {
    outline: none;
}

/* Remove the default color of active links */
.box img:active {
    color: inherit;
}

/* Remove the default color of visited links */
.box img:visited {
    color: inherit;
}

.box h2 {
    margin: 0;
}

a {
    text-decoration: none;
    color: black;
    cursor: pointer;
}
.profile{
    background-color: white;
    height: 9vh;
    border-radius: 70%;
}
.profile-text{
    font-size: 1rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.profile-box{
    height: 19vh;
    width: 26vh;
}
@media (max-width: 1321px) {
    .box {
        flex: 0 0 45%; /* 2 boxes per row */
        max-width: 45%;
    }
    .profile-box{
    height: 21vh;
    width: 29vh;
    }
}

@media (max-width: 768px) {
    .box {
        flex: 0 0 48%; /* 2 boxes per row */
        max-width: 45%;
    }
    .heading {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 2rem;
    }
    .logo {
        width: 30vw;
        /* margin-right: 20px; */
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1%;
        padding: 5em 1em;
    }
    .profile-box{
        height: 21vh;
        width: 33vh;
    }

}

@media (max-width: 480px) {
    .container {
        gap: 0;
    }
    .box {
        flex: 0 0 48%; /* 2 boxes per row */
        max-width: 48%;
        margin: 5px;
    }
    .logo {
        width: 80px;
    }
    .heading {
        font-size: 0%;
    }
    .profile[data-v-f4211ad8] {
    background-color: white;
    height: 6vh;
    border-radius: 70%;
}
.heading[data-v-f4211ad8][data-v-f4211ad8] {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 1.4rem;
    }
}
@media (max-width: 502px) {
    .logo {
        width: 26vw;
    }
    .heading {
        font-size: 1.4em;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1%;
        padding: 10em 0em;
    }
    .box {
        flex: 0 0 48%;
        max-width: 40%;
    }
}
@media (max-width: 636px){
    .profile-box[data-v-f4211ad8] {
        height: 18vh;
        width: 43vh;
    }
    .heading[data-v-f4211ad8] {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 1.7rem;
    }
}
</style>
