import { introDataContent } from "@/components/IntroDataContent";
import { endIntroDataContent } from "@/components/IntroDataContent";
import Intro from "./Intro";
export function IntroDataContent({ introData }) {
    return (
      <>
        {introDataContent[introData] ? (
          <>
            {introDataContent[introData].title ? (
              <div className="text-center">
                <h2>{introDataContent[introData].title}</h2>
              </div>
            ) : null}
            <Intro
              txtone={introDataContent[introData].txtone}
              txttwo={introDataContent[introData].txttwo}
              txtthree={introDataContent[introData].txtthree}
              txtfour={introDataContent[introData].txtfour}
              txtfive={introDataContent[introData].txtfive}
            />
          </>
        ) : null}
      </>
    );
  }
 export function EndIntroDataContent({ introData }) {
    return (
      <>
        {endIntroDataContent[introData] ? (
          <>
            {endIntroDataContent[introData].title ? (
              <div className="text-center">
                <h2>{endIntroDataContent[introData].title}</h2>
              </div>
            ) : null}
            <Intro
              txtone={endIntroDataContent[introData].txtone}
              txttwo={endIntroDataContent[introData].txttwo}
              txtthree={endIntroDataContent[introData].txtthree}
              txtfour={endIntroDataContent[introData].txtfour}
              txtfive={endIntroDataContent[introData].txtfive}
            />
          </>
        ) : null}
      </>
    );
  }