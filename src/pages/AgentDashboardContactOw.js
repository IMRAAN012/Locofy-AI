import React from "react";
import styles from "./AgentDashboardContactOw.module.css";

const AgentDashboardContactOw = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.agentDashboardContactOw}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.headerInner}>
          <input
            className={styles.frameChild}
            type="text"
            placeholder="Search here"
          />
        </div>
        <div className={styles.headerNotification}>
          <div className={styles.iconlylightOutlinenotificatParent}>
            <img
              className={styles.iconlylightOutlinenotificat}
              alt=""
              src="/iconlylightoutlinenotification.svg"
            />
            <div className={styles.div}>0</div>
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
            <div className={styles.div}>
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
            <div className={styles.div}>
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
            <div className={styles.div}>
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
            <div className={styles.div}>
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
            <div className={styles.div}>
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
      <div className={styles.bg}>
        <img className={styles.bgChild} alt="" src="/group-1000001446@2x.png" />
        <div className={styles.bgItem} />
      </div>
      <div className={styles.notesTasksFeedback}>
        <div className={styles.frameContainer}>
          <div className={styles.headerInner}>
            <div className={styles.notesTasks}>Notes | Tasks | Feedback</div>
          </div>
          <div className={styles.profileTask}>
            <div className={styles.profileTaskInner}>
              <div className={styles.frameParent1}>
                <div className={styles.profileWrapper}>
                  <div className={styles.profile}>
                    <div className={styles.profileInner}>
                      <div className={styles.groupContainer}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/group-1367.svg"
                        />
                        <div className={styles.maskGroup}>
                          <img
                            className={styles.zhekaBoychenkoVpktwytgk8eUnIcon}
                            alt=""
                            src="/zhekaboychenkovpktwytgk8eunsplash-4-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.keilGlass}>Keil Glass</div>
                  </div>
                </div>
                <div className={styles.address}>
                  <div className={styles.lineParent}>
                    <div className={styles.lineDiv} />
                    <div className={styles.frameChild4} />
                    <div className={styles.frameChild5} />
                  </div>
                  <div className={styles.iconlylightOutlinelocationParent}>
                    <img
                      className={styles.iconlylightOutlinelocation}
                      alt=""
                      src="/iconlylightoutlinelocation.svg"
                    />
                    <div className={styles.owenStreetNorth}>
                      56 Owen Street, North Bondi
                    </div>
                    <img
                      className={styles.iconlyboldarrowDown2}
                      alt=""
                      src="/iconlyboldarrow--down-2.svg"
                    />
                    <img
                      className={styles.frameChild6}
                      alt=""
                      src="/ellipse-153@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.instanceParent}>
              <img
                className={styles.frameChild7}
                alt=""
                src="/group-10000014461.svg"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.iconlylightcall}
                  alt=""
                  src="/iconlylightcall.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.tabsParent}>
            <div className={styles.justListed43KnowlesAvenuWrapper}>
              <div className={styles.notes}>
                <div className={styles.notes1}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.email}>Notes</div>
              </div>
              <div className={styles.activityTab}>
                <div className={styles.notes1}>
                  <img
                    className={styles.notes1Child}
                    alt=""
                    src="/group-1000000930.svg"
                  />
                </div>
                <div className={styles.div}>Activity</div>
              </div>
              <button className={styles.call}>
                <div className={styles.notes12}>
                  <img
                    className={styles.iconlylightcall1}
                    alt=""
                    src="/iconlylightcall1.svg"
                  />
                </div>
                <div className={styles.call1}>Call</div>
              </button>
              <div className={styles.call2}>
                <div className={styles.notes13}>
                  <img className={styles.mailIcon} alt="" src="/mail.svg" />
                </div>
                <div className={styles.email}>Email</div>
              </div>
            </div>
            <button className={styles.vendorReport}>
              <div className={styles.vendorReport1}>Vendor Report</div>
              <img
                className={styles.rectangleContainer}
                alt=""
                src="/iconlyboldarrow--down-3.svg"
              />
            </button>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.timeWrapper}>
              <img className={styles.timeIcon} alt="" src="/time.svg" />
            </div>
            <div className={styles.inputFeild}>
              <div className={styles.div}>22 Oct 2022</div>
            </div>
            <div className={styles.inputFeild1}>
              <div className={styles.div}>h:mm PM</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>-</div>
            </div>
            <div className={styles.inputFeild1}>
              <div className={styles.div}>h:mm PM</div>
            </div>
            <div className={styles.date}>
              <div className={styles.div}>22 Oct 2022</div>
            </div>
            <div className={styles.externalWrapper}>
              <div className={styles.kg}>#External</div>
            </div>
            <div className={styles.insertTemplate}>
              <div className={styles.div}>+ Insert Template Text</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.radiobuttonWrapper}>
              <div className={styles.radiobutton}>
                <div className={styles.defaultWrapper}>
                  <div className={styles.default}>Mark as done</div>
                </div>
                <div className={styles.radiobuttonChild} />
              </div>
            </div>
            <div className={styles.radiobuttonContainer}>
              <div className={styles.radiobutton}>
                <div className={styles.defaultContainer}>
                  <div className={styles.default}>Schedule follow up?</div>
                </div>
                <div className={styles.radiobuttonChild} />
              </div>
            </div>
          </div>
          <button className={styles.addNoteWrapper}>
            <div className={styles.addNote}>Add Note</div>
          </button>
        </div>
        <div className={styles.groupParent1}>
          <button className={styles.rectangleGroup}>
            <button className={styles.groupItem} />
            <div className={styles.all}>All</div>
          </button>
          <div className={styles.div}>Internal</div>
          <div className={styles.div}>External</div>
        </div>
        <div className={styles.internalNotes}>
          <div className={styles.frameParent6}>
            <div className={styles.jun453pmParent}>
              <div className={styles.div}>17 Jun (4:53pm)</div>
              <div className={styles.addedByKiel}>Added by Kiel Glass</div>
              <div className={styles.iconlylightOutlinelocationGroup}>
                <img
                  className={styles.timeIcon}
                  alt=""
                  src="/iconlylightoutlinelocation1.svg"
                />
                <div className={styles.owenStreetNorth}>
                  56 Owen Street, North Bondi
                </div>
              </div>
            </div>
            <div className={styles.iconlylightOutlinemessageParent}>
              <img
                className={styles.rectangleContainer}
                alt=""
                src="/group-1000001407.svg"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.instanceInner}
                  alt=""
                  src="/polygon-3.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.subjectParent}>
            <div className={styles.email}>Subject:</div>
            <div className={styles.div}>Property Update</div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div
              className={styles.keilGlass}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed porttitor tincidunt est amet enim. Quis ac sagittis, vulputate at amet facilisi dignissim integer. Suspendisse pharetra integer scelerisque `}</div>
            <div className={styles.frameParent7}>
              <div className={styles.markerPenParent}>
                <img
                  className={styles.markerPenIcon}
                  alt=""
                  src="/marker-pen.svg"
                />
                <img className={styles.deleteIcon} alt="" src="/delete.svg" />
              </div>
              <div className={styles.tagbuttonParent}>
                <div className={styles.tagbutton}>
                  <div className={styles.email}>#VendorReport</div>
                </div>
                <div className={styles.tagbutton1}>
                  <div className={styles.email}>#Internal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.internalNotes}>
          <div className={styles.frameParent6}>
            <div className={styles.jun453pmParent}>
              <div className={styles.div}>17 Jun (4:53pm)</div>
              <div className={styles.addedByKiel}>Added by Kiel Glass</div>
              <div className={styles.iconlylightOutlinelocationGroup}>
                <img
                  className={styles.timeIcon}
                  alt=""
                  src="/iconlylightoutlinelocation2.svg"
                />
                <div className={styles.owenStreetNorth}>
                  56 Owen Street, North Bondi
                </div>
              </div>
            </div>
            <div className={styles.iconlylightOutlinemessageParent}>
              <img
                className={styles.rectangleContainer}
                alt=""
                src="/group-1000001407.svg"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.instanceInner}
                  alt=""
                  src="/polygon-3.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.subjectParent}>
            <div className={styles.email}>Subject:</div>
            <div className={styles.div}>Property Update</div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div
              className={styles.keilGlass}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed porttitor tincidunt est amet enim. Quis ac sagittis, vulputate at amet facilisi dignissim integer. Suspendisse pharetra integer scelerisque `}</div>
            <div className={styles.frameParent7}>
              <div className={styles.markerPenParent}>
                <img
                  className={styles.markerPenIcon}
                  alt=""
                  src="/marker-pen1.svg"
                />
                <img className={styles.deleteIcon} alt="" src="/delete1.svg" />
              </div>
              <div className={styles.tagbuttonParent}>
                <div className={styles.tagbutton2}>
                  <div className={styles.email}>#External</div>
                </div>
                <div className={styles.tagbutton1}>
                  <div className={styles.email}>#Internal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.internalNotes}>
          <div className={styles.frameParent6}>
            <div className={styles.jun453pmParent}>
              <div className={styles.div}>17 Jun (4:53pm)</div>
              <div className={styles.addedByKiel}>Added by Kiel Glass</div>
              <div className={styles.iconlylightOutlinelocationGroup}>
                <img
                  className={styles.timeIcon}
                  alt=""
                  src="/iconlylightoutlinelocation2.svg"
                />
                <div className={styles.owenStreetNorth}>
                  56 Owen Street, North Bondi
                </div>
              </div>
            </div>
            <div className={styles.iconlylightOutlinemessageParent}>
              <img
                className={styles.rectangleContainer}
                alt=""
                src="/group-1000001407.svg"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.instanceInner}
                  alt=""
                  src="/polygon-3.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.subjectParent}>
            <div className={styles.email}>Subject:</div>
            <div className={styles.div}>Property Update</div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div
              className={styles.keilGlass}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed porttitor tincidunt est amet enim. Quis ac sagittis, vulputate at amet facilisi dignissim integer. Suspendisse pharetra integer scelerisque `}</div>
            <div className={styles.frameParent7}>
              <div className={styles.markerPenParent}>
                <img
                  className={styles.markerPenIcon}
                  alt=""
                  src="/marker-pen2.svg"
                />
                <img className={styles.deleteIcon} alt="" src="/delete2.svg" />
              </div>
              <div className={styles.tagbuttonParent}>
                <div className={styles.tagbutton}>
                  <div className={styles.email}>#VendorReport</div>
                </div>
                <div className={styles.tagbutton1}>
                  <div className={styles.email}>#Internal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ownersCard}>
        <div className={styles.headerInner}>
          <form className={styles.frameWrapper}>
            <div className={styles.groupParent2}>
              <img
                className={styles.timeIcon}
                alt=""
                src="/group-1000000912.svg"
              />
              <img
                className={styles.arrowChevronForward}
                alt=""
                src="/arrow-chevron-forward.svg"
              />
              <img
                className={styles.arrowChevronForward1}
                alt=""
                src="/arrow-chevron-forward1.svg"
              />
            </div>
          </form>
        </div>
        <div className={styles.buyerCard}>
          <div className={styles.frameParent12}>
            <div className={styles.instanceParent2}>
              <img
                className={styles.rectangleParent}
                alt=""
                src="/group-1000000886.svg"
              />
              <div className={styles.buyerParent}>
                <div className={styles.div}>Buyer</div>
                <div className={styles.radioButton}>
                  <div className={styles.rectangle} />
                  <img
                    className={styles.ellipseIcon1}
                    alt=""
                    src="/ellipse.svg"
                  />
                </div>
                <div className={styles.owner}>Owner</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.arrowChevronForward2}
                  alt=""
                  src="/arrow-chevron-forward2.svg"
                />
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild13} />
              <img
                className={styles.frameChild14}
                alt=""
                src="/ellipse-146.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent13}>
            <div className={styles.kielGlassWrapper}>
              <div className={styles.kielGlass}>Kiel Glass</div>
            </div>
            <div className={styles.headerInner}>
              <img
                className={styles.timeIcon}
                alt=""
                src="/group-1000000879.svg"
              />
            </div>
            <img
              className={styles.timeIcon}
              alt=""
              src="/group-1000000880.svg"
            />
          </div>
          <div className={styles.frameParent14}>
            <div className={styles.frameParent15}>
              <div className={styles.instanceParent3}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild} />
                  <img
                    className={styles.iconlylightcall}
                    alt=""
                    src="/iconlylightcall2.svg"
                  />
                </div>
                <div className={styles.div}>0412 266 639</div>
              </div>
              <div className={styles.instanceParent3}>
                <img
                  className={styles.rectangleParent}
                  alt=""
                  src="/group-1000001443.svg"
                />
                <div className={styles.div}>kielglass@gmail.com</div>
              </div>
              <div className={styles.instanceParent5}>
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceChild} />
                  <img className={styles.groupIcon1} alt="" src="/group.svg" />
                </div>
                <div className={styles.div}>
                  <p className={styles.rainbowStreet}>177 Rainbow Street</p>
                  <p className={styles.rainbowStreet}>Ranwick NSW 2031</p>
                </div>
              </div>
            </div>
            <div className={styles.actionbuttonParent}>
              <button className={styles.actionbutton}>
                <div className={styles.action}>Action</div>
                <input className={styles.arrowDown2} type="text" />
              </button>
              <div className={styles.relationshipScore}>Relationship Score</div>
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
              <div className={styles.div}>Weak</div>
            </div>
          </div>
          <div className={styles.frameParent16}>
            <div className={styles.activityWrapper}>
              <div className={styles.email}>Property Onwership</div>
            </div>
            <div className={styles.frameParent17}>
              <div className={styles.rectangleParent6}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-4574@2x.png"
                />
                <div className={styles.appraisalWrapper}>
                  <div className={styles.div}>Appraisal</div>
                </div>
              </div>
              <div className={styles.frameParent18}>
                <div className={styles.frameParent19}>
                  <div className={styles.frameParent20}>
                    <div className={styles.bed2Parent}>
                      <img
                        className={styles.bed2Icon}
                        alt=""
                        src="/bed-2.svg"
                      />
                      <div className={styles.div}>5</div>
                    </div>
                    <div className={styles.bed2Parent}>
                      <img
                        className={styles.bed2Icon}
                        alt=""
                        src="/shower-3.svg"
                      />
                      <div className={styles.div}>2</div>
                    </div>
                    <div className={styles.bed2Parent}>
                      <img
                        className={styles.bed2Icon}
                        alt=""
                        src="/parkedcar-2.svg"
                      />
                      <div className={styles.div}>1</div>
                    </div>
                  </div>
                  <div className={styles.div}>
                    <p className={styles.rainbowStreet}>
                      123 Fake Street North
                    </p>
                    <p className={styles.rainbowStreet}>Bondi 2323</p>
                  </div>
                  <div className={styles.frameParent21}>
                    <div className={styles.lastSoldParent}>
                      <div className={styles.div}>Last Sold :</div>
                      <div className={styles.div6}>12/01/2001</div>
                    </div>
                    <div className={styles.lastSoldParent}>
                      <div className={styles.div}>{`Price : `}</div>
                      <div className={styles.div6}>$1250,000</div>
                    </div>
                  </div>
                </div>
                <button className={styles.actionbutton1}>
                  <div className={styles.action}>Action</div>
                  <img
                    className={styles.arrowDown21}
                    alt=""
                    src="/arrow--down-2.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.frameParent22}>
              <div className={styles.rectangleParent6}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-4574@2x.png"
                />
                <div className={styles.ownerWrapper}>
                  <div className={styles.div}>Owner</div>
                </div>
              </div>
              <div className={styles.frameParent23}>
                <div className={styles.frameParent19}>
                  <div className={styles.frameParent20}>
                    <div className={styles.bed2Parent}>
                      <img
                        className={styles.bed2Icon}
                        alt=""
                        src="/bed-21.svg"
                      />
                      <div className={styles.div}>5</div>
                    </div>
                    <div className={styles.bed2Parent}>
                      <img
                        className={styles.bed2Icon}
                        alt=""
                        src="/shower-31.svg"
                      />
                      <div className={styles.div}>2</div>
                    </div>
                    <div className={styles.bed2Parent}>
                      <img
                        className={styles.bed2Icon}
                        alt=""
                        src="/parkedcar-21.svg"
                      />
                      <div className={styles.div}>1</div>
                    </div>
                  </div>
                  <div className={styles.div}>
                    <p className={styles.rainbowStreet}>
                      123 Fake Street North
                    </p>
                    <p className={styles.rainbowStreet}>Bondi 2323</p>
                  </div>
                  <div className={styles.frameParent21}>
                    <div className={styles.lastSoldParent}>
                      <div className={styles.div}>Last Sold :</div>
                      <div className={styles.div6}>12/01/2001</div>
                    </div>
                    <div className={styles.lastSoldParent}>
                      <div className={styles.div}>{`Price : `}</div>
                      <div className={styles.div6}>$1250,000</div>
                    </div>
                  </div>
                </div>
                <button className={styles.actionbutton1}>
                  <div className={styles.action}>Action</div>
                  <img
                    className={styles.arrowDown21}
                    alt=""
                    src="/arrow--down-2.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.instanceParent6}>
              <div className={styles.activityParent}>
                <div className={styles.email}>Live Activity Feed</div>
                <img
                  className={styles.activityFeedFilter}
                  alt=""
                  src="/activity-feed-filter.svg"
                />
              </div>
              <div className={styles.today}>Today</div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild19}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.frameChild20}
                    alt=""
                    src="/group-1000001431.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.arrowChevronForward1}
                    alt=""
                    src="/group-10000014311.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.arrowChevronForward1}
                    alt=""
                    src="/group-10000014312.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.arrowChevronForward1}
                    alt=""
                    src="/group-10000014313.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.arrowChevronForward1}
                    alt=""
                    src="/group-10000014314.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.arrowChevronForward1}
                    alt=""
                    src="/group-10000014315.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.headerInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild22}
                    alt=""
                    src="/vector-362.svg"
                  />
                  <img
                    className={styles.arrowChevronForward1}
                    alt=""
                    src="/group-10000014316.svg"
                  />
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/vector-361.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.markerPenParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.frameParent29}>
                    <div className={styles.kielGlassContainer}>
                      <div className={styles.kg}>Kiel Glass</div>
                    </div>
                    <div className={styles.viewedPropertyListingWrapper}>
                      <div className={styles.div}>Viewed property listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pmWrapper}>
                  <div className={styles.div}>{`2:12pm `}</div>
                </div>
              </div>
            </div>
            <div className={styles.instanceParent7}>
              <div className={styles.feedbackWrapper}>
                <div className={styles.feedback}>Feedback</div>
              </div>
              <div className={styles.actionbutton3}>
                <div className={styles.email}>Action</div>
                <img
                  className={styles.arrowDown21}
                  alt=""
                  src="/arrow--down-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboardContactOw;
