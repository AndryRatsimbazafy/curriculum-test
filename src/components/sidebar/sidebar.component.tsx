import "./sidebar.css";
import ListItem from "../shared/ListItem/list-item.component";
import { FaListAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaGear } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { PiClipboardText } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import {
  BOARDS,
  BOARD_TYPE,
  TEMPLATES,
} from "../../constants/sidebar.constant";
import { IconContext } from "react-icons";
import { List } from "../../interfaces/list.interface";

interface IProps {}

const SideBar: React.FC<IProps> = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lastSearches, setLastSearches] = useState<List[]>([
    { id: 1, libelle: "Past search 1" },
  ]);

  const handleTextClick = () => {
    setIsSearching(true);
  };

  const handleCloseClick = () => {
    setIsSearching(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleRemoveSearch = (item: List) => {
    const searches = lastSearches.filter(search => search.id !== item.id);
    setLastSearches(searches);
  };

  const handleSearchKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setLastSearches([
        ...lastSearches,
        { id: Math.random(), libelle: event.target.value },
      ]);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-top">
          <div className="logo">
            <img src={"/logo.png"} alt="Logo" className="logo-image" />
            <span className="logo-text">{"Resume"}</span>
          </div>
        </div>
        <div className="sidebar-middle">
          {/* Templates */}
          <ListItem
            key={"templates"}
            icon={
              <FaListAlt
                style={{
                  marginRight: "5px",
                  marginTop: "2px",
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            text="My templates"
            boldText
          />
          {/* Search */}
          {isSearching ? (
            <div className="list-item-edit">
              <input
                className="list-item-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleSearchKeyDown}
                autoFocus
              />
              <span className="list-item-close-icon" onClick={handleCloseClick}>
                &#x2716;
              </span>
            </div>
          ) : (
            <ListItem
              key="search"
              icon={
                <FaSearch
                  style={{
                    marginRight: "5px",
                    marginTop: "2px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              }
              text="Search"
              onClick={handleTextClick}
              boldText
            />
          )}
          {/* Templates list */}
          {TEMPLATES.map((item) => (
            <ListItem
              key={item.id?.toString()}
              icon={
                <IconContext.Provider
                  value={{ color: "#fff220", className: "global-class-name" }}
                >
                  <IoMdStar
                    style={{
                      marginRight: "5px",
                      marginTop: "2px",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                </IconContext.Provider>
              }
              text={item.libelle}
              fontSize="15px"
            />
          ))}
          {/* Recent searches */}
          {lastSearches.map((item) => (
            <ListItem
              key={item.id?.toString()}
              icon={
                <BsClockHistory
                  style={{
                    marginRight: "5px",
                    marginTop: "2px",
                    width: "16px",
                    height: "16px",
                  }}
                />
              }
              text={item.libelle}
              fontSize="15px"
              endIcon={
                <MdDeleteOutline
                  style={{
                    marginRight: "5px",
                    marginTop: "2px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              }
              onClickEndIcon={() => handleRemoveSearch(item)}
            />
          ))}
          {/* Boards */}
          <ListItem
            key="boards"
            icon={
              <PiClipboardText
                style={{
                  marginRight: "5px",
                  marginTop: "2px",
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            endIcon={
              <IoMdAddCircleOutline
                style={{
                  marginRight: "5px",
                  marginTop: "2px",
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            text="My boards"
            boldText
          />
          {BOARDS.map((item) => (
            <ListItem
              key={item.id?.toString()}
              icon={
                <>
                  {item?.type === BOARD_TYPE.SIMPLE ? (
                    <VscFileSubmodule
                      style={{
                        marginRight: "5px",
                        marginTop: "2px",
                        width: "16px",
                        height: "16px",
                      }}
                    />
                  ) : (
                    <MdLock
                      style={{
                        marginRight: "5px",
                        marginTop: "2px",
                        width: "16px",
                        height: "16px",
                      }}
                    />
                  )}
                </>
              }
              text={item.libelle}
              fontSize="15px"
            />
          ))}
        </div>
        <div className="sidebar-bottom">
          <div className="profil">
            <div className="profil-content">
              <img src={"/profil.png"} alt="Logo" className="profil-image" />
              <span className="profil-text">{"John Doe"}</span>
            </div>
            <div className="profil-end-icon">
              <FaGear
                style={{
                  marginRight: "5px",
                  marginTop: "2px",
                  width: "16px",
                  height: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
