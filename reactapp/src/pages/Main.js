import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
  Select,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <b className={styles.title}>Finance Sentiment Analyzer</b>
      <div className={styles.output}>
        <div className={styles.outputInner}>
          <div className={styles.titleWrapper}>
            <b className={styles.title1}>Output</b>
          </div>
        </div>
        <div className={styles.backgroundParent}>
          <div className={styles.background} />
          <div className={styles.finalAnalysis}>
            <b className={styles.positivenegative}>Positive</b>
            <div
              className={styles.description}
            >{`This post overall shows positive feedback. `}</div>
          </div>
          <div className={styles.general}>
            <div className={styles.comments}>
              <b className={styles.title2}>Comments</b>
              <b className={styles.b}>209</b>
            </div>
            <div className={styles.commentRatio}>
              <b className={styles.title3}>+/- Comments</b>
              <b className={styles.b1}>
                <span className={styles.txt}>
                  <span>89</span>
                  <span className={styles.span}>{` / `}</span>
                  <span className={styles.span1}>21</span>
                </span>
              </b>
            </div>
            <div className={styles.likesdislikes}>
              <b className={styles.title2}>Likes</b>
              <b className={styles.b}>89</b>
            </div>
          </div>
          <div className={styles.positiveAttributes}>
            <b className={styles.negativeAttributes}>Positive Attributes</b>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Happiness</b>
              <div className={styles.description1}>
                Overall percentage of comments that show happiness towards the
                sample.
              </div>
              <div className={styles.percentage}>90%</div>
            </div>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Satisfaction</b>
              <div className={styles.description1}>
                Overall percentage of comments that show satisfaction towards
                the sample.
              </div>
              <div className={styles.percentage}>25%</div>
            </div>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Contentment</b>
              <div className={styles.description1}>
                Overall percentage of comments that show contentment towards the
                sample.
              </div>
              <div className={styles.percentage}>40%</div>
            </div>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Interest</b>
              <div className={styles.description1}>
                Overall percentage of comments that show interest towards the
                sample.
              </div>
              <div className={styles.percentage}>75%</div>
            </div>
          </div>
          <div className={styles.positiveAttributes2}>
            <b className={styles.negativeAttributes}>Negative Attributes</b>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Anger</b>
              <div className={styles.description1}>
                Overall percentage of comments that show anger towards the
                sample.
              </div>
              <div className={styles.percentage}>5%</div>
            </div>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Fear</b>
              <div className={styles.description1}>
                Overall percentage of comments that show fear towards the
                sample.
              </div>
              <div className={styles.percentage}>7%</div>
            </div>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Sadness</b>
              <div className={styles.description1}>
                Overall percentage of comments that show sadness towards the
                sample.
              </div>
              <div className={styles.percentage}>40%</div>
            </div>
            <div className={styles.attribute0}>
              <b className={styles.title5}>Annoyance</b>
              <div className={styles.description1}>
                Overall percentage of comments that show annoyance towards the
                sample.
              </div>
              <div className={styles.percentage}>0%</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainInner}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.input}>
              <b className={styles.title13}>Input</b>
              <div className={styles.backgroundGroup}>
                <div className={styles.background1} />
                <div className={styles.analysisType}>
                  <div className={styles.analysisTypeWrapper}>
                    <div className={styles.analysisType1}>Analysis Type</div>
                  </div>
                  <Stack className={styles.dropdown}>
                    <Menu>
                      <MenuButton
                        w="670px"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        colorScheme="teal"
                      >
                        Dropdown
                      </MenuButton>
                      <MenuList>
                        <MenuItem value="Comments/Replies">
                          Comments/Replies
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Stack>
                  <div className={styles.question}>
                    <div className={styles.questionmarkicon1Wrapper}>
                      <img
                        className={styles.questionmarkicon1}
                        alt=""
                        src="/questionmarkicon-1@2x.png"
                      />
                    </div>
                  </div>
                  <Stack className={styles.selectoutline} w="324px">
                    <Select
                      variant="outline"
                      placeholder="Select"
                      backgroundColor="rgba(255, 255, 255, 0)"
                    >
                      <option value="Comments/Replies">Comments/Replies</option>
                    </Select>
                  </Stack>
                </div>
                <div className={styles.platform}>
                  <div className={styles.analysisTypeWrapper}>
                    <div className={styles.analysisType1}>Platform</div>
                  </div>
                  <div className={styles.dropdown1}>
                    <div className={styles.background2} />
                    <img
                      className={styles.twitterLogo1Icon}
                      alt=""
                      src="/twitterlogo-1@2x.png"
                    />
                    <div className={styles.twitter}>Twitter</div>
                    <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
                    <img
                      className={styles.arrowIcon1}
                      alt=""
                      src="/arrow1.svg"
                    />
                  </div>
                  <img
                    className={styles.questionIcon}
                    alt=""
                    src="/questionmarkicon-1@2x.png"
                  />
                  <Stack className={styles.selectoutline1} w="324px">
                    <Select
                      variant="outline"
                      placeholder="Select"
                      textColor="#000"
                      backgroundColor="#fff"
                      borderColor="#000"
                      focusBorderColor="#151515"
                    >
                      <option value="Twitter">Twitter</option>
                      <option value="Coming Soon!!">Coming Soon!!</option>
                    </Select>
                  </Stack>
                </div>
                <div className={styles.inputData}>
                  <div className={styles.analysisTypeWrapper}>
                    <div className={styles.analysisType1}>Input Data</div>
                  </div>
                  <input
                    className={styles.userInput}
                    type="text"
                    placeholder="Link (Leave blank for random)"
                  />
                  <img
                    className={styles.questionIcon1}
                    alt=""
                    src="/questionmarkicon-1@2x.png"
                  />
                </div>
                <button className={styles.analyze}>
                  <div className={styles.backgroundWrapper}>
                    <div className={styles.background3} />
                  </div>
                  <div className={styles.analyze1}>Analyze</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.asset11} alt="" src="/asset-1-1.svg" />
    </div>
  );
};

export default Main;
