import React from "react";
import {
  ImageContainer,
  LoaderContainer,
  NameContainer,
  SpinnerContainer,
} from "./Loader.Styles";
import me from "../../resources/images/me.png";

const Loader = () => {
  return (
    <LoaderContainer>
      <ImageContainer>
        <img src={me} />
      </ImageContainer>
      <NameContainer>Anoop Thiparala</NameContainer>
      <SpinnerContainer>
        <div className="loadingio-spinner-spin-vsrxwg2jhrh">
          <div className="ldio-ueyahqym8tm">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </SpinnerContainer>
    </LoaderContainer>
  );
};

export default Loader;
