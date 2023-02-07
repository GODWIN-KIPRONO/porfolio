import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "animate.css";

const pathVariants = {
  hidden: {
    opactiy: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 3000);
  }, []);

  return (
    <div
      className={hasLoaded ? "animate__animated animate__fadeOut" : ""}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
        width="40%"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="m 194.2832,23.466797 c -1.85,-0.1 -3.61718,0.265885 -3.61718,1.199219 0,0.666666 1.86809,1.468229 4.13476,1.601562 2.53333,0.133333 3.86628,-0.267838 3.59961,-1.201172 -0.33333,-0.933333 -2.26719,-1.499609 -4.11719,-1.599609 z m -6.86328,0.515625 c -3.05366,0.345747 -6.10969,0.66907 -9.16797,0.96875 -0.42521,1.334053 -0.82048,2.341425 -1.05273,2.515625 -0.40557,0.243333 -0.75063,0.636044 -0.96289,1.085937 1.97676,-0.192573 3.95442,-0.398277 5.93359,-0.583984 1.1255,-0.74412 2.81968,-1.302734 4.36328,-1.302734 2.4,0 2.93296,-0.399219 1.59961,-1.199219 -1.14932,-0.7314 -1.36489,-1.058322 -0.71289,-1.484375 z m 16.54492,2.02539 c -0.43664,1.594418 -0.0621,2.89149 1.08594,5.289063 0.12421,0.03545 0.24481,0.06337 0.375,0.111328 1.00264,0.369387 1.67332,0.616912 2.42188,0.892578 l 0.41992,-1.634765 c 0.2198,-0.83524 0.48776,-1.75065 0.76562,-2.664063 -1.70869,-0.616653 -3.39444,-1.288976 -5.06836,-1.994141 z m -58.84765,2.359376 c -2.81667,-0.03333 -6.5181,0.166406 -11.38477,0.566406 -3.2,0.266666 -5.73242,1.200521 -5.73242,1.867187 0,0.8 1.86641,0.932292 5.06641,0.265625 2.66666,-0.533333 8.53411,-1.066927 12.80078,-0.933594 4.8,0 6.93203,-0.40026 5.33203,-0.933593 -1.33333,-0.533334 -3.26537,-0.798698 -6.08203,-0.832031 z m -19.57227,2.574218 c -0.57031,0.02734 -1.59453,0.258203 -3.14453,0.658203 C 121.06706,31.866276 120,32.665885 120,33.199219 c 0,0.533333 -2.13268,1.734591 -4.66602,2.667969 -2.53333,0.933333 -4.66796,2.266927 -4.66796,2.933593 0,1.866667 2.13385,1.465409 3.86718,-0.667969 0.93334,-1.066666 3.06641,-2.265494 5.06641,-2.798828 1.86667,-0.4 4.26732,-1.734635 5.33398,-2.667968 1.25,-1.25 1.56185,-1.770183 0.61133,-1.72461 z m 86.72266,1.191406 c -1.86667,0 -1.86758,0.267448 -0.26758,0.800782 0.94793,0.35548 2.62118,1.655313 4.10742,2.876953 0.8331,0.426147 1.65278,0.881942 2.48633,1.414062 0.33151,0.211627 0.61506,0.492202 0.92187,0.738282 0.46903,0.3758 0.78417,0.769849 0.9961,1.160156 1.06472,0.67296 2.15361,1.315933 3.08789,1.810547 6.26668,2.933333 24.80117,19.867057 31.20117,28.40039 5.33333,7.066667 7.86524,9.466407 7.86524,7.066407 0,-2.4 -8.26524,-12.666276 -15.86524,-19.59961 -2.4,-2.266653 -6.53359,-6.133724 -8.93359,-8.40039 -2.53335,-2.4 -7.0681,-5.601172 -10.13477,-7.201172 -3.2,-1.6 -7.46484,-4.266667 -9.46484,-6 -2.13334,-1.733334 -4.8,-3.19974 -6,-3.066407 z M 92.46875,49.511719 c -1.066406,0.08463 -3.285156,1.438758 -7.535156,4.355469 -9.733334,6.8 -14.533333,12.400129 -22,25.466796 C 56.40026,90.800651 56,92.000825 56,100.80078 c 0,8 -0.666016,10.53177 -4.666016,18.39844 -4.533333,8.8 -4.934896,11.4668 -1.601562,11.4668 2.266667,0 7.867057,-18.5323 8.40039,-28.26563 C 58.799523,92.933768 61.067143,86.666667 67.867188,76 73.733854,66.8 88.533333,52 92,52 c 0.666667,0 1.333984,-0.667318 1.333984,-1.333984 0,-0.8 -0.22539,-1.205079 -0.865234,-1.154297 z m 172.00977,31.017578 c -0.23204,0.02891 -0.34571,0.304687 -0.34571,0.804687 0,2.133334 2.93373,6.666016 4.40039,6.666016 1.6,0 0.79948,-2.40013 -1.86718,-5.466797 -1.08334,-1.416667 -1.80079,-2.052083 -2.1875,-2.003906 z m 6.55468,10.298828 C 270.75732,90.825358 270.66602,91.25 270.66602,92 c 0,0.666667 1.86809,4.266667 4.13476,8 2.26667,3.6 3.59922,7.2 3.19922,8 -0.53333,0.8 0.80026,4.93307 2.93359,9.06641 3.6,7.2 3.73243,8.53294 3.73243,25.59961 0.13333,30.53333 0.53333,39.46731 2,37.33398 0.66666,-1.06667 0.9332,-7.46758 0.5332,-14.26758 -0.26667,-6.66666 10e-4,-14.8 0.66797,-18 2.26666,-10 -1.06797,-27.59857 -6.66797,-35.86523 -1.73333,-2.4 -1.99974,-3.86745 -1.06641,-4.80078 1.06667,-1.06667 -0.13294,-3.7336 -3.59961,-8.933598 -3.39166,-5.225 -4.89306,-7.2986 -5.5,-7.304687 z M 72.400391,92 c -0.933334,0 -2.800868,1.60013 -4.267579,3.466797 -1.6,2 -2.799348,4.532378 -2.666015,5.732423 0,1.73333 0.134114,1.8681 0.800781,0.13476 0.4,-1.06666 2.266146,-3.601037 4.132813,-5.734371 1.866666,-2 2.8,-3.599609 2,-3.599609 z m 128.533199,5.333984 c -0.4,0 -1.20104,1.333506 -1.73437,2.933596 -0.4,1.73333 -1.99922,5.4651 -3.19922,8.39844 -1.33333,2.93333 -2.79922,6.8013 -3.19922,8.66796 -2.53333,12.4 -5.33333,21.33334 -8,26 -1.73333,2.93334 -2.79987,6.00026 -2.5332,6.9336 0.26666,0.8 -0.53386,1.86562 -1.86719,2.26562 -1.33333,0.4 -3.46745,3.19948 -4.80078,6.13282 -2.66667,6.13333 -2.66641,6.66796 -1.06641,6.66796 1.46667,0 6.6668,-8.13307 9.4668,-15.0664 1.2,-2.66667 3.06706,-6.1349 4.40039,-7.60156 1.2,-1.46667 2.80013,-4.93243 3.4668,-7.73243 0.66666,-2.66666 2.79883,-10.00091 4.79883,-16.26757 3.6,-11.2 5.60091,-21.332036 4.26757,-21.332036 z m 12.91016,1.246094 c -0.30547,-0.01875 -0.69297,0.487412 -1.04297,1.687502 -0.4,0.93333 -1.20143,3.8651 -2.13476,6.39844 -2.26667,6.93333 -2.79961,10.66796 -1.59961,10.66796 0.93333,0 2.93307,-5.99973 5.0664,-15.0664 0.5,-2.16667 0.22005,-3.656252 -0.28906,-3.687502 z m 7.89648,1.531252 c -0.0844,-0.0399 -0.14062,0.22226 -0.14062,0.82226 -0.13333,1.86667 -1.20039,3.06641 -2.40039,3.06641 -1.46667,0 -1.86589,0.66758 -1.19922,2.26758 3.86667,9.73333 12.66602,37.46523 12.66602,39.86523 0,1.6 0.80104,3.19961 1.73437,3.59961 1.33333,0.4 1.33333,1.20013 0,3.4668 -2.26667,3.6 -2.13437,4.53489 0.26563,3.60156 3.2,-1.2 6.00143,2.93164 6.13476,8.93164 0.13333,9.06667 2.39844,12.40156 2.39844,3.60156 0,-6.93333 -3.59909,-23.8677 -3.73242,-17.73437 -0.13334,5.2 -2.80026,3.33333 -2.9336,-2 C 234.39987,146.93294 234.13333,143.46667 234,142 c -0.13333,-1.46667 -0.26706,-3.99909 -0.40039,-5.73242 -0.13333,-2 -0.79909,-2.80143 -1.73242,-2.13477 -1.2,0.66667 -1.33464,-0.13268 -0.66797,-2.66601 0.66667,-2.66667 0.4013,-3.4668 -1.33203,-3.4668 -1.6,0 -2.00013,-0.80078 -1.4668,-2.80078 0.4,-1.6 -0.40052,-4.7987 -1.86719,-7.33203 -1.33333,-2.53334 -2.39896,-5.06628 -2.26562,-5.59961 0,-0.53334 -0.26797,-1.86693 -0.66797,-2.9336 -0.4,-1.06666 -1.06537,-4.13463 -1.33203,-6.66796 -0.16667,-1.58334 -0.38672,-2.48829 -0.52735,-2.55469 z m -69.28125,1.37305 c -0.36367,-0.0346 -0.9763,1.0414 -1.79296,3.3164 -0.8,1.86667 -1.33204,4.13164 -1.33204,4.93164 0,0.93334 -4.0013,6.00013 -8.66796,11.4668 -4.8,5.46667 -8.66602,10.93424 -8.66602,12.26758 0,1.33333 -0.53398,2.79922 -1.33398,3.19922 -1.6,0.93333 -1.86563,4.66796 -0.26563,4.66796 0.53333,0 1.86693,-2.00039 2.93359,-4.40039 0.93334,-2.26666 4.26537,-6.93424 7.33204,-10.26757 8.26666,-9.06667 10.93385,-13.46576 11.86718,-19.73243 0.45,-3.525 0.39248,-5.40468 -0.0742,-5.44921 z m -79.357418,9.46679 c -0.510253,-0.14108 -2.14414,1.34857 -7.36914,6.11524 -3.733334,3.46666 -7.331901,7.73294 -7.865234,9.59961 -1.200045,4.4 -3.467839,7.73346 -5.201172,7.46679 -0.666667,0 -1.465756,2.1336 -1.732422,4.9336 -0.4,3.86666 0.400216,6.26627 2.933594,9.59961 2.4,3.06666 3.466796,6.13385 3.466796,9.86718 0,3.73334 0.531901,5.4668 1.865235,5.4668 1.2,0 2.668099,3.33398 4.134765,9.33398 2.4,9.86667 5.333464,13.99987 7.466797,10.53321 1.733334,-2.8 1.465886,-3.86641 -0.800781,-3.06641 -1.466667,0.66667 -2,-0.13502 -2,-3.06836 0,-2.13333 -0.800477,-5.0651 -1.867188,-6.39844 -2.533333,-3.73333 -6.532031,-20.26809 -5.332031,-22.13476 0.533334,-1.06667 0.398742,-1.19935 -0.667969,-0.66602 -2.4,1.6 -5.466796,-2.66575 -5.466796,-7.73242 0,-5.6 5.066406,-14.13333 13.066406,-22 3.066667,-3.06667 5.601562,-6.13411 5.601562,-6.80078 0,-0.58333 -4.44e-4,-0.9847 -0.232422,-1.04883 z m 103.347658,5.24219 c -0.27805,-0.0137 -0.64857,0.38229 -1.11524,1.14062 -0.53333,0.93334 -0.93411,4.66654 -0.80078,8.53321 0,3.73333 -0.53398,10.26653 -1.33398,14.5332 -1.06667,4.93333 -1.06563,8.26641 -0.26563,9.06641 0.8,0.8 1.86641,-4.80013 3.06641,-15.4668 1.25,-12.5 1.44226,-17.75781 0.44922,-17.80664 z m -18.61914,2.90625 c -0.348,0.0312 -0.8698,0.59441 -1.5625,1.83398 -0.93334,1.6 -1.60013,4.93399 -1.4668,7.33399 v 4.39844 l 2,-5.33204 c 1.55833,-4.4 1.91777,-7.91907 1.16797,-8.21484 -0.0426,-0.0168 -0.089,-0.024 -0.13867,-0.0195 z m 118.03711,0.23437 0.93359,4.66602 c 0.53333,2.53333 1.33333,5.86732 2,7.33398 0.93333,2.53334 1.06641,2.53191 1.06641,-0.13476 0.13333,-1.6 -0.80052,-4.93203 -1.86719,-7.33203 z m -112.43555,5.04688 c -0.21582,0.0552 -1.08984,2.34375 -1.96484,5.21875 -0.93334,3.2 -2.26693,6.8 -2.9336,8 -1.6,3.2 -1.46718,9.06641 0.13282,9.06641 0.8,0 1.33346,-0.39974 1.46679,-1.06641 0,-0.53333 0.40078,-2.13294 0.80078,-3.59961 1.06667,-4.53333 2.93321,-17.19961 2.53321,-17.59961 -0.008,-0.0167 -0.0208,-0.0232 -0.0352,-0.0195 z m -41.83203,14.28516 c -0.53333,0 -2.53281,2.80091 -4.13281,6.26757 -3.46667,7.06667 -6.40104,19.46615 -5.73438,24.13282 0.66667,4.53333 2.9336,2.13359 2.9336,-3.06641 0,-2.53333 1.86666,-9.46628 4,-15.59961 4.53333,-12.26667 4.40026,-11.73437 2.93359,-11.73437 z m -49.078126,0.40039 c -0.190494,-0.009 -0.439062,0.45898 -0.789062,1.33398 -0.666667,1.33333 -1.066406,4.13333 -1.066406,6 0.133333,3.2 0.266796,3.33255 1.466796,1.19922 0.800045,-1.33333 1.200261,-4 0.933594,-6 -0.15,-1.725 -0.3,-2.52207 -0.544922,-2.5332 z m 54.394536,2.40234 c -0.081,-0.0109 -0.15157,-0.0145 -0.21094,0.004 -0.0792,0.0188 -0.13854,0.0603 -0.17188,0.12695 -0.13333,0.26667 -0.39935,3.06758 -0.66601,6.26758 -0.4,5.06666 -0.2681,5.59935 1.86523,4.66601 1.2,-0.66666 9.33333,-1.0664 18,-1.0664 11.2,0.13333 15.60117,-0.26732 15.20117,-1.33399 -0.66666,-2.13333 -16.00065,-3.59948 -23.33398,-2.13281 -7.33333,1.33333 -9.99922,0.53255 -9.19922,-2.80078 0.4,-1.46667 0.13346,-2.93203 -0.5332,-3.33203 -0.375,-0.225 -0.70812,-0.3657 -0.95117,-0.39844 z m 150.02343,5.62695 c -0.55625,0.0875 -1.20586,2.83711 -2.00586,9.03711 -0.93333,6.13334 -1.59961,13.4681 -1.59961,16.13477 0,4.53333 5.33191,17.4664 7.86524,19.0664 1.33333,0.66667 -0.53177,-9.06731 -2.39844,-13.33398 -2.53333,-5.6 -2.6668,-7.60065 -1.4668,-17.33398 0.66667,-5.46667 0.79948,-11.19883 0.13282,-12.79883 -0.16667,-0.53334 -0.34193,-0.80065 -0.52735,-0.77149 z m -76.26172,0.85742 c -3.55061,0.041 -6.01171,0.4642 -6.01171,1.38086 0,0.66667 2.80039,1.33204 6.40039,1.33204 3.46666,0.13333 10.53294,0.93385 15.59961,1.86718 9.46666,1.86667 12.26796,1.73347 8.66796,-0.5332 -3.75833,-2.38333 -16.84488,-4.13711 -24.65625,-4.04688 z m -124.277339,9.38086 c -0.933335,0 -1.734375,0.53256 -1.734375,1.19922 0,0.8 0.534451,1.59948 1.201172,2.13282 0.8,0.4 1.332031,1.73307 1.332031,3.0664 0,1.2 0.400261,7.06693 0.933593,12.9336 0.933389,10.8 1.599739,12.00027 9.066407,16.93359 1.066665,0.66668 0.934375,1.86772 -0.265625,3.73437 -1.2,2 -1.334245,3.46536 -0.267578,5.33204 0.666666,1.33332 1.333984,3.7345 1.333984,5.20117 0,1.6 0.667319,2.79883 1.333984,2.79883 2.4,0 12.531906,11.06731 15.865236,17.33398 4,7.73333 5.4668,9.19909 5.4668,5.73242 0,-6.66666 -7.73295,-19.73242 -11.599614,-19.73242 -1.2,0 -2.399349,-0.79909 -2.666015,-1.73242 -0.4,-0.8 0.133073,-1.60156 1.066406,-1.60156 0.933333,0 0.665885,-0.79857 -0.800781,-1.86524 -1.466667,-1.06667 -3.332813,-1.60117 -4.132813,-1.20117 -1.866667,0.66667 -3.866069,-8.79935 -2.666015,-12.66602 0.533333,-1.73333 -0.533855,-3.73268 -3.867188,-6.66601 -4,-3.46667 -4.799348,-4.93451 -4.666016,-9.20117 0.266668,-7.86667 -2.800261,-21.73243 -4.933593,-21.73243 z m 26.798829,0.13282 c -0.13333,-0.13334 -0.93294,1.86601 -1.59961,4.66601 -1.866711,7.33334 -2.800521,23.20143 -1.867188,30.13477 0.666668,4.4 1.200388,0.93242 2.400388,-14.26758 0.8,-11.06667 1.33308,-20.26654 1.06641,-20.5332 z m 100,2.5332 c -3.73333,0 -6.1319,0.79935 -7.86524,2.66602 -3.2,3.6 -0.39987,3.6 7.4668,0 L 208.66602,160 Z m -57.59961,0.13281 c -3.33333,0 -3.19896,0.26654 1.73437,2.53321 6.13334,2.8 8.66602,3.20065 8.66602,1.33398 0,-1.86667 -5.86706,-4.00052 -10.40039,-3.86719 z m -3.10156,5.32617 c -0.47969,-0.0122 -0.99779,-0.009 -1.56446,0.008 -3.06666,0.13333 -7.33294,0.53307 -9.59961,1.0664 -7.73333,1.86667 -18,9.20026 -18,12.9336 0,3.2 3.9987,3.2 5.33204,0 1.46666,-4 12.1345,-10.53399 15.20117,-9.33399 1.86666,0.66667 1.73307,1.19987 -0.9336,4.53321 -1.6,2.13333 -3.7332,3.86718 -4.5332,3.86718 -0.93333,0.13334 -1.73437,1.60065 -1.73437,3.33399 0,4 6.93346,10.13281 11.46679,10.13281 6.13334,0 9.46641,-12.66732 5.06641,-19.33398 -1.86667,-2.93334 -1.86615,-3.33204 -0.13281,-3.33204 1.06666,0 2.66627,0.93282 3.59961,2.13282 2.4,2.8 6.66796,4.93398 6.66796,3.33398 0,-0.66667 -1.60013,-3.06732 -3.46679,-5.33398 -2.56667,-3.03334 -4.01133,-3.92214 -7.36914,-4.00782 z M 212,166.66602 c -11.33333,0 -11.46576,0 -13.73242,4 -2.13334,3.6 -1.06693,5.99987 1.0664,2.5332 1.2,-1.86667 7.19935,-4.13255 8.66602,-3.19922 0.66667,0.4 -0.26667,2.93294 -2,5.59961 -4.13333,5.86667 -4.13281,9.33424 -0.13281,14.26758 2.53333,3.06666 4.5319,3.99987 9.86523,4.5332 4.4,0.4 6.9349,2.6e-4 7.60156,-1.06641 0.8,-1.2 -2.6e-4,-1.33411 -2.93359,-0.80078 -6.53333,1.46667 -13.73437,-3.33255 -13.73437,-9.19922 0,-1.6 0.39974,-2.1345 1.0664,-1.20117 0.53334,0.93334 2.1349,1.8681 3.60156,2.13477 1.86667,0.4 2.53178,1.46484 2.39844,3.46484 -0.4,3.73334 2.40156,3.86758 5.60156,0.26758 3.06667,-3.33333 1.86524,-11.73307 -2.13476,-15.06641 l -2.79883,-2.26757 h 2.79883 c 1.6,0 5.33476,1.2013 8.13476,2.66796 4.4,2.26667 5.33204,3.46602 5.33204,6.66602 0,4.66667 0.4,4.79909 4,1.73242 3.6,-3.2 3.33372,-4.66653 -1.59961,-8.5332 -7.86667,-5.86667 -9.59974,-6.39987 -21.06641,-6.5332 z m -72.66602,6.66796 c 2.66667,0 3.33204,0.6668 3.33204,3.4668 0,2.66667 -0.53282,3.33268 -2.13282,2.66602 -1.2,-0.4 -2.66731,-0.80078 -3.33398,-0.80078 C 136.53255,178.66602 136,177.46667 136,176 c 0,-2 0.93398,-2.66602 3.33398,-2.66602 z m 73.06641,0.0664 c 1,-0.0333 2.26537,0.46654 3.33203,1.5332 1.73334,1.73334 2.26797,6.40039 0.66797,6.40039 -1.6,0 -5.73437,-4.40091 -5.73437,-6.26757 0,-1.06667 0.73437,-1.63269 1.73437,-1.66602 z m -79.73437,7.93359 c 1.06666,0 2,0.53204 2,1.33204 0,0.66666 1.46731,1.33398 3.33398,1.33398 3.6,0 4.26576,1.19909 1.73242,3.73242 -2.26666,2.26667 -3.19844,2.0013 -6.39844,-1.33203 -3.2,-3.46667 -3.46796,-5.06641 -0.66796,-5.06641 z M 253.4668,184 c -0.66667,0 -1.46771,3.20026 -1.73438,6.93359 -0.26666,3.86667 -1.06627,8.13399 -1.59961,9.33399 -0.8,1.73333 -0.53307,2.39844 0.9336,2.39844 2.26666,0 4.00052,-3.33243 3.86718,-7.73243 C 254.80026,186.00026 254.53346,184 253.4668,184 Z m -9.15821,1.1582 c -0.0589,-0.0374 -0.11744,0.0174 -0.17578,0.17578 -0.53333,1.46667 -2.93359,26.1336 -2.93359,28.9336 0,1.6 -0.53203,4.66653 -1.33203,6.5332 -0.8,2.13333 -0.80143,4.13216 -0.13477,4.79883 0.66667,0.66667 1.86745,-1.46589 2.80078,-5.19922 0.93334,-3.46667 2.13269,-8.26706 2.66602,-10.40039 0.875,-3 -0.008,-24.28076 -0.89063,-24.8418 z M 68.708984,188.875 C 68.120685,188.93236 68,189.49934 68,190.66602 c 0,2.4 6.266276,7.46757 7.599609,6.26757 1.466667,-1.46666 -1.065625,-5.7345 -4.265625,-7.20117 -1.1,-0.5 -1.84375,-0.79219 -2.34375,-0.85156 -0.104166,-0.0124 -0.197207,-0.01 -0.28125,-0.006 z m 197.160156,0.93945 c -0.31172,0.007 -0.56055,0.90157 -0.93555,2.85157 -0.4,2.53333 -7.8e-4,4.66666 1.19922,6 1.6,1.6 1.86771,1.46796 1.73438,-1.33204 0,-1.86666 -0.53308,-4.53333 -1.06641,-6 -0.40833,-0.99166 -0.68919,-1.52477 -0.93164,-1.51953 z m -160.10547,0.26953 c -0.73971,-0.10421 -1.71458,2.9586 -2.03125,8.1836 -0.53333,10.4 1.33477,16.53255 4.13477,13.19922 1.2,-1.46667 1.33229,-3.19974 0.26562,-7.06641 -0.8,-2.8 -1.46679,-6.93398 -1.46679,-9.33398 0,-3.35834 -0.39623,-4.91112 -0.90235,-4.98243 z M 274.66602,192 c -0.66667,0 -1.33204,1.46732 -1.33204,3.33398 0,1.86667 0.66537,3.33204 1.33204,3.33204 0.8,0 1.33398,1.60013 1.33398,3.46679 0,2.93334 0.26667,3.33386 2,1.86719 1.06667,-0.93333 2,-3.33346 2,-5.4668 0,-2.53333 -0.66667,-3.86718 -2,-3.86718 -1.06667,0 -2,-0.66537 -2,-1.33204 0,-0.8 -0.53398,-1.33398 -1.33398,-1.33398 z m -176.533208,0.13281 c -0.133333,0 -0.932421,0.40078 -1.732421,0.80078 -2.533334,0.93334 -2.133594,5.06654 1.066406,8.53321 l 2.666013,3.19922 L 99.333984,200 c -0.533333,-2.53333 -0.933073,-5.46706 -1.066406,-6.40039 0,-0.8 -0.134721,-1.60013 -0.134766,-1.4668 z m -20.666015,4.53321 -0.132813,5.0664 c 0,2.66667 0.79961,6.1349 1.59961,7.60156 0.608738,0.97399 0.935381,1.72639 0.986328,2.4336 0.329825,0.27147 0.652242,0.64585 0.943359,1.14453 1.85827,3.1832 1.143745,2.0811 2.519531,3.80273 0.599681,0.0908 1.163915,0.86834 1.847657,2.39649 0.517858,0.68821 1.030162,1.38111 1.515625,2.09179 0.06891,0.10243 1.936347,2.89529 1.992187,3.64258 0.0073,0.0974 -0.0041,0.1941 -0.0078,0.29102 1.347165,1.87739 2.940571,3.86823 4.46875,5.5293 2.933333,3.33333 5.466797,6.40026 5.466797,6.93359 0,0.66667 0.932645,1.06641 2.000004,1.06641 1.06666,0 2,0.53398 2,1.33398 0,0.66667 0.80052,1.33398 1.86718,1.33398 1.2,0 1.59974,1.0668 1.06641,3.4668 -0.4,2.13333 0.1345,3.86654 1.20117,4.5332 0.61073,0.38866 0.96278,0.75681 1.0625,1.2461 0.32013,0.2909 0.63251,0.64386 0.9082,1.125 0.30314,0.52901 0.62602,1.04619 0.95508,1.55859 0.55612,0.47572 1.10617,0.96026 1.65039,1.45117 3.64191,0.23107 5.56333,1.35126 5.89844,3.50196 0.73466,0.0357 1.59055,0.52337 2.30859,1.63281 0.1978,0.30561 0.4125,0.59789 0.61914,0.89648 2.12193,1.09429 5.54849,4.97042 7.33985,8.63868 9.3e-4,9.3e-4 -0.001,0.003 0.002,0.004 0.94449,1.01136 1.88541,2.02579 2.79883,3.06055 0.50306,0.56989 0.78826,1.1263 0.91211,1.63281 0.11683,0.0674 0.23454,0.13701 0.34375,0.18555 1.3333,0.53333 6.00039,3.99909 10.40039,7.73242 14.53333,12.4 19.59948,15.73346 26.13281,17.4668 10.26667,2.66666 16.53387,-6.6e-4 31.86719,-13.33399 5.46667,-4.8 10.6668,-8.79883 11.4668,-8.79883 0.8,0 3.33242,-2.40065 5.73242,-5.33398 1.07796,-1.39502 2.24246,-2.66014 3.25781,-3.61328 0.0577,-0.84499 0.84777,-1.59559 2.20899,-1.66016 0.65433,-0.87665 1.3201,-1.74508 2,-2.60156 0.3089,-0.98314 1.89345,-3.22819 5.20117,-7.45898 2.4,-2.93334 4.9319,-7.06589 5.86523,-9.19922 0.99167,-2.275 1.83032,-3.19711 2.28125,-3.06836 0.15607,0.0446 0.2632,0.21732 0.31445,0.5039 1.49525,-1.47757 3.08944,-2.8367 4.7754,-4.06836 0.41644,-0.75954 0.77849,-1.49363 1.51171,-2.9707 0.64564,-1.30057 1.5436,-1.86629 2.32227,-1.88281 0.0312,-6.7e-4 0.059,0.0106 0.0898,0.0117 0.27452,-0.22119 0.55301,-0.41456 0.83399,-0.58594 -0.0304,-0.39911 -0.0157,-0.69644 0.13672,-0.66797 0.0877,0.0164 0.22816,0.16172 0.40039,0.38281 0.58845,-0.28409 1.17603,-0.45507 1.73437,-0.45507 0.24918,0 0.46685,0.0798 0.66016,0.24023 0.11972,-0.0513 0.23137,-0.10714 0.36328,-0.15234 2.00163,-0.68598 4.00929,-1.36462 6.01172,-2.05664 0.15809,-0.1562 0.31611,-0.3132 0.47461,-0.46875 1.02058,-6.02618 3.13657,-10.34164 6.49023,-13.69532 1.46667,-1.46666 3.0668,-4.80065 3.4668,-7.33398 0.66667,-3.86667 0.39987,-4.39909 -1.4668,-3.73242 -1.4662,0.53339 -2.13281,0.13268 -2.13281,-1.33399 0,-1.2 -0.6668,-2.13281 -1.4668,-2.13281 -0.8,0 -1.06653,1.46576 -0.5332,3.73242 0.53333,2.66667 -0.40066,6 -3.33398,12 -2.13335,4.4 -4,8.66732 -4,9.33399 0,1.46666 -8.13308,5.59961 -11.06641,5.59961 -1.2,0 -2.39883,0.80156 -2.79883,1.60156 -0.53333,0.93333 -0.53476,-0.40026 -0.13476,-2.9336 0.93332,-6.4 -1.06524,-3.6013 -3.86524,5.33204 -4.13333,13.06666 -15.20144,27.19987 -30.13476,38.5332 -3.33335,2.53333 -8.66667,7.20039 -12,10.40039 -3.33335,3.06667 -6.79961,5.73437 -7.59961,5.73437 -0.93334,0 -1.73243,0.53256 -1.73243,1.19922 0,0.53334 -2.66666,1.86746 -6,2.80078 -5.2,1.46668 -6.80039,1.33204 -12.40039,-0.66796 -3.46666,-1.33334 -8.13371,-3.99857 -10.40039,-5.86524 -2.4,-1.86667 -6,-4.80039 -8,-6.40039 -11.46665,-8.8 -26.53411,-25.46654 -34.80078,-38.5332 -1.3333,-2.13334 -1.46549,-1.86719 -0.79883,2.13281 0.8,4.26667 0.66602,4.53411 -1.33398,2.80078 -1.2,-0.93333 -2.26563,-3.46823 -2.26563,-5.60156 0,-2.66667 -1.20156,-4.93164 -3.60156,-6.93164 -9.199653,-7.46667 -24.398436,-26.93503 -24.398436,-31.06836 0,-0.93333 -0.933333,-3.6 -2,-6 z m 193.132813,5.95507 c -0.0432,-0.003 -0.0664,0.0116 -0.0664,0.0449 -1.2,4.8 -0.79974,7.73307 0.9336,7.0664 1.2,-0.4 1.86666,0.26771 2,1.73438 0,2.13333 0.26679,2.00013 1.46679,-0.53321 1.33334,-2.53333 1.06602,-3.6 -1.33398,-6 -1.4,-1.4 -2.6974,-2.29062 -3,-2.3125 z m -90.11914,0.625 c -0.19824,-0.0125 -0.37995,0.48659 -0.61328,1.41993 -0.4,1.46666 -0.13399,4.93385 0.66601,7.86718 0.93334,4 0.80026,5.86745 -1.0664,8.80078 -3.06667,5.2 -2.6668,8.13282 0.5332,4.13282 2.8,-3.2 3.33346,-11.20013 1.4668,-19.4668 -0.45,-1.875 -0.73145,-2.73779 -0.98633,-2.75391 z M 252.93359,208 c -0.53333,0 -2.13437,2.53294 -3.73437,5.59961 -1.6,3.2 -3.33189,7.46771 -3.86524,9.73437 -0.53333,2.13334 -1.46665,5.19935 -2,6.66602 -0.53333,1.46667 1.33335,-0.93399 4,-5.33398 4.4,-7.06668 7.59961,-16.66602 5.59961,-16.66602 z m -78.89062,43.99414 C 167.05776,252.0493 160,252.53191 160,253.33398 c 0,0.66667 0.39974,1.33204 1.06641,1.33204 22.4,1.2 32.13281,0.40143 26.13281,-1.86524 -1.35,-0.5 -5.51172,-0.75703 -10.1875,-0.80469 -0.97412,-0.01 -1.97086,-0.01 -2.96875,-0.002 z"
          //transform="translate(0.000000,247.000000) scale(0.100000,-0.100000)"
          //transform="matrix(7.4999998,0,0,-7.4999998,0,2470)"
          fill="none"
          stroke="white"
          strokeWidth="1"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export default Loader;
