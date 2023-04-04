import { useRef, useState, HTMLAttributes } from "react";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    setPlay((prev) => !prev);

    if (play) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src="https://ik.imagekit.io/ltrteacsu/tr:w-2600/meal.mp4"
        controls={false}
        loop
        muted
      />

      <div className="absolute top-0 w-full h-full bg-black/70 z-20">
        <div className="flex justify-center  h-full items-center">
          <div
            className="flex justify-center items-center  w-20 h-20  sm:h-14 sm:w-14 rounded-full border border-deep-gray cursor-pointer"
            onClick={handleClick}
          >
            {play ? (
              <BsPauseFill style={{ width: "34px", height: "34px" }} />
            ) : (
              <BsFillPlayFill style={{ width: "34px", height: "34px" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
