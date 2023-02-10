import { React } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/styles";

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/max-oberholtzer/", "_blank");
};

const openGithub = () => {
  window.open("https://github.com/Maximilian-Oberholtzer", "_blank");
};

const openEmail = () => {
  window.location = "mailto:max.oberholtzer@yahoo.com";
};

const openTennis = () => {
  window.open("https://app.universaltennis.com/profiles/51049", "_blank");
};

const openRocketLeague = () => {
  window.open(
    "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198262193029/overview",
    "_blank"
  );
};

const openRubiksCube = () => {
  window.open(
    "https://www.worldcubeassociation.org/persons/2022OBER04",
    "_blank"
  );
};

const SideAnchorLinks = () => {
  const theme = useTheme();

  return (
    <>
      <div
        className={"animate__animated animate__fadeInLeft"}
        style={{
          width: "40px",
          position: "fixed",
          bottom: "16vh",
          left: "40px",
          right: "auto",
          Zndex: "10",
          lineHeight: "44px",
        }}
      >
        <Button onClick={openLinkedIn}>
          <svg
            fill={theme.palette.white.main}
            width="44px"
            height="44px"
            viewBox="-5.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
          </svg>
        </Button>
        <Button onClick={openGithub}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="44px"
            height="44px"
            fillRule="evenodd"
            fill={theme.palette.white.main}
          >
            <title>Github</title>
            <path
              fillRule="evenodd"
              d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
            />
          </svg>
        </Button>
        <Button onClick={openEmail}>
          <svg
            fill={theme.palette.white.main}
            height="44px"
            width="44px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 75.294 75.294"
            xmlSpace="preserve"
          >
            <title>Email</title>
            <g>
              <path
                d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
              />
            </g>
          </svg>
        </Button>
      </div>
      <div
        className={"animate__animated animate__fadeInRight"}
        style={{
          width: "40px",
          position: "fixed",
          bottom: "16vh",
          left: "auto",
          right: "60px",
          Zndex: "10",
        }}
      >
        <Button onClick={openTennis}>
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Universal Tennis Rating</title>
            <path
              fill={theme.palette.white.main}
              d="M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
            />
            <path
              fill={theme.palette.white.main}
              d="M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
            />
          </svg>
        </Button>
        <Button onClick={openRocketLeague}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="44px"
            height="44px"
            fill={theme.palette.white.main}
          >
            <title>Rocket League Tracker</title>
            <path d="M 8.9882812 3.9355469 C 5.7212813 3.9355469 3.0644531 6.5933281 3.0644531 9.8613281 C 3.0644531 13.128328 5.7212813 15.787109 8.9882812 15.787109 C 12.255281 15.787109 14.914062 13.128328 14.914062 9.8613281 C 14.914062 6.5933281 12.255281 3.9355469 8.9882812 3.9355469 z M 25.787109 6.0429688 C 22.281109 6.0709687 19.144359 6.3484219 16.318359 6.8574219 C 16.700359 7.7854219 16.914063 8.7973281 16.914062 9.8613281 C 16.914062 11.503328 16.411734 13.031828 15.552734 14.298828 C 15.607734 14.304828 15.695 14.321953 15.75 14.376953 C 15.75 13.964953 15.996094 13.964844 15.996094 13.964844 C 15.996094 13.964844 15.996125 13.880859 16.078125 13.880859 C 16.490125 13.963859 17.645625 14.540109 18.140625 14.787109 C 18.635625 15.034109 18.636719 15.117187 18.636719 15.117188 C 18.636719 15.117188 19.791094 15.118156 20.121094 15.035156 C 20.451094 15.035156 21.028516 14.787062 21.853516 14.539062 C 22.678516 14.292063 22.842812 14.210937 23.007812 14.210938 C 23.172813 14.210938 24.658516 14.293031 25.978516 14.457031 C 27.298516 14.622031 28.535203 15.11625 28.783203 15.28125 L 29.195312 15.363281 L 29.277344 15.117188 L 28.617188 14.869141 C 28.617188 14.869141 28.701172 14.458 28.701172 14.375 C 28.701172 14.293 28.782234 14.210938 28.865234 14.210938 C 28.947234 14.210938 29.6905 14.375031 29.9375 14.457031 C 30.1845 14.540031 31.01075 15.117188 31.09375 15.117188 C 31.17675 15.117188 31.175781 15.199219 31.175781 15.199219 C 31.175781 15.364219 31.011719 15.693359 31.011719 15.693359 C 31.011719 15.693359 31.258797 15.776375 31.341797 15.859375 C 31.424797 15.941375 31.670969 16.105516 31.917969 16.353516 C 32.164969 16.518516 32.082031 16.765625 32.082031 16.765625 L 32.660156 17.34375 L 32.660156 17.589844 L 34.0625 18.992188 L 34.0625 19.074219 L 33.402344 19.486328 C 33.402344 19.486328 34.30875 19.403422 34.96875 19.732422 C 35.62875 20.062422 35.710937 20.227578 35.710938 20.392578 C 35.545938 20.474578 35.298828 20.558594 35.298828 20.558594 C 34.803828 20.723594 33.566406 21.548828 33.566406 21.548828 L 33.566406 21.630859 L 34.226562 21.794922 C 34.968562 21.134922 36.289297 20.887734 37.279297 21.052734 C 39.612297 21.507734 41.426906 22.716203 42.503906 24.033203 C 43.333906 25.048203 43.964625 25.994172 44.390625 26.701172 C 47.374625 18.674172 46.887953 11.650484 46.876953 11.521484 L 46.835938 11.033203 L 46.427734 10.765625 C 41.691734 7.656625 35.146203 6.1129688 26.408203 6.0429688 L 25.787109 6.0429688 z M 15.914062 14.210938 C 15.914062 14.210938 15.833031 14.457109 15.832031 14.787109 C 17.152031 14.952109 17.398438 15.199219 17.398438 15.199219 C 17.398438 15.199219 17.893625 15.117188 18.140625 15.117188 C 17.729625 14.787187 15.914062 14.210938 15.914062 14.210938 z M 22.431641 14.375 C 22.349641 14.376 20.205078 15.117188 20.205078 15.117188 C 20.205078 15.117188 20.782234 15.447266 20.865234 15.447266 C 20.947234 15.447266 22.102656 15.860391 22.597656 16.025391 C 23.009656 16.190391 23.257844 16.025391 23.339844 16.025391 C 23.422844 16.025391 24.824219 15.199219 24.824219 15.199219 C 23.587219 14.704219 22.431641 14.375 22.431641 14.375 z M 15.337891 14.787109 L 15.255859 15.035156 L 15.255859 14.953125 C 15.194859 14.938125 15.150703 14.92225 15.095703 14.90625 C 14.745703 15.32825 14.350875 15.711688 13.921875 16.054688 C 13.898875 16.390687 13.853516 17.057687 13.853516 17.179688 C 13.771516 17.344687 14.017578 17.427734 14.017578 17.427734 L 13.935547 18.333984 L 14.429688 18.333984 L 14.511719 17.757812 L 14.511719 18.087891 L 14.595703 18.087891 L 14.595703 17.591797 L 14.511719 17.591797 L 14.511719 17.261719 L 15.253906 17.673828 L 15.337891 17.839844 L 15.501953 18.003906 L 15.667969 18.003906 L 15.75 17.921875 L 15.75 17.839844 C 15.255 17.839844 15.255859 17.591797 15.255859 17.591797 C 15.255859 17.591797 15.337922 17.014609 15.419922 16.849609 C 15.502922 16.684609 15.832031 16.767578 15.832031 16.767578 L 15.75 16.685547 L 15.585938 16.685547 C 15.420938 16.602547 14.924766 16.272453 14.759766 16.189453 L 14.759766 16.107422 L 14.841797 16.025391 L 14.841797 15.695312 L 14.925781 15.695312 C 14.925781 15.612312 15.007812 15.611297 15.007812 15.529297 C 15.172812 15.529297 16.410156 15.283203 16.410156 15.283203 L 16.359375 15.271484 C 16.551375 15.249484 16.904297 15.199219 16.904297 15.199219 L 15.337891 14.787109 z M 25.486328 15.365234 C 25.321328 15.365234 25.238281 15.449219 25.238281 15.449219 C 25.238281 15.449219 24.744031 15.778391 24.332031 16.025391 C 23.920031 16.272391 23.837859 16.356484 23.755859 16.521484 C 23.672859 16.604484 23.919922 16.933594 23.919922 16.933594 L 24.580078 17.757812 C 24.662078 17.757812 24.910156 17.923828 24.910156 17.923828 C 24.910156 17.923828 26.229688 17.840812 27.054688 17.757812 L 29.197266 17.757812 C 29.280266 17.757812 29.19625 17.427625 29.03125 17.015625 C 28.86625 16.685625 28.619141 15.861328 28.619141 15.861328 C 28.537141 15.696328 28.372813 15.69625 27.382812 15.53125 C 26.475812 15.44825 25.651328 15.365234 25.486328 15.365234 z M 20.947266 16.107422 C 20.901266 16.107422 20.832344 16.160703 20.777344 16.220703 L 20.617188 16.273438 L 20.533203 16.849609 L 20.617188 16.849609 L 20.78125 16.767578 C 20.78125 16.767578 20.865297 16.766609 21.029297 16.849609 C 21.194297 16.849609 21.275391 16.684531 21.275391 16.519531 C 21.275391 16.278531 21.04325 16.195406 21.03125 16.191406 C 21.00425 16.117406 20.947266 16.107422 20.947266 16.107422 z M 13.640625 16.265625 C 13.422625 16.424625 13.197844 16.571031 12.964844 16.707031 C 13.004844 16.842031 13.111328 16.849609 13.111328 16.849609 L 13.029297 17.757812 L 13.605469 17.757812 L 13.605469 17.675781 L 13.523438 17.675781 L 13.523438 17.591797 L 13.441406 17.591797 L 13.523438 17.427734 L 13.605469 17.015625 L 13.523438 16.931641 L 13.523438 16.767578 L 13.605469 16.685547 L 13.640625 16.265625 z M 21.9375 16.4375 L 21.9375 17.097656 C 21.9375 17.097656 22.844031 17.098703 24.082031 17.345703 C 23.257031 16.768703 21.9375 16.4375 21.9375 16.4375 z M 29.691406 16.603516 L 29.279297 16.767578 L 29.775391 17.675781 L 31.425781 18.251953 C 30.764781 16.850953 29.691406 16.603516 29.691406 16.603516 z M 12.830078 16.792969 C 11.692078 17.425969 10.382234 17.789062 8.9902344 17.789062 C 7.7502344 17.789062 6.5792031 17.495375 5.5332031 16.984375 C 5.7152031 18.645375 6.0265469 20.587313 6.5605469 22.695312 C 6.9305469 24.155313 8.0282188 25.318359 9.4492188 25.818359 C 11.026219 26.372359 12.933656 26.804031 14.597656 27.082031 C 22.283656 28.309031 29.714672 33.177219 32.263672 37.449219 C 32.263672 37.449219 32.548391 37.968547 32.650391 38.185547 C 33.259391 39.404547 33.561625 40.620266 33.515625 41.697266 C 37.741625 38.430266 40.648719 34.565078 42.636719 30.705078 C 42.400719 28.635078 40.22675 28.234375 39.34375 28.234375 C 37.61175 28.234375 35.877625 27.658828 34.640625 26.173828 L 34.640625 26.255859 C 33.898625 27.245859 33.074141 27.246094 32.744141 27.246094 C 32.414141 27.246094 31.342687 26.750859 30.929688 26.255859 C 30.517688 25.760859 30.517578 24.853516 30.517578 24.853516 L 28.867188 24.277344 L 26.804688 23.121094 L 26.474609 23.039062 C 25.814609 23.369062 24.990047 23.122922 24.248047 22.544922 C 24.165047 22.874922 23.752813 23.699328 23.257812 24.111328 C 22.762812 24.523328 21.77325 25.101563 21.03125 25.101562 C 20.28925 25.101562 18.639531 24.276094 18.144531 23.121094 C 17.649531 21.966094 18.144531 20.728516 18.144531 20.728516 L 17.318359 20.564453 L 16.988281 20.152344 C 16.988281 20.152344 15.999734 20.976484 14.927734 20.646484 C 13.855734 20.316484 12.946219 19.410938 12.699219 18.585938 C 12.534219 17.760938 12.782234 17.018547 12.865234 16.935547 C 12.849234 16.880547 12.843078 16.842969 12.830078 16.792969 z M 19.361328 16.984375 C 19.299453 16.99475 19.298828 17.015625 19.298828 17.015625 C 20.700828 17.345625 21.113313 17.426766 21.195312 17.509766 C 21.195312 17.509766 21.279328 17.675812 21.361328 17.757812 C 20.206328 17.510813 19.134719 17.675812 18.886719 17.757812 C 19.051719 18.004812 19.051719 18.334031 18.886719 18.582031 C 18.721719 18.747031 18.226563 18.994141 18.226562 18.994141 L 18.060547 18.994141 L 17.648438 18.910156 C 17.276438 18.836156 17.373484 18.229328 17.396484 18.111328 C 17.382484 18.214328 17.380391 18.317016 17.400391 18.416016 C 17.483391 18.828016 17.5655 18.828125 17.8125 18.828125 C 17.4005 18.663125 17.4825 18.003797 17.8125 17.591797 C 18.0595 17.261797 18.308594 17.507812 18.308594 17.507812 C 18.308594 17.507812 18.0605 17.17875 17.8125 17.34375 C 17.6295 17.46575 17.448437 17.768938 17.398438 18.085938 L 16.904297 18.25 C 16.739297 17.92 15.998047 17.013672 15.998047 17.013672 L 15.832031 17.673828 C 15.914031 17.755828 16.328156 18.415078 16.410156 18.580078 L 16.162109 18.826172 C 16.162109 18.826172 16.080078 18.992219 16.080078 19.074219 C 16.080078 19.157219 15.998047 19.238281 15.998047 19.238281 L 15.667969 19.404297 L 15.585938 19.404297 L 14.431641 18.5 L 14.431641 19.160156 L 14.513672 19.160156 C 14.596672 19.325156 14.760828 19.655313 15.173828 19.820312 C 15.503828 19.985312 15.915078 19.985344 16.080078 19.902344 C 16.245078 19.985344 16.327156 19.984406 16.410156 20.066406 C 16.740156 20.231406 16.822266 20.150391 16.822266 20.150391 L 17.316406 19.984375 L 17.400391 19.984375 L 17.482422 19.902344 L 17.648438 19.572266 C 17.648438 19.572266 18.472734 19.654297 18.802734 19.654297 C 19.132734 19.159297 20.204266 18.416984 20.947266 18.333984 C 21.689266 18.333984 22.927969 18.498281 23.917969 19.488281 C 24.824969 20.478281 24.578125 21.798828 24.578125 21.798828 L 26.392578 22.378906 L 25.566406 21.800781 C 24.906406 20.150781 23.339844 18.664063 23.339844 18.664062 C 23.339844 18.664062 22.927688 18.582031 22.679688 18.582031 C 22.432688 18.499031 22.267578 18.335938 22.267578 18.335938 C 22.267578 18.335938 22.185484 18.253859 22.021484 18.005859 L 21.855469 17.675781 C 21.855469 17.675781 21.690359 17.510703 21.443359 17.345703 C 21.196359 17.180703 20.289922 17.098625 19.794922 17.015625 C 19.547422 16.974125 19.423203 16.974 19.361328 16.984375 z M 15.503906 18.005859 L 15.337891 18.087891 L 15.337891 18.748047 L 15.503906 18.664062 L 15.503906 18.005859 z M 26.701172 18.253906 C 25.649547 18.253906 24.990234 18.335938 24.990234 18.335938 C 25.485234 18.912938 25.980469 19.738281 25.980469 19.738281 C 26.804469 18.913281 28.536672 18.583016 30.763672 18.666016 C 29.196172 18.336016 27.752797 18.253906 26.701172 18.253906 z M 23.751953 18.748047 C 24.246953 19.078047 24.990234 19.984375 24.990234 19.984375 L 25.236328 20.066406 L 25.732422 19.984375 C 24.825422 18.829375 23.751953 18.748047 23.751953 18.748047 z M 32.742188 18.996094 C 32.742188 18.996094 32.578094 19.326203 32.496094 19.408203 C 32.414094 19.490203 31.835859 19.572297 31.505859 19.654297 C 31.175859 19.819297 30.598594 20.066422 30.433594 20.232422 C 30.350594 20.314422 30.351562 20.562531 30.351562 20.644531 C 30.351562 20.644531 30.404844 20.671359 30.464844 20.693359 C 30.448844 20.677359 30.433594 20.660531 30.433594 20.644531 L 30.433594 20.398438 C 30.433594 20.398438 31.50625 19.572266 33.15625 19.572266 L 33.402344 19.078125 L 32.742188 18.996094 z M 30.464844 20.693359 C 30.489844 20.718359 30.5235 20.742719 30.5625 20.761719 L 30.599609 20.728516 C 30.563609 20.728516 30.511844 20.710359 30.464844 20.693359 z M 30.5625 20.761719 L 29.855469 21.388672 L 30.021484 21.552734 L 31.835938 22.130859 C 32.248937 21.800859 32.826172 21.71875 32.826172 21.71875 C 32.496172 21.55375 31.094641 20.975547 30.681641 20.810547 C 30.681641 20.810547 30.6225 20.791719 30.5625 20.761719 z M 22.513672 20.150391 C 21.606672 20.068391 20.947266 20.892578 20.947266 20.892578 L 21.607422 21.388672 L 21.771484 21.304688 L 22.513672 20.150391 z M 22.927734 20.314453 L 22.267578 21.470703 L 22.349609 21.552734 L 23.669922 21.634766 C 23.670922 20.727766 22.927734 20.314453 22.927734 20.314453 z M 20.617188 21.388672 C 20.040187 22.460672 20.451172 23.203125 20.451172 23.203125 L 21.193359 22.130859 L 21.193359 21.966797 L 20.617188 21.388672 z M 29.527344 21.634766 L 28.123047 22.873047 L 29.197266 23.203125 L 30.269531 22.048828 L 29.691406 21.800781 L 29.527344 21.634766 z M 35.492188 21.806641 C 35.128512 21.825264 34.785938 21.902625 34.476562 22.046875 C 34.559562 22.129875 34.640656 22.130891 34.722656 22.212891 C 35.217656 22.542891 35.465828 22.707219 35.548828 23.449219 C 35.630828 24.026219 35.464734 24.85075 35.052734 25.59375 C 37.363734 27.16175 40.581359 25.925109 41.818359 27.162109 C 41.602234 24.418984 38.037918 21.676279 35.492188 21.806641 z M 23.587891 22.212891 L 22.267578 22.296875 L 22.183594 22.378906 L 22.595703 23.699219 C 23.421703 23.120219 23.587891 22.212891 23.587891 22.212891 z M 30.929688 22.294922 L 29.773438 23.615234 L 30.599609 23.861328 C 30.764609 23.202328 31.423828 22.460938 31.423828 22.460938 L 30.929688 22.294922 z M 21.441406 22.626953 L 20.617188 23.615234 C 21.195187 24.109234 22.101562 23.863281 22.101562 23.863281 L 21.607422 22.626953 L 21.441406 22.626953 z M 34.310547 23.203125 C 33.980547 23.203125 33.404297 23.945312 33.404297 23.945312 L 33.568359 24.191406 L 33.650391 24.109375 L 34.310547 23.285156 L 34.310547 23.203125 z M 34.724609 23.285156 L 34.064453 24.191406 L 34.064453 24.275391 L 34.970703 24.275391 C 35.135703 23.698391 34.724609 23.285156 34.724609 23.285156 z M 33.15625 24.357422 C 32.74425 25.182422 32.826172 25.759766 32.826172 25.759766 L 33.238281 24.851562 L 33.238281 24.6875 C 33.320281 24.6875 33.23925 24.522422 33.15625 24.357422 z M 34.970703 24.769531 L 33.980469 24.853516 L 33.898438 24.935547 L 34.144531 26.007812 C 34.145531 26.006813 34.393625 25.759688 34.640625 25.429688 C 34.887625 25.099688 34.970703 24.769531 34.970703 24.769531 z M 33.404297 25.265625 L 32.908203 26.171875 L 32.992188 26.255859 C 33.404187 26.420859 33.816406 26.255859 33.816406 26.255859 L 33.486328 25.265625 L 33.404297 25.265625 z M 11.441406 29.546875 C 10.834234 29.553062 10.000906 29.666563 9.4414062 30.476562 C 12.321406 36.177563 17.173125 41.923328 25.328125 45.736328 L 26.117188 46.105469 L 26.832031 45.759766 C 28.748031 44.863766 30.473969 43.855438 32.042969 42.773438 C 32.699969 41.847438 32.771563 40.395109 32.101562 38.912109 C 32.039563 38.771109 31.743156 38.229563 31.660156 38.101562 C 29.051156 34.069562 20.296078 29.860687 11.955078 29.554688 C 11.821328 29.554688 11.643797 29.544812 11.441406 29.546875 z" />
          </svg>
        </Button>
        <Button onClick={openRubiksCube}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="44px"
            height="44px"
            viewBox="0 0 1250.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <title>WCA Profile</title>
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill={theme.palette.white.main}
              stroke="none"
            >
              <path
                d="M6535 11646 c-819 -93 -807 -92 -835 -114 -18 -14 -19 -20 -8 -34 17
-21 879 -494 937 -514 25 -8 88 -18 140 -20 83 -5 202 8 881 95 445 57 803
108 828 117 45 17 52 32 25 56 -22 18 -923 461 -973 478 -19 6 -87 13 -150 15
-96 4 -233 -9 -845 -79z"
              />
              <path
                d="M4452 11414 c-875 -98 -929 -107 -920 -151 4 -20 829 -543 886 -562
20 -7 89 -15 152 -18 105 -4 190 5 973 106 472 61 875 115 896 121 50 13 76
40 58 62 -6 9 -213 127 -459 262 -492 272 -504 277 -668 275 -47 -1 -460 -43
-918 -95z"
              />
              <path
                d="M2208 11165 c-504 -57 -941 -110 -971 -119 -58 -17 -83 -37 -74 -60
5 -13 252 -201 663 -504 200 -147 176 -147 1264 -8 1017 131 1106 143 1140
161 41 21 52 38 37 58 -23 30 -821 531 -877 550 -115 40 -189 35 -1182 -78z"
              />
              <path
                d="M7695 11030 c-412 -54 -767 -103 -787 -109 -20 -7 -44 -19 -53 -27
-15 -15 -15 -18 1 -35 31 -35 1022 -571 1082 -586 126 -31 209 -23 1032 101
426 64 790 119 808 122 43 8 83 40 75 61 -8 21 -1056 539 -1130 558 -110 29
-234 18 -1028 -85z"
              />
              <path
                d="M1062 10893 c-6 -16 -13 -42 -17 -58 -3 -17 26 -452 65 -967 73 -968
80 -1029 129 -1126 21 -41 83 -101 506 -486 143 -130 268 -236 277 -236 21 0
44 33 53 76 9 45 -101 1910 -120 2022 -18 109 -59 205 -106 248 -77 70 -738
554 -756 554 -13 0 -24 -10 -31 -27z"
              />
              <path
                d="M5600 10760 c-459 -60 -858 -114 -887 -120 -65 -14 -98 -39 -89 -66
7 -22 936 -610 998 -631 60 -20 199 -31 285 -22 113 11 1761 258 1806 270 50
13 81 43 68 67 -5 9 -240 144 -521 300 -565 313 -565 312 -735 311 -51 -1
-449 -48 -925 -109z"
              />
              <path
                d="M3245 10456 c-517 -68 -956 -127 -975 -131 -19 -4 -52 -16 -72 -26
-75 -38 -78 -35 401 -392 246 -183 459 -335 483 -343 27 -10 90 -18 168 -21
122 -5 153 0 1129 146 1083 162 1096 165 1096 221 0 21 -59 62 -484 331 -266
169 -502 312 -525 319 -22 6 -95 13 -161 15 -109 4 -208 -8 -1060 -119z"
              />
              <path
                d="M9860 10463 c-100 -10 -1632 -245 -1659 -254 -17 -6 -36 -20 -42 -31
-9 -17 -7 -25 12 -43 34 -32 1122 -626 1188 -648 33 -11 97 -21 156 -24 95 -5
141 2 934 141 458 80 845 152 859 158 43 22 50 44 22 72 -36 34 -1183 595
-1250 611 -61 15 -166 23 -220 18z"
              />
              <path
                d="M2050 10170 c-11 -11 -22 -31 -25 -45 -3 -14 -7 -36 -10 -49 -3 -13
4 -170 15 -348 11 -177 35 -606 55 -953 19 -346 41 -666 49 -710 18 -103 49
-185 89 -235 41 -51 832 -768 863 -782 19 -9 28 -8 43 6 37 34 42 92 31 344
-14 330 -27 660 -50 1277 -11 292 -25 557 -31 590 -16 91 -47 179 -80 224 -19
27 -183 156 -469 371 -242 182 -445 330 -450 330 -6 0 -19 -9 -30 -20z"
              />
              <path
                d="M7730 10144 c-8 -2 -411 -62 -895 -134 -947 -142 -967 -146 -973
-201 -3 -25 31 -48 546 -372 391 -246 566 -351 608 -364 45 -13 90 -18 189
-17 122 0 186 10 1020 158 490 86 907 161 928 167 41 11 77 40 77 62 0 8 -8
21 -17 30 -10 8 -275 158 -590 332 -630 348 -625 346 -793 344 -47 -1 -92 -3
-100 -5z"
              />
              <path
                d="M5395 9793 c-16 -2 -462 -69 -990 -149 -528 -79 -984 -151 -1014
-160 -50 -14 -101 -51 -101 -73 0 -6 12 -22 28 -35 74 -66 979 -730 1015 -746
66 -29 170 -43 276 -37 57 3 514 79 1124 186 1066 187 1097 194 1112 242 4 10
2 26 -4 36 -14 26 -1073 695 -1134 716 -52 18 -247 31 -312 20z"
              />
              <path
                d="M11280 9673 c-266 -43 -1569 -277 -1606 -288 -88 -26 -162 -107 -199
-216 -15 -44 -165 -1862 -165 -1998 0 -79 21 -126 69 -158 47 -32 82 -29 272
17 90 21 438 105 773 185 335 80 624 153 642 161 70 33 149 142 168 229 3 17
55 451 116 965 79 675 107 945 101 971 -21 93 -89 145 -171 132z"
              />
              <path
                d="M3199 9316 c-35 -17 -48 -67 -48 -193 -1 -133 66 -1932 74 -2017 9
-84 50 -206 88 -261 17 -25 253 -246 522 -491 464 -421 492 -444 525 -442 27
2 38 10 55 38 18 32 20 50 18 185 -19 1573 -25 1997 -33 2081 -6 60 -19 128
-33 166 -51 142 -33 125 -595 546 -284 214 -524 391 -533 394 -9 4 -27 1 -40
-6z"
              />
              <path
                d="M8415 9170 c-1218 -217 -1099 -193 -1159 -233 -66 -44 -130 -136
-146 -210 -15 -71 -82 -2095 -70 -2135 26 -91 84 -137 170 -136 73 1 1759 405
1818 435 24 12 63 44 87 71 83 93 78 52 161 1122 40 528 74 985 74 1016 -1
119 -75 202 -178 199 -20 -1 -361 -59 -757 -129z"
              />
              <path
                d="M5690 8689 c-749 -133 -1018 -184 -1054 -201 -70 -32 -132 -97 -169
-176 l-32 -67 2 -175 c5 -400 33 -1882 37 -1972 5 -115 27 -165 92 -211 80
-56 70 -58 864 132 393 95 839 201 990 238 151 36 291 74 311 84 51 25 123
100 149 154 12 25 26 73 31 108 5 34 23 516 40 1071 33 1122 35 1065 -34 1136
-44 45 -85 60 -159 59 -35 -1 -515 -82 -1068 -180z"
              />
              <path
                d="M1236 8558 c-23 -33 -21 -92 29 -756 25 -328 52 -691 60 -807 18
-236 27 -291 63 -388 24 -66 39 -84 384 -450 197 -210 368 -386 380 -392 16
-7 24 -4 39 14 15 18 19 40 19 96 0 168 -101 1772 -116 1835 -16 71 -55 164
-82 194 -49 55 -734 676 -746 676 -8 0 -22 -10 -30 -22z"
              />
              <path
                d="M2194 7702 c-42 -28 -42 -79 -9 -639 13 -230 36 -612 50 -848 27
-456 35 -517 89 -623 26 -52 834 -917 865 -927 10 -3 26 -3 34 1 41 15 42 46
8 916 -40 1054 -43 1096 -75 1191 -14 40 -35 91 -47 112 -24 41 -873 825 -892
825 -7 0 -17 -4 -23 -8z"
              />
              <path
                d="M10265 7065 c-412 -100 -770 -188 -795 -196 -64 -19 -160 -116 -188
-190 -18 -48 -30 -181 -92 -954 -39 -494 -69 -914 -65 -933 4 -21 21 -50 40
-69 28 -28 40 -33 82 -33 34 0 264 64 788 221 407 122 756 229 776 239 48 25
106 92 136 157 22 48 35 144 124 895 54 463 99 865 99 893 0 30 -7 64 -18 84
-21 38 -74 71 -112 70 -14 0 -362 -83 -775 -184z"
              />
              <path
                d="M8095 6540 c-473 -115 -875 -216 -893 -225 -82 -38 -171 -156 -186
-245 -3 -19 -20 -455 -37 -968 -30 -924 -31 -933 -12 -970 29 -54 75 -82 137
-82 39 0 260 62 856 240 443 132 824 247 847 256 88 32 169 115 200 207 17 48
156 1828 147 1872 -16 79 -75 126 -156 124 -23 0 -430 -94 -903 -209z"
              />
              <path
                d="M3280 6682 c-13 -10 -25 -36 -30 -60 -6 -37 48 -1664 64 -1883 3 -42
12 -106 21 -141 34 -133 60 -165 527 -661 476 -505 518 -547 547 -547 11 0 29
12 40 26 20 26 21 38 20 293 0 146 -6 610 -14 1031 -14 836 -12 811 -76 951
-37 81 -48 92 -604 601 -370 339 -449 408 -468 408 -3 0 -15 -8 -27 -18z"
              />
              <path
                d="M1391 6401 c-6 -11 -11 -44 -11 -73 0 -115 111 -1547 125 -1613 28
-130 54 -167 390 -570 372 -446 389 -464 412 -449 9 6 20 24 25 39 6 25 -19
496 -77 1440 -23 374 -36 411 -217 605 -448 482 -596 635 -615 638 -14 2 -26
-4 -32 -17z"
              />
              <path
                d="M5702 5960 c-740 -180 -996 -246 -1034 -267 -94 -51 -168 -160 -176
-261 -5 -64 26 -1864 34 -1939 3 -29 15 -67 27 -85 28 -42 99 -78 152 -78 22
0 137 29 255 64 1233 368 1668 500 1699 515 77 40 164 157 176 238 13 87 63
1884 54 1919 -21 73 -105 136 -180 133 -13 0 -466 -108 -1007 -239z"
              />
              <path
                d="M2302 5415 c-16 -34 -15 -127 3 -418 8 -133 29 -478 45 -767 32 -545
38 -593 88 -711 23 -52 806 -1000 843 -1019 18 -10 25 -9 43 9 28 29 29 -44
-29 1420 -22 544 -14 523 -328 859 -122 131 -309 331 -416 445 -204 217 -226
233 -249 182z"
              />
              <path
                d="M10018 4806 c-444 -135 -754 -234 -782 -250 -65 -38 -126 -117 -147
-190 -5 -17 -39 -397 -74 -845 -70 -876 -70 -860 -18 -901 54 -42 72 -37 842
235 397 140 734 263 750 274 46 33 102 100 123 148 28 64 212 1614 197 1667
-14 51 -61 86 -112 85 -24 0 -356 -95 -779 -223z"
              />
              <path
                d="M7965 4186 c-456 -139 -844 -259 -861 -268 -50 -27 -131 -123 -152
-181 -18 -47 -22 -123 -47 -856 -15 -443 -25 -835 -23 -872 3 -55 8 -73 27
-93 31 -33 83 -50 130 -42 42 7 1602 556 1650 581 48 24 107 88 136 145 33 64
30 40 101 966 57 736 58 763 41 798 -23 48 -70 76 -127 75 -28 -1 -359 -96
-875 -253z"
              />
              <path
                d="M3360 4295 c-24 -29 -28 -89 -19 -317 64 -1647 56 -1529 108 -1658
29 -71 4 -39 519 -658 309 -370 451 -534 469 -538 18 -5 31 -1 46 15 26 26 25
-44 14 896 -11 872 -17 996 -51 1094 -14 41 -37 93 -51 116 -23 39 -903 991
-963 1042 -31 27 -55 29 -72 8z"
              />
              <path
                d="M6605 3775 c-5 -2 -415 -126 -910 -275 -495 -149 -920 -278 -944
-287 -62 -24 -155 -113 -186 -178 -24 -52 -25 -60 -25 -262 1 -394 29 -1589
38 -1613 11 -27 45 -61 79 -79 60 -31 87 -22 1013 304 491 173 912 326 935
339 56 33 112 97 141 161 l24 53 27 862 c27 858 27 862 8 898 -30 54 -77 82
-139 81 -28 0 -55 -2 -61 -4z"
              />
            </g>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default SideAnchorLinks;
