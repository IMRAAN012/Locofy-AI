import styles from "./Feedback.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import NotesTasksFeedback from "./NotesTasksFeedback";
const Feedback = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/group-1000000848.svg"
          />
          <div className={styles.buyerRegister}>Buyer Register</div>
        </div>
        <div className={styles.searchBarParent}>
          <div className={styles.searchBar}>
            <img className={styles.searchIcon} alt="" src="/search1.svg" />
            <div className={styles.searchHere}>Search here</div>
          </div>
          <div className={styles.sortByParent}>
            <div className={styles.buyerRegister}>Sort By :</div>
            <div className={styles.interestedParent}>
              <div className={styles.interested}>Interested</div>
              <img
                className={styles.arrowDown3}
                alt=""
                src="/arrow--down-31.svg"
              />
            </div>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/group-1000001406.svg"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="/group-1000001405.svg"
          />
          <div className={styles.frame}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.listViewParent}>
            <div className={styles.interested}>List View</div>
            <div className={styles.radioButton}>
              <div className={styles.rectangle} />
              <img className={styles.ellipseIcon} alt="" src="/ellipse.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buyersTable}>
        <div className={styles.column}>
          <div className={styles.head}>
            <div className={styles.check1Parent}>
              <div className={styles.check1}>
                <div className={styles.check1Child} />
              </div>
              <div className={styles.selectAll}>Select All</div>
            </div>
            <div className={styles.name}>Name</div>
          </div>
          <div className={styles.row}>
            <div className={styles.check1Group}>
              <div className={styles.check1}>
                <div className={styles.check1Child} />
              </div>
              <div className={styles.instanceGroup}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent}>
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
                <div className={styles.keilGlassParent}>
                  <div className={styles.interested}>Keil Glass</div>
                  <img
                    className={styles.arrowDown3}
                    alt=""
                    src="/arrow--down-32.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.check1Group}>
              <div className={styles.check1}>
                <div className={styles.check1Child} />
              </div>
              <div className={styles.instanceGroup}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent}>
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
                <div className={styles.keilGlassParent}>
                  <div className={styles.interested}>Keil Glass</div>
                  <img
                    className={styles.arrowDown3}
                    alt=""
                    src="/arrow--down-32.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.check1Group}>
              <div className={styles.check1}>
                <div className={styles.check1Child} />
              </div>
              <div className={styles.instanceGroup}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent}>
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
                <div className={styles.keilGlassParent}>
                  <div className={styles.interested}>Keil Glass</div>
                  <img
                    className={styles.arrowDown3}
                    alt=""
                    src="/arrow--down-32.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.head1}>
            <div className={styles.name}>Contact</div>
          </div>
          <div className={styles.row}>
            <div className={styles.instanceParent2}>
              <img
                className={styles.rectangleParent}
                alt=""
                src="/group-10000013811.svg"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.iconlylightcall}
                  alt=""
                  src="/iconlylightcall1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.instanceParent2}>
              <img
                className={styles.rectangleParent}
                alt=""
                src="/group-10000013811.svg"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.iconlylightcall}
                  alt=""
                  src="/iconlylightcall1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.instanceParent2}>
              <img
                className={styles.rectangleParent}
                alt=""
                src="/group-10000013811.svg"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <img
                  className={styles.iconlylightcall}
                  alt=""
                  src="/iconlylightcall1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.head2}>
            <div className={styles.buyerReadiness}>Buyer Readiness</div>
          </div>
          <div className={styles.row6}>
            <div className={styles.rowInner}>
              <div className={styles.instanceWrapper}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.instanceChild1} />
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild1} />
                    <div className={styles.div}>75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row6}>
            <div className={styles.rowInner}>
              <div className={styles.instanceWrapper}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.instanceChild1} />
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild1} />
                    <div className={styles.div}>75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row6}>
            <div className={styles.rowInner}>
              <div className={styles.instanceWrapper}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.instanceChild1} />
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild1} />
                    <div className={styles.div}>75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column3}>
          <div className={styles.head3}>
            <div className={styles.name}>Status</div>
          </div>
          <div className={styles.row}>
            <div className={styles.iconlylightOutlinepaperParent}>
              <img
                className={styles.iconlylightOutlinepaper}
                alt=""
                src="/iconlylightoutlinepaper1.svg"
              />
              <div className={styles.w}>66w</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.iconlylightOutlinepaperParent}>
              <img
                className={styles.iconlylightOutlinepaper}
                alt=""
                src="/iconlylightoutlinepaper1.svg"
              />
              <div className={styles.w}>66w</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.iconlylightOutlinepaperParent}>
              <img
                className={styles.iconlylightOutlinepaper}
                alt=""
                src="/iconlylightoutlinepaper1.svg"
              />
              <div className={styles.w}>66w</div>
            </div>
          </div>
        </div>
        <div className={styles.column4}>
          <div className={styles.head3}>
            <div className={styles.name}>Offer</div>
          </div>
          <div className={styles.row}>
            <div className={styles.parent}>
              <div className={styles.interested}>$2,250,000</div>
              <div className={styles.conditonal}>
                <div className={styles.conditional}>conditional</div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.parent}>
              <div className={styles.interested}>$2,250,000</div>
              <div className={styles.conditonal}>
                <div className={styles.conditional}>conditional</div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.parent}>
              <div className={styles.interested}>$2,250,000</div>
              <div className={styles.conditonal}>
                <div className={styles.conditional}>conditional</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column4}>
          <div className={styles.head5}>
            <div className={styles.numberOfOffers}>Number of Offers</div>
          </div>
          <div className={styles.row15}>
            <div className={styles.wrapper}>
              <div className={styles.interested}>5</div>
            </div>
          </div>
          <div className={styles.row15}>
            <div className={styles.wrapper}>
              <div className={styles.interested}>5</div>
            </div>
          </div>
          <div className={styles.row15}>
            <div className={styles.wrapper}>
              <div className={styles.interested}>5</div>
            </div>
          </div>
        </div>
        <div className={styles.column6}>
          <div className={styles.head3}>
            <div className={styles.propertyRatings}>Property Ratings</div>
          </div>
          <div className={styles.row18}>
            <div className={styles.parent1}>
              <div className={styles.div9}>9</div>
              <img
                className={styles.instanceChild4}
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className={styles.instanceChild5}
                alt=""
                src="/ellipse-21.svg"
              />
            </div>
          </div>
          <div className={styles.row18}>
            <div className={styles.parent1}>
              <div className={styles.div9}>9</div>
              <img
                className={styles.instanceChild4}
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className={styles.instanceChild5}
                alt=""
                src="/ellipse-21.svg"
              />
            </div>
          </div>
          <div className={styles.row18}>
            <div className={styles.parent1}>
              <div className={styles.div9}>9</div>
              <img
                className={styles.instanceChild4}
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className={styles.instanceChild5}
                alt=""
                src="/ellipse-21.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.column7}>
          <div className={styles.head1}>
            <div className={styles.name}>EXP</div>
          </div>
          <div className={styles.row21}>
            <div className={styles.iconlyboldprofileParent}>
              <img
                className={styles.iconlyboldprofile}
                alt=""
                src="/iconlyboldprofile.svg"
              />
              <img
                className={styles.frameChild4}
                alt=""
                src="/group-1000001416.svg"
              />
            </div>
          </div>
          <div className={styles.row21}>
            <div className={styles.iconlyboldprofileParent}>
              <img
                className={styles.iconlyboldprofile}
                alt=""
                src="/iconlyboldprofile.svg"
              />
              <img
                className={styles.frameChild4}
                alt=""
                src="/group-1000001416.svg"
              />
            </div>
          </div>
          <div className={styles.row21}>
            <div className={styles.iconlyboldprofileParent}>
              <img
                className={styles.iconlyboldprofile}
                alt=""
                src="/iconlyboldprofile.svg"
              />
              <img
                className={styles.frameChild4}
                alt=""
                src="/group-1000001416.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.column8}>
          <div className={styles.head8}>
            <div className={styles.interested}>Profile</div>
          </div>
          <div className={styles.row18}>
            <div className={styles.interested}>FHB</div>
          </div>
          <div className={styles.row18}>
            <div className={styles.interested}>FHB</div>
          </div>
          <div className={styles.row18}>
            <div className={styles.interested}>FHB</div>
          </div>
        </div>
        <div className={styles.column9}>
          <div className={styles.head9}>
            <div className={styles.dfdfs}> DFDFS</div>
          </div>
          <div className={styles.row27}>
            <div className={styles.alert11Parent}>
              <img className={styles.alert11} alt="" src="/alert-1-11.svg" />
              <div className={styles.offerRec}>Offer Rec.</div>
            </div>
          </div>
          <div className={styles.row27}>
            <div className={styles.alert11Parent}>
              <img className={styles.alert11} alt="" src="/alert-1-12.svg" />
              <div className={styles.offerRec}>Offer Rec.</div>
            </div>
          </div>
          <div className={styles.row27}>
            <div className={styles.alert11Parent}>
              <img className={styles.alert11} alt="" src="/alert-1-13.svg" />
              <div className={styles.offerRec}>Offer Rec.</div>
            </div>
          </div>
        </div>
        <div className={styles.column10}>
          <div className={styles.head3}>
            <div className={styles.dfdfs}>Actions Required</div>
          </div>
          <div className={styles.row30}>
            <div className={styles.savebuttonParent}>
              <button
                onClick={() => setModalIsOpen(true)}
                className={styles.savebutton}
              >
                <div className={styles.save}>Feedback</div>
              </button>
              <Modal
                // data-backdrop="false"
                isOpen={modalIsOpen}
                className={styles.ReactModalopen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                  overlay: {
                    zIndex: 100,
                    backgroundColor: "rgba(70, 70, 70, 0.5)",
                   
                  },
                }}
                // shouldCloseOnOverlayClick={false}
              >
                <NotesTasksFeedback />
              </Modal>
              <div className={styles.actionbutton}>
                <div className={styles.buyerRegister}>Action</div>
                <img
                  className={styles.arrowDown2}
                  alt=""
                  src="/arrow--down-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.row30}>
            <div className={styles.savebuttonParent}>
              <button className={styles.savebutton}>
                <div className={styles.save}>Feedback</div>
              </button>
              <div className={styles.actionbutton}>
                <div className={styles.buyerRegister}>Action</div>
                <img
                  className={styles.arrowDown2}
                  alt=""
                  src="/arrow--down-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.row30}>
            <div className={styles.savebuttonParent}>
              <button className={styles.savebutton}>
                <div className={styles.save}>Feedback</div>
              </button>
              <div className={styles.actionbutton}>
                <div className={styles.buyerRegister}>Action</div>
                <img
                  className={styles.arrowDown2}
                  alt=""
                  src="/arrow--down-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
