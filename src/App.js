import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/normalize.css";
import "./css/main.css";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdayList: [
        {
          name: "Tyrion Lannister",
          birthday: "12/02/1978",
        },
        {
          name: "Tyrion Lannister",
          birthday: "12/02/1978",
        },
        {
          name: "Tyrion Lannister",
          birthday: "12/02/1978",
        },
        {
          name: "Tyrion Lannister",
          birthday: "12/02/1978",
        },
        {
          name: "Tyrion Lannister",
          birthday: "12/02/1978",
        },
        {
          name: "Cersei Lannister",
          birthday: "11/30/1975",
        },
        {
          name: "Daenerys Targaryen",
          birthday: "11/24/1991",
        },
        {
          name: "Arya Stark",
          birthday: "11/25/1996",
        },
        {
          name: "Jon Snow",
          birthday: "12/03/1989",
        },
        {
          name: "Sansa Stark",
          birthday: "15/08/1992",
        },
        {
          name: "Jorah Mormont",
          birthday: "12/16/1968",
        },
        {
          name: "Jaime Lannister",
          birthday: "12/06/1975",
        },
        {
          name: "Sandor Clegane",
          birthday: "11/07/1969",
        },
        {
          name: "Tywin Lannister",
          birthday: "10/12/1951",
        },
        {
          name: "Theon Greyjoy",
          birthday: "12/31/1989",
        },
        {
          name: "Samwell Tarly",
          birthday: "12/07/1990",
        },
        {
          name: "Joffrey Baratheon",
          birthday: "06/12/1992",
        },
        {
          name: "Catelyn Stark",
          birthday: "12/03/1962",
        },
        {
          name: "Bran Stark",
          birthday: "12/02/1995",
        },
        {
          name: "Petyr Baelish",
          birthday: "11/20/1974",
        },
        {
          name: "Robb Stark",
          birthday: "11/28/1986",
        },
        {
          name: "Brienne of Tarth",
          birthday: "11/27/1985",
        },
        {
          name: "Margaery Tyrell",
          birthday: "12/02/1989",
        },
        {
          name: "Stannis Baratheon",
          birthday: "09/14/1971",
        },
        {
          name: "Davos Seaworth",
          birthday: "02/13/1973",
        },
        {
          name: "Tormund Giantsbane",
          birthday: "12/14/1974",
        },
        {
          name: "Jeor Mormont",
          birthday: "11/01/1955",
        },
        {
          name: "Eddard Stark",
          birthday: "12/02/1963",
        },
        {
          name: "Khal Drogo",
          birthday: "12/05/1980",
        },
        {
          name: "Ramsay Bolton",
          birthday: "12/05/1976",
        },
        {
          name: "Robert Baratheon",
          birthday: "12/02/1965",
        },
        {
          name: "Daario Naharis",
          birthday: "12/02/1985",
        },
        {
          name: "Viserys Targaryen",
          birthday: "12/06/1984",
        },
      ],
      input_year: 1978,
      current_year: 1978,
    };
  }
  componentDidMount = () => {
    // this.getBirthdayByDate("");
  };
  onClickUpdate = () => {
    if(this.state.input_year){
      this.setState({ current_year: this.state.input_year });
    }
  };
  renderBirthday = () => {
    return (
      <ul className="calendar clearfix js-calendar">
        {this.getBirthdayByDate(1,'mon')}
        {this.getBirthdayByDate(2, 'tue')}
        {this.getBirthdayByDate(3, 'wed')}
        {this.getBirthdayByDate(4, 'thu')}
        {this.getBirthdayByDate(5, 'fri')}
        {this.getBirthdayByDate(6, 'sat')}
        {this.getBirthdayByDate(0, 'sun')}
      </ul>
    );
  };
  getBirthdayByDate = (weekdays, dayName) => {
    const { birthdayList, current_year } = this.state;
    const filteredDates = birthdayList.filter(
      (e) =>
        e.birthday.includes(current_year) &&
        moment(e.birthday, "MM/DD/YYYY").day() === weekdays
    );
    if (filteredDates && filteredDates.length > 0) {
      return (
        <li className="cal__day" data-day={dayName}>
          <div className="day__date"></div>
          <div className="day__people">
          {filteredDates &&
            filteredDates.map((element) => {
              return (
                <div
                  style={{
                    height:
                      100 / Math.ceil(Math.sqrt(filteredDates.length)) + "%",
                    width:
                      100 / Math.ceil(Math.sqrt(filteredDates.length)) + "%",
                  }}
                  className="day__person"
                >
                  {element.name.split(" ")[0].charAt(0) +
                    element.name.split(" ")[1].charAt(0)}
                </div>
              );
            })}
            </div>
            <div className="label-count">{filteredDates.length} Birthday</div>
        </li>
      );
    } else {
      return (
        <li className="cal__day day--empty" data-day={dayName}>
          <div className="day__date"></div>
          <div className="day__people"></div>
          <div className="label-count">No Birthday</div>
        </li>
      );
    }
  };
  render() {
    return (
      <div className="app">
        <h1 className="app__header">Birthday Cal</h1>

        <div className="app__content">
          <div className="intro ">
            <div className="intro__task">
              <p>
                <strong>Birthday Cal</strong> is a week long calendar!
              </p>
              <p>
                Render a card for each day of the week. For a given year, figure
                out whose birthday belongs to which card. Place people's
                initials in the card according to these rules -
              </p>
              <p>
                <ul>
                  <li>Each person must always be rendered as square</li>
                  <li>Use person's initials to label birthdays</li>
                  <li>
                    Order people inside the card based on their age (youngest to
                    oldest)
                  </li>
                  <li>
                    Each square in a card must be of equal size and should fill
                    up as much space in the card as possible
                  </li>
                </ul>
              </p>
              <p>
                <strong>Examples &dash;</strong>
                <img className="intro__example" src="/display-rules.png" />
              </p>
            </div>
            <div className="intro__helpers">
              <p>
                <strong>Submitting your work &dash;</strong>
                <ul>
                  <li>
                    Your submission should be functional within this page - see
                    <a href="#work-area">work area</a>.
                  </li>
                  <li>Write your code in React JS</li>
                  <li>
                    Use
                    <code>day--empty</code> class on
                    <code>.cal__day</code> to render empty calendar dates. Use
                    <code>.day__person</code> to render birthdays. See source.
                  </li>
                  <li>
                    Submit back the completed task as a compressed zip of this
                    git repo with your commits on top. Feel free to share over
                    Dropbox / Email.
                  </li>
                </ul>
              </p>
              <p>
                <strong>Evaluation criteria &dash;</strong>
                <ul>
                  <li>functionality coverage</li>
                  <li>readable and efficient code</li>
                  <li>should handle edge cases</li>
                  <li>maintainability</li>
                </ul>
              </p>
            </div>
          </div>

          <hr className="border-line app__border" />

          <div id="work-area">
            <h1 className="cal__title">Work Area</h1>
            {this.renderBirthday()}
            <div className="app__inputs">
              <textarea
                className="app__txt js-json"
                id="json-input"
                placeholder="Paste your friends list json here."
                value={JSON.stringify(this.state.birthdayList)}
              >
              </textarea>

              <div className="app__actions">
                <label>Year</label>
                <input
                  className="app__input js-year"
                  type="text"
                  value={this.state.input_year}
                  onChange={(e) =>
                    this.setState({ input_year: e.target.value })
                  }
                />
                <a
                  onClick={this.onClickUpdate}
                  className="app__button js-update"
                >
                  Update
                </a>
              </div>
            </div>
          </div>

          <hr className="border-line app__border" />
        </div>
      </div>
    );
  }
}

export default App;
