<template>
    <div class="mask"></div>
    <div class="light"></div>
    <video autoplay muted loop id="myVideo">
        <source src="../../assets/video/snake.mp4" type="video/mp4">
    </video>
    <div class="menu">
        <div class="text-center p-5">
            <div>
                <span style="font-family:Game; color: red; font-weight:1000; font-size:80px">
                    SNAKE
                </span>
                <div class="text-center w-100">
                    <router-link to="/game" tag="button" class="link" type="button">
                        S t a r t
                    </router-link>
                    <button class="mt-3 link">
                        Q u i t
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
    .link {
        border-radius: 20px;
        font-family: GameSub;
        background-color: transparent;
        width: 100%;
        font-size: 30px;
        color: rosybrown;
        border: transparent;
        text-decoration: none;
    }

    .link:hover {
        box-shadow: 0px 5px black;
        transform: translateY(-10px);
        background-color: rosybrown;
        color:wheat
    }

    .menu {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: rgba(229, 240, 128,0.3);
        border-radius: 40px;
        z-index: 3;
    }

    video {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .light {
        position: absolute;
        top:0%;
        left: 0%;
        width: 100vw;
        height: 100vh;
        animation-name: lightAnim;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        z-index: 1;
    }

    .mask {
        position: absolute;
        top:0%;
        left: 0%;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 2;
    }

    @keyframes lightAnim {
        0%{background: linear-gradient(0deg, mistyrose, transparent);}
        10%{background: linear-gradient(18deg, mistyrose, transparent);}
        15%{background: linear-gradient(36deg, mistyrose, transparent);}
        20%{background: linear-gradient(54deg, mistyrose, transparent);}
        25%{background: linear-gradient(72deg, mistyrose, transparent);}
        30%{background: linear-gradient(90deg, mistyrose, transparent);}
        35%{background: linear-gradient(108deg, mistyrose, transparent);}
        40%{background: linear-gradient(126deg, mistyrose, transparent);}
        45%{background: linear-gradient(144deg, mistyrose, transparent);}
        50%{background: linear-gradient(162deg, mistyrose, transparent);}
        55%{background: linear-gradient(180deg, mistyrose, transparent);}
        60%{background: linear-gradient(198deg, mistyrose, transparent);}
        65%{background: linear-gradient(216deg, mistyrose, transparent);}
        70%{background: linear-gradient(234deg, mistyrose, transparent);}
        75%{background: linear-gradient(252deg, mistyrose, transparent);}
        80%{background: linear-gradient(270deg, mistyrose, transparent);}
        85%{background: linear-gradient(288deg, mistyrose, transparent);}
        90%{background: linear-gradient(306deg, mistyrose, transparent);}
        95%{background: linear-gradient(324deg, mistyrose, transparent);}
        100%{background: linear-gradient(342deg, mistyrose, transparent);}
    }
</style>
