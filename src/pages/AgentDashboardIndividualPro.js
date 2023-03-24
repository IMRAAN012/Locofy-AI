import React, { useState } from "react";
import Feedback from "../components/Feedback";
import styles from "./AgentDashboardIndividualPro.module.css";

const AgentDashboardIndividualPro = () => {
  return (
    <div className={styles.agentDashboardIndividualPro}>
      <div className={styles.lastUpdated17012022Parent}>
        <div className={styles.lastUpdated17012022Container}>
          <span className={styles.lastUpdated}>{`Last Updated:   `}</span>
          <span className={styles.span}>17-01-2022</span>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.unpublishedProperties}>
            Unpublished Properties
          </div>
          <img
            className={styles.groupItem}
            alt=""
            src="/group-1000000826.svg"
          />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.propertyName}>Property Name</div>
            <div className={styles.s}>S#</div>
            <div className={styles.category}>Category</div>
            <div className={styles.creationDate}>Creation Date</div>
            <div className={styles.actions}>Actions</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div}>01</div>
          <div className={styles.theNewCity}>The New City Plots</div>
          <div className={styles.plots}>Plots</div>
          <div className={styles.june2022}>15-June-2022</div>
          <div className={styles.groupChild1} />
          <div className={styles.publishWrapper}>
            <div className={styles.publish}>Publish</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.div}>02</div>
          <div className={styles.theNewCity}>The New City Plots</div>
          <div className={styles.plots}>Plots</div>
          <div className={styles.june2022}>15-June-2022</div>
          <div className={styles.groupChild1} />
          <div className={styles.publishWrapper}>
            <div className={styles.publish}>Publish</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild4} />
        <img className={styles.vectorIcon} alt="" src="/vector-360.svg" />
      </div>
      <div className={styles.agentDashboardIndividualProChild} />
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild5} />
        <img
          className={styles.iconlyboldarrowDown3}
          alt=""
          src="/iconlyboldarrow--down-3.svg"
        />
        <img
          className={styles.calendarDuotoneIcon}
          alt=""
          src="/calendar-duotone.svg"
        />
        <div className={styles.currentWeek}>Current Week</div>
      </div>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.headerInner}>
          <div className={styles.searchBarParent}>
            <div className={styles.searchBar}>
              <div className={styles.searchParent}>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.searchHere}>Search here</div>
              </div>
            </div>
            <div className={styles.instanceWrapper}>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-1000001473.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.headerNotification}>
          <div className={styles.iconlylightOutlinenotificatParent}>
            <img
              className={styles.iconlylightOutlinenotificat}
              alt=""
              src="/iconlylightoutlinenotification.svg"
            />
            <div className={styles.justListedContainer}>0</div>
          </div>
          <div className={styles.kgWrapper}>
            <div className={styles.kg}>KG</div>
          </div>
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.newsnews}>
          <div className={styles.headerInner}>
            <img className={styles.home2Icon} alt="" src="/home2.svg" />
          </div>
          <div className={styles.justListed43KnowlesAvenuWrapper}>
            <div className={styles.justListedContainer}>
              <span>Just Listed</span>
              <span className={styles.knowlesAvenueL}>
                {" "}
                - 43 Knowles Avenue l North Bondi
              </span>
            </div>
          </div>
        </div>
        <div className={styles.newsnews1}>
          <div className={styles.headerInner}>
            <img className={styles.home2Icon} alt="" src="/home21.svg" />
          </div>
          <div className={styles.justListed43KnowlesAvenuWrapper}>
            <div className={styles.justListedContainer}>
              <span>Sold</span>
              <span className={styles.knowlesAvenueL}>
                - 2 Hardy Street l Dover Heights ($5,210,195)
              </span>
            </div>
          </div>
        </div>
        <div className={styles.newsnews2}>
          <div className={styles.headerInner}>
            <img className={styles.home2Icon2} alt="" src="/home22.svg" />
          </div>
          <div className={styles.justListed43KnowlesAvenuWrapper}>
            <div className={styles.justListedContainer}>
              <span>Offer Received</span>
              <span className={styles.warnersAvanueL}>
                {" "}
                - 1/12 Warners Avanue l Bondi Beach (1,050,000)
              </span>
            </div>
          </div>
        </div>
        <div className={styles.newsnews3}>
          <div className={styles.headerInner}>
            <img className={styles.home2Icon} alt="" src="/home21.svg" />
          </div>
          <div className={styles.justListed43KnowlesAvenuWrapper}>
            <div className={styles.justListedContainer}>
              <span>Sold</span>
              <span className={styles.knowlesAvenueL}>
                - 2 Hardy Street l Dover Heights ($5,210,195)
              </span>
            </div>
          </div>
        </div>
        <div className={styles.newsnews4}>
          <div className={styles.headerInner}>
            <img className={styles.home2Icon2} alt="" src="/home22.svg" />
          </div>
          <div className={styles.justListed43KnowlesAvenuWrapper}>
            <div className={styles.justListedContainer}>
              <span>Offer Received</span>
              <span className={styles.warnersAvanueL}>
                {" "}
                - 1/12 Warners Avanue l Bondi Beach (1,050,000)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leftNavigation}>
        <div className={styles.leftnav}>
          <div className={styles.frameParent}>
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow}>
                <div className={styles.iconlylightarrowRight2Wrapper}>
                  <img
                    className={styles.iconlylightarrowRight2}
                    alt=""
                    src="/iconlylightarrow--right-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-1000001414.svg"
                />
              </div>
              <div className={styles.iconlylightOutlinemessageParent}>
                <img
                  className={styles.iconlylightOutlinemessage}
                  alt=""
                  src="/iconlylightoutlinemessage.svg"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-4.svg"
                />
              </div>
              <div className={styles.iconlylightOutlinemessageParent}>
                <img
                  className={styles.iconlylightOutlinemessage}
                  alt=""
                  src="/iconlylightoutlinepaper.svg"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-5.svg"
                />
              </div>
              <div className={styles.iconlylightOutlinemessageParent}>
                <img
                  className={styles.iconlylightOutlinemessage}
                  alt=""
                  src="/iconlylightoutline3-user.svg"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-6.svg"
                />
              </div>
              <div className={styles.iconlylightOutlinemessageParent}>
                <img
                  className={styles.iconlylightOutlinemessage}
                  alt=""
                  src="/iconlylightoutlineactivity.svg"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/ellipse-7.svg"
                />
              </div>
              <img
                className={styles.realEstate1Icon}
                alt=""
                src="/realestate-1.svg"
              />
            </div>
          </div>
          <div className={styles.groupParent}>
            <img
              className={styles.groupIcon}
              alt=""
              src="/group-1000001411.svg"
            />
            <img
              className={styles.frameChild3}
              alt=""
              src="/group-1000001412.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.grid} />
      <div className={styles.frameContainer}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.iconlylightOutlinelocationParent}>
                  <img
                    className={styles.iconlylightOutlinelocation}
                    alt=""
                    src="/iconlylightoutlinelocation.svg"
                  />
                  <div className={styles.owenStreetNorth}>
                    56 Owen Street, North Bondi
                  </div>
                </div>
                <img
                  className={styles.iconlyboldarrowDown2}
                  alt=""
                  src="/iconlyboldarrow--down-2.svg"
                />
              </div>
              <img
                className={styles.tagArrow}
                alt=""
                src="/group-1000000956.svg"
              />
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.groupContainer}>
                <img
                  className={styles.tagArrow}
                  alt=""
                  src="/group-1000001442.svg"
                />
                <div className={styles.justListedContainer}>12 watching</div>
              </div>
              <div className={styles.lastSeenTagParent}>
                <div className={styles.lastSeenTag}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.lastSeenBy}>Last seen by</div>
                </div>
                <div className={styles.lastSeenTag1}>
                  <img
                    className={styles.invite1Icon}
                    alt=""
                    src="/invite1.svg"
                  />
                  <div className={styles.lastSeenBy}>Invite People</div>
                </div>
                <div className={styles.lastSeenTag2}>
                  <img
                    className={styles.invite1Icon}
                    alt=""
                    src="/download1.svg"
                  />
                  <div className={styles.lastSeenBy}>Download Report</div>
                </div>
              </div>
              <img
                className={styles.invite1Icon}
                alt=""
                src="/setting-fill.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.yourStatusIconParent}>
              <img
                className={styles.yourStatusIcon}
                alt=""
                src="/your-status-icon.svg"
              />
              <div className={styles.justListedContainer}>
                <span className={styles.lastUpdated}>{`Status: `}</span>
                <span>Live (14 Days)</span>
              </div>
            </div>
            <div className={styles.instanceParent}>
              <div className={styles.frameParent7}>
                <div className={styles.statusIconParent}>
                  <div className={styles.statusIcon}>
                    <div className={styles.statusIconChild} />
                    <img
                      className={styles.home1Icon}
                      alt=""
                      src="/home-1.svg"
                    />
                  </div>
                  <div className={styles.listings}>Listings</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.justListedContainer}>45</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.statusIconParent}>
                  <img
                    className={styles.statusIcon}
                    alt=""
                    src="/status-icon.svg"
                  />
                  <div className={styles.listings}>Appraisals</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.justListedContainer}>45</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.statusIconParent}>
                  <img
                    className={styles.statusIcon}
                    alt=""
                    src="/status-icon1.svg"
                  />
                  <div className={styles.listings}>Watch List</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.justListedContainer}>45</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.instanceGroup}>
              <div className={styles.frameParent7}>
                <div className={styles.statusIconParent}>
                  <div className={styles.inspected}>
                    <img className={styles.userIcon} alt="" src="/3-user.svg" />
                  </div>
                  <div className={styles.listings3}>Buyers Inspected</div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.justListedContainer}>45</div>
                  <img
                    className={styles.stateArrowIcon}
                    alt=""
                    src="/state-arrow.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.statusIconParent}>
                  <div className={styles.inspected1}>
                    <img
                      className={styles.interestedIcon}
                      alt=""
                      src="/interested.svg"
                    />
                  </div>
                  <div className={styles.listings3}>Interested Parties</div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.justListedContainer}>45</div>
                  <img
                    className={styles.stateArrowIcon}
                    alt=""
                    src="/state-arrow1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.statusIconParent}>
                  <div className={styles.inspected2}>
                    <img
                      className={styles.offersIcon}
                      alt=""
                      src="/offers.svg"
                    />
                  </div>
                  <div className={styles.listings3}>Offers</div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.justListedContainer}>45</div>
                  <img
                    className={styles.stateArrowIcon}
                    alt=""
                    src="/state-arrow2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent13}>
                <div className={styles.instanceContainer}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent14}>
                      <div className={styles.parent4}>
                        <div className={styles.div9}>8</div>
                        <div className={styles.variation}>Week 2</div>
                      </div>
                      <div className={styles.frameParent15}>
                        <div className={styles.parent5}>
                          <div className={styles.div10}>50%</div>
                          <img
                            className={styles.stateArrowIcon}
                            alt=""
                            src="/vector3.svg"
                          />
                        </div>
                        <div className={styles.variation}>Variation</div>
                      </div>
                      <div className={styles.parent4}>
                        <div className={styles.div9}>4</div>
                        <div className={styles.variation}>Market Avg</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent14}>
                      <div className={styles.parent4}>
                        <div className={styles.div9}>45</div>
                        <div className={styles.variation}>Week 2</div>
                      </div>
                      <div className={styles.frameParent15}>
                        <div className={styles.parent5}>
                          <div className={styles.div10}>50%</div>
                          <img
                            className={styles.stateArrowIcon}
                            alt=""
                            src="/vector3.svg"
                          />
                        </div>
                        <div className={styles.variation}>Variation</div>
                      </div>
                      <div className={styles.parent4}>
                        <div className={styles.div9}>22</div>
                        <div className={styles.variation}>Market Avg</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.totalConversions}>
                  <div className={styles.owenStreetNorth}>
                    Total Conversions
                  </div>
                  <div className={styles.frameParent18}>
                    <div className={styles.viewsParent}>
                      <div className={styles.views}>Views</div>
                      <div className={styles.div15}>359</div>
                    </div>
                    <div className={styles.enquiryParent}>
                      <div className={styles.views}>Enquiry</div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressBarChild} />
                        <div className={styles.progressBarItem} />
                      </div>
                    </div>
                    <div className={styles.enquiryParent}>
                      <div className={styles.views}>Inspected</div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressBarChild} />
                        <div className={styles.progressBarChild1} />
                      </div>
                    </div>
                    <div className={styles.enquiryParent}>
                      <div className={styles.views}>Interested</div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressBarChild} />
                        <div className={styles.progressBarChild3} />
                      </div>
                    </div>
                    <div className={styles.enquiryParent}>
                      <div className={styles.views}>Offers</div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressBarChild} />
                        <div className={styles.progressBarChild5} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.totalViews}>
                  <div className={styles.owenStreetNorth}>Total Views</div>
                  <div className={styles.frameParent19}>
                    <div className={styles.parent5}>
                      <div className={styles.parent10}>
                        <div className={styles.justListedContainer}>600</div>
                        <div className={styles.justListedContainer}>500</div>
                        <div className={styles.justListedContainer}>400</div>
                        <div className={styles.justListedContainer}>300</div>
                        <div className={styles.justListedContainer}>200</div>
                        <div className={styles.justListedContainer}>100</div>
                      </div>
                      <img
                        className={styles.frameChild6}
                        alt=""
                        src="/group-1000001437.svg"
                      />
                    </div>
                    <div className={styles.junParent}>
                      <div className={styles.justListedContainer}>12 Jun</div>
                      <div className={styles.justListedContainer}>13 Jun</div>
                      <div className={styles.justListedContainer}>14 Jun</div>
                      <div className={styles.justListedContainer}>15 Jun</div>
                      <div className={styles.justListedContainer}>16 Jun</div>
                      <div className={styles.justListedContainer}>17 Jun</div>
                      <div className={styles.justListedContainer}>18 Jun</div>
                      <div className={styles.justListedContainer}>19 Jun</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.forcast}>
            <div className={styles.frameParent21}>
              <div className={styles.forcastParent}>
                <img className={styles.forcastIcon} alt="" src="/forcast.svg" />
                <div className={styles.owenStreetNorth}>Forcast</div>
              </div>
              <div className={styles.tagArrow}>
                <img
                  className={styles.tagArrowChild}
                  alt=""
                  src="/vector-3601.svg"
                />
                <div className={styles.tagArrowItem} />
              </div>
            </div>
            <div className={styles.buyerInspectedForecastParent}>
              <div className={styles.buyerInspectedForecast}>
                <div className={styles.buyersInspectedForecast}>
                  Buyers Inspected Forecast
                </div>
                <div className={styles.buyerInspectedForecastInner}>
                  <div className={styles.frameParent22}>
                    <div className={styles.parent4}>
                      <div className={styles.div9}>8</div>
                      <div className={styles.week22}>Week 2</div>
                    </div>
                    <div className={styles.frameParent15}>
                      <div className={styles.parent5}>
                        <div className={styles.div10}>50%</div>
                        <img
                          className={styles.stateArrowIcon}
                          alt=""
                          src="/vector4.svg"
                        />
                      </div>
                      <div className={styles.week22}>Variation</div>
                    </div>
                    <div className={styles.parent4}>
                      <div className={styles.div9}>4</div>
                      <div className={styles.week22}>Market Avg</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent24}>
                  <div className={styles.iconlyboldarrowDown3Parent}>
                    <img
                      className={styles.iconlyboldarrowDown31}
                      alt=""
                      src="/iconlyboldarrow--down-31.svg"
                    />
                    <div className={styles.rectangleParent3}>
                      <div className={styles.groupChild6} />
                      <div className={styles.groupChild7} />
                      <div className={styles.groupChild8} />
                    </div>
                  </div>
                  <div className={styles.justListedContainer}>
                    <p className={styles.theAccuracyOfThisEstimate}>
                      <span>
                        <span className={styles.theAccuracyOf}>
                          The accuracy of this estimate range
                        </span>
                      </span>
                    </p>
                    <p className={styles.theAccuracyOfThisEstimate}>
                      <span>
                        <span
                          className={styles.theAccuracyOf}
                        >{`is rate `}</span>
                        <span className={styles.medium}>Medium.</span>
                        <span className={styles.learnMore}>{` `}</span>
                      </span>
                      <span className={styles.learnMore}>
                        <span className={styles.learnMore1}>Learn more.</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.buyerInspectedForecast}>
                <div className={styles.buyersInspectedForecast}>
                  Buyers Inspected Forecast
                </div>
                <div className={styles.buyerInspectedForecastInner}>
                  <div className={styles.frameParent22}>
                    <div className={styles.parent4}>
                      <div className={styles.div9}>8</div>
                      <div className={styles.week22}>Week 2</div>
                    </div>
                    <div className={styles.frameParent15}>
                      <div className={styles.parent5}>
                        <div className={styles.div10}>50%</div>
                        <img
                          className={styles.stateArrowIcon}
                          alt=""
                          src="/vector5.svg"
                        />
                      </div>
                      <div className={styles.week22}>Variation</div>
                    </div>
                    <div className={styles.parent4}>
                      <div className={styles.div9}>4</div>
                      <div className={styles.week22}>Market Avg</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent24}>
                  <div className={styles.iconlyboldarrowDown3Parent}>
                    <img
                      className={styles.iconlyboldarrowDown31}
                      alt=""
                      src="/iconlyboldarrow--down-32.svg"
                    />
                    <div className={styles.rectangleParent3}>
                      <div className={styles.groupChild6} />
                      <div className={styles.groupChild7} />
                      <div className={styles.groupChild8} />
                    </div>
                  </div>
                  <div className={styles.justListedContainer}>
                    <p className={styles.theAccuracyOfThisEstimate}>
                      <span>
                        <span className={styles.theAccuracyOf}>
                          The accuracy of this estimate range
                        </span>
                      </span>
                    </p>
                    <p className={styles.theAccuracyOfThisEstimate}>
                      <span>
                        <span
                          className={styles.theAccuracyOf}
                        >{`is rate `}</span>
                        <span className={styles.medium}>Medium.</span>
                        <span className={styles.learnMore}>{` `}</span>
                      </span>
                      <span className={styles.learnMore}>
                        <span className={styles.learnMore1}>Learn more.</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.buyerInspectedForecast}>
                <div className={styles.buyersInspectedForecast}>
                  Buyers Inspected Forecast
                </div>
                <div className={styles.buyerInspectedForecastInner}>
                  <div className={styles.frameParent22}>
                    <div className={styles.parent4}>
                      <div className={styles.div9}>8</div>
                      <div className={styles.week22}>Week 2</div>
                    </div>
                    <div className={styles.frameParent15}>
                      <div className={styles.parent5}>
                        <div className={styles.div10}>50%</div>
                        <img
                          className={styles.stateArrowIcon}
                          alt=""
                          src="/vector6.svg"
                        />
                      </div>
                      <div className={styles.week22}>Variation</div>
                    </div>
                    <div className={styles.parent4}>
                      <div className={styles.div9}>4</div>
                      <div className={styles.week22}>Market Avg</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent24}>
                  <div className={styles.iconlyboldarrowDown3Parent}>
                    <img
                      className={styles.iconlyboldarrowDown31}
                      alt=""
                      src="/iconlyboldarrow--down-33.svg"
                    />
                    <div className={styles.rectangleParent3}>
                      <div className={styles.groupChild6} />
                      <div className={styles.groupChild7} />
                      <div className={styles.groupChild8} />
                    </div>
                  </div>
                  <div className={styles.justListedContainer}>
                    <p className={styles.theAccuracyOfThisEstimate}>
                      <span>
                        <span className={styles.theAccuracyOf}>
                          The accuracy of this estimate range
                        </span>
                      </span>
                    </p>
                    <p className={styles.theAccuracyOfThisEstimate}>
                      <span>
                        <span
                          className={styles.theAccuracyOf}
                        >{`is rate `}</span>
                        <span className={styles.medium}>Medium.</span>
                        <span className={styles.learnMore}>{` `}</span>
                      </span>
                      <span className={styles.learnMore}>
                        <span className={styles.learnMore1}>Learn more.</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.buyerInspectedForecast3}>
                <div className={styles.pricePrediction}>Price Prediction</div>
                <div className={styles.frameParent31}>
                  <div className={styles.toParent}>
                    <div className={styles.justListedContainer}>To</div>
                    <div className={styles.parent20}>
                      <div className={styles.owenStreetNorth}>2,250,000</div>
                      <div className={styles.div32}>2,350,000</div>
                    </div>
                  </div>
                  <div className={styles.frameParent32}>
                    <div className={styles.iconlyboldarrowDown3Parent}>
                      <img
                        className={styles.iconlyboldarrowDown31}
                        alt=""
                        src="/iconlyboldarrow--down-34.svg"
                      />
                      <div className={styles.rectangleParent3}>
                        <div className={styles.groupChild6} />
                        <div className={styles.groupChild7} />
                        <div className={styles.groupChild8} />
                      </div>
                    </div>
                    <div className={styles.justListedContainer}>
                      <p className={styles.theAccuracyOfThisEstimate}>
                        <span>
                          <span className={styles.theAccuracyOf}>
                            The accuracy of this estimate range
                          </span>
                        </span>
                      </p>
                      <p className={styles.theAccuracyOfThisEstimate}>
                        <span>
                          <span
                            className={styles.theAccuracyOf}
                          >{`is rate `}</span>
                          <span className={styles.medium}>Medium.</span>
                          <span className={styles.learnMore}>{` `}</span>
                        </span>
                        <span className={styles.learnMore}>
                          <span className={styles.learnMore1}>Learn more.</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent33}>
            <div className={styles.frameParent34}>
              <div className={styles.frameParent3}>
                <img
                  className={styles.forcastIcon}
                  alt=""
                  src="/group-1000001380.svg"
                />
                <div className={styles.owenStreetNorth}>Vendor Status</div>
              </div>
              <div className={styles.lastSeenTagGroup}>
                <div className={styles.lastSeenTag3}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                  <div className={styles.lastSeenBy}>Last seen by</div>
                </div>
                <img
                  className={styles.frameChild8}
                  alt=""
                  src="/group-1000001381.svg"
                />
                <div className={styles.frameChild8}>
                  <div className={styles.tagArrowItem} />
                  <img
                    className={styles.iconlylightcall}
                    alt=""
                    src="/iconlylightcall.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent35}>
              <div className={styles.alert11Parent}>
                <img className={styles.alert11} alt="" src="/alert-1-1.svg" />
                <div className={styles.counterOfferSubmitted}>
                  Counter offer submitted
                </div>
              </div>
              <div className={styles.parent21}>
                <div className={styles.div33}>$2,350,000</div>
                <div className={styles.lastUpdated17012022Container1}>
                  <span>Last Updated:</span>
                  <span className={styles.knowlesAvenueL}> 17-01-2022</span>
                </div>
              </div>
              <div className={styles.initialTrueEstimateParent}>
                <div className={styles.justListedContainer}>
                  Initial True Estimate
                </div>
                <div className={styles.div34}>$1,100,000 - $1210,000</div>
              </div>
              <div className={styles.actionParent}>
                <div className={styles.action}>Action</div>
                <img
                  className={styles.arrowDown3}
                  alt=""
                  src="/arrow--down-3.svg"
                />
              </div>
            </div>
          </div>
          <Feedback />















        </div>
        <div className={styles.liveOfferStatusParent}>
          <div className={styles.liveOfferStatus}>
            <div className={styles.frameParent36}>
              <div className={styles.frameParent37}>
                <div className={styles.liveOfferStatusWrapper}>
                  <div className={styles.liveOfferStatus1}>
                    Live Offer Status
                  </div>
                </div>
                <div className={styles.frameParent38}>
                  <div className={styles.parent4}>
                    <div className={styles.parent22}>
                      <div className={styles.div35}>$2,250,000</div>
                      <img
                        className={styles.groupChild18}
                        alt=""
                        src="/ellipse-151.svg"
                      />
                    </div>
                    <div className={styles.lastUpdated17012022Container2}>
                      <span>Last Updated:</span>
                      <span className={styles.knowlesAvenueL}> 17-01-2022</span>
                    </div>
                  </div>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon2}
                      alt=""
                      src="/mask-group2@2x.png"
                    />
                    <div className={styles.kielGlass}>Kiel Glass</div>
                  </div>
                </div>
              </div>
              <div className={styles.counterOfferSubmittedWrapper}>
                <div className={styles.d}>Counter offer submitted</div>
              </div>
            </div>
            <div className={styles.frameParent39}>
              <div className={styles.frameParent40}>
                <div className={styles.clockHistoryParent}>
                  <img
                    className={styles.clockHistoryIcon}
                    alt=""
                    src="/clockhistory.svg"
                  />
                  <div className={styles.kg}>Countdown Timer</div>
                </div>
                <div className={styles.actionGroup}>
                  <div className={styles.action1}>Action</div>
                  <img
                    className={styles.arrowDown3}
                    alt=""
                    src="/arrow--down-21.svg"
                  />
                </div>
              </div>
              <div className={styles.stageParent}>
                <div className={styles.stage}>
                  <div className={styles.stage2}>STAGE 2 - FINAL OFFERS</div>
                </div>
                <div className={styles.parent23}>
                  <div className={styles.div36}>11:06:11:09</div>
                  <div className={styles.frameParent41}>
                    <div className={styles.dWrapper}>
                      <div className={styles.d}>D</div>
                    </div>
                    <div className={styles.hWrapper}>
                      <div className={styles.d}>H</div>
                    </div>
                    <div className={styles.hWrapper}>
                      <div className={styles.d}>M</div>
                    </div>
                    <div className={styles.hWrapper}>
                      <div className={styles.d}>S</div>
                    </div>
                  </div>
                </div>
                <div className={styles.timerBarWrapper}>
                  <div className={styles.timerBar}>
                    <div className={styles.timerBarChild} />
                    <div className={styles.timerBarItem} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.instanceParent2}>
              <div className={styles.activityParent}>
                <div className={styles.owenStreetNorth}>Activity</div>
                <img
                  className={styles.activityFeedFilter}
                  alt=""
                  src="/activity-feed-filter.svg"
                />
              </div>
              <div className={styles.today}>Today</div>
            </div>
            <div className={styles.frameParent42}>
              <div className={styles.frameParent43}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild9}
                        alt=""
                        src="/group-1000001431.svg"
                      />
                      <img
                        className={styles.frameChild10}
                        alt=""
                        src="/vector-361.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.frameChild11}
                        alt=""
                        src="/vector-362.svg"
                      />
                      <img
                        className={styles.frameChild9}
                        alt=""
                        src="/group-10000014311.svg"
                      />
                      <img
                        className={styles.frameChild13}
                        alt=""
                        src="/vector-3611.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild11}
                        alt=""
                        src="/vector-3621.svg"
                      />
                      <img
                        className={styles.frameChild9}
                        alt=""
                        src="/group-10000014312.svg"
                      />
                      <img
                        className={styles.frameChild13}
                        alt=""
                        src="/vector-3612.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild11}
                        alt=""
                        src="/vector-3622.svg"
                      />
                      <img
                        className={styles.frameChild9}
                        alt=""
                        src="/group-10000014313.svg"
                      />
                      <img
                        className={styles.frameChild13}
                        alt=""
                        src="/vector-3613.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper11}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild20}
                        alt=""
                        src="/vector-3623.svg"
                      />
                      <img
                        className={styles.frameChild21}
                        alt=""
                        src="/group-10000014314.svg"
                      />
                      <img
                        className={styles.frameChild22}
                        alt=""
                        src="/vector-3614.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper11}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild20}
                        alt=""
                        src="/vector-3623.svg"
                      />
                      <img
                        className={styles.frameChild21}
                        alt=""
                        src="/group-10000014315.svg"
                      />
                      <img
                        className={styles.frameChild22}
                        alt=""
                        src="/vector-3614.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper11}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild20}
                        alt=""
                        src="/vector-3623.svg"
                      />
                      <img
                        className={styles.frameChild21}
                        alt=""
                        src="/group-10000014316.svg"
                      />
                      <img
                        className={styles.frameChild22}
                        alt=""
                        src="/vector-3614.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.instanceParent3}>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon3}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingWrapper}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon3}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingContainer}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon3}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingContainer}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon3}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingContainer}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon3}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingContainer}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon2}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingContainer}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.maskGroupGroup}>
                  <img
                    className={styles.maskGroupIcon2}
                    alt=""
                    src="/mask-group3@2x.png"
                  />
                  <div className={styles.frameParent44}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.jenniferAlanWrapper}>
                        <div className={styles.kg}>Jennifer Alan</div>
                      </div>
                      <div className={styles.viewedPropertyListingContainer}>
                        <div className={styles.justListedContainer}>
                          Viewed property listing
                        </div>
                      </div>
                    </div>
                    <div className={styles.pmWrapper}>
                      <div
                        className={styles.justListedContainer}
                      >{`2:12pm `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.messagingCard}>
            <div className={styles.magcard}>
              <div className={styles.messagheading}>
                <div className={styles.messaging}>Messaging</div>
              </div>
              <div className={styles.individualmsg}>
                <div className={styles.main}>
                  <div className={styles.img}>
                    <img
                      className={styles.imgChild}
                      alt=""
                      src="/rectangle-4092@2x.png"
                    />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.part1}>
                      <div className={styles.heading}>
                        <div className={styles.owenStreetNorth}>
                          Jasmine Sarel
                        </div>
                        <div className={styles.heyHowYou}>
                          Hey, how you doing?
                        </div>
                      </div>
                      <div className={styles.status1}>
                        <div className={styles.justListedContainer}>
                          <span>{`Last Seen: `}</span>
                          <span className={styles.mAgo}>6m ago</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.part2}>
                      <div className={styles.wrapper}>
                        <div className={styles.justListedContainer}>6</div>
                      </div>
                      <img
                        className={styles.forwardArrowIcon}
                        alt=""
                        src="/forward-arrow.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.grouptopics}>
                <div className={styles.groupsTopics}>{`Groups & Topics`}</div>
                <div className={styles.card1}>
                  <div className={styles.details1}>
                    <div className={styles.part11}>
                      <div className={styles.details11}>
                        <div className={styles.knowlesAvenueNorth}>
                          32 Knowles Avenue NORTH BO...
                        </div>
                        <div className={styles.lastActivityOnFeb3Wrapper}>
                          <div className={styles.justListedContainer}>
                            Last Activity : On Feb 3
                          </div>
                        </div>
                      </div>
                      <div className={styles.imgs}>
                        <img className={styles.dpsIcon} alt="" src="/dps.svg" />
                        <div className={styles.numbers}>
                          <div className={styles.div38}>+5</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.part21}>
                      <div className={styles.wrapper}>
                        <div className={styles.justListedContainer}>6</div>
                      </div>
                      <img
                        className={styles.forwardArrowIcon}
                        alt=""
                        src="/forward-arrow1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.details1}>
                    <div className={styles.details2}>
                      <div className={styles.details3}>
                        <div className={styles.owenStreetNorth}>
                          32 Knowles Avenue NORTH BO...
                        </div>
                        <div className={styles.lastActivityOnFeb3Wrapper}>
                          <div className={styles.justListedContainer}>
                            Last Activity : On Feb 3
                          </div>
                        </div>
                      </div>
                      <div className={styles.imgs}>
                        <img
                          className={styles.dpsIcon}
                          alt=""
                          src="/imgs.svg"
                        />
                        <div className={styles.numbers}>
                          <div className={styles.div38}>+5</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.part21}>
                      <div className={styles.wrapper}>
                        <div className={styles.justListedContainer}>6</div>
                      </div>
                      <img
                        className={styles.forwardArrowIcon}
                        alt=""
                        src="/forward-arrow1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboardIndividualPro;
