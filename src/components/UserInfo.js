import React from "react";
import amy from "../images/avatars/image-amyrobson.png";
import julius from "../images/avatars/image-juliusomo.png";
import max from "../images/avatars/image-maxblagun.png";
import ramses from "../images/avatars/image-ramsesmiron.png";

export default function UserInfo(props) {
  function handleDefaultImages() {
    switch (props.user.image.png) {
      case "./images/avatars/image-amyrobson.png":
        return amy;
      case "./images/avatars/image-juliusomo.png":
        return julius;
      case "./images/avatars/image-maxblagun.png":
        return max;
      case "./images/avatars/image-ramsesmiron.png":
        return ramses;

      default:
        return props.user.image.png;
    }
  }
  return (
    <div>
      <img src={handleDefaultImages()} alt="avatar" />
      <p>{props.user.username}</p>
      <p>{props.date}</p>
    </div>
  );
}
