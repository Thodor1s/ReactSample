import React from 'react';
import './App.js';
import './App.css';
import Dot from './Dot.js';
import Warnings from './Warnings.js';
import Graph from './Graph.js';
import Contact from './Contact.js';
import ToggleButton from 'react-bootstrap/Button';


const ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
              28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
              38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
              58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
              68, 69, 70, 71, 72, 73, 74, 75, 76, 77]


class Planner extends React.Component {

    constructor(props) {
        super(props);
            
        

        this.state = {

            yas: '',
            rea: '',
            cur: '',
            pen: '',
            yae: '',
            tod: 0,
            loa: 0,
            inf: "false",

            mor: "none",
            invmore: "block",


        };
        this.handleYasChange = this.handleYasChange.bind(this);
        this.handleReaChange = this.handleReaChange.bind(this);
        this.handleCurChange = this.handleCurChange.bind(this);
        this.handleYaeChange = this.handleYaeChange.bind(this);
        this.handleTodChange = this.handleTodChange.bind(this);
        this.handleLoaChange = this.handleLoaChange.bind(this);
        this.handleInfChange = this.handleInfChange.bind(this);
        this.DropDown = this.DropDown.bind(this);

    }

    handleYasChange(e) {
        this.setState({
            yas: e.target.value
        });
       
    }
    handleReaChange(e) {
        this.setState({
            rea: e.target.value
        });
    }
    handleCurChange(e) {
        this.setState({
            cur: e.target.value
        });
    }
    handleYaeChange(e) {
        this.setState({
            yae: e.target.value,
        });
    }
    handleTodChange(e) {
        this.setState({
            tod: e.target.value
        });
    }
    handleLoaChange(e) {
        this.setState({
            loa: e.target.value
        });
    }
    handleInfChange(e) {
        this.setState({
            inf: e.target.value
        });
    }


    DropDown() {
        if (this.state.mor == "none") {
            this.setState({
                mor: "block",
                invmore: "none"
            });
        } else {
            this.setState({
                mor: "none",
                invmore: "block"
            });
        }   
    }


    

    revaluation() {

        return 0.04375


    }

    annuity() {

        //     SaveTarget - (Today'sSavings*(1 + interest)^(year@end-year@start)) - Loan
        // S = -------------------------------------------------------------------------
        //                     (1 + interest)^(year@end-year@start) - 1
        //                     ----------------------------------------
        //                                     interest

       
        //return Math.round(((this.state.cur - (this.state.tod * (Math.pow(1 + this.revaluation, this.state.yae - this.state.yas))) - this.state.loa)
        //   / ((Math.pow(1 + this.revaluation, this.state.yae - this.state.yas) - 1) / 0.04375))).toFixed(2)
        return Math.round(this.state.cur / ((Math.pow(1 + this.revaluation(), this.state.yae - this.state.yas) - 1) / this.revaluation())).toFixed(2)
    }

    accumulation(currentyear) {

        //                            (1 + interest)^(year@end-now) - 1
        //  accumilation = annuity *  ---------------------------------
        //                                       interest

        return Math.round(this.annuity * ((Math.pow(1 + this.revaluation(), currentyear - this.state.yas) - 1) / this.revaluation())).toFixed(2)
    }


    render() {
        return (
            <div>

                <div className="Input-text">
                    <form>
                        <h1 className="Txt1">
                            Είμαι&nbsp;
                                <input
                                className="In1"
                                type="text"
                                maxLength="2"
                                value={this.state.yas}
                                onChange={this.handleYasChange}
                            />
                            &nbsp;χρονών.
                        </h1>
                        <h1 className="Txt2">
                            Για να&nbsp;
                                <select
                                className="In2"
                                type="text"
                                maxLength="40"
                                value={this.state.rea}
                                onChange={this.handleReaChange}
                            >

                                <option value="none" selected hidden>&nbsp;</option>
                                <option value="income" className="In2Select">δημιουργήσω ένα μελλοντικό εισόδημα</option>
                                <option value="pension" className="In2Select">ενισχύσω τη σύνταξή μου</option>
                                <option value="business" className="In2Select">ξεκινήσω μία επιχείρηση στο μέλλον</option>
                                <option value="home" className="In2Select">αποκτήσω μία κατοικία</option>
                                <option value="kid" className="In2Select">εξασφαλίσω τις σπουδές του παιδιού μου</option>
                                
                            </select>
                        </h1>
                        <h1 className="Txt3">
                            θα χρειαστώ&nbsp;
                                <input className="In3"
                                type="text"
                                maxLength="8"
                                value={this.state.cur}
                                onChange={this.handleCurChange}
                            />
                            &nbsp;€
                        </h1>
                        <h1 className="Txt4">
                            όταν θα είμαι&nbsp;
                                <input
                                className="In4"
                                type="text"
                                maxLength="2"
                                value={this.state.yae}
                                onChange={this.handleYaeChange}
                            />
                            &nbsp;χρονών.
                        </h1>
                    </form>
                </div>

                
               
                <ToggleButton
                    className="Drop-Down-Button"
                    onClick={this.DropDown}
                    style={{
                        display: this.state.invmore,
                        border: '3px solid #ee964b'
                    }}
                >
                    ▾
                </ToggleButton>
                <ToggleButton
                    className="Drop-Down-Button"
                    onClick={this.DropDown}
                    style={{
                        display: this.state.mor
                    }}
                >
                    ▴
                </ToggleButton>


                <div className="Input-text2" style={{ display: this.state.mor }}>
                    <form>
                        <h1 className="Txt5">
                            Σήμερα θα διαθέσω&nbsp;
                                <input
                                className="In5"
                                type="text"
                                maxLength="8"
                                value={this.state.tod}
                                onChange={this.handleTodChange}
                            />
                            &nbsp;€,
                        </h1>
                        <h1 className="Txt6">
                            τότε θα δανειστώ&nbsp;
                                <input
                                className="In6"
                                type="text"
                                maxLength="8"
                                value={this.state.loa}
                                onChange={this.handleLoaChange}
                            />
                            &nbsp;€,
                        </h1>
                        <h1 className="Txt7">
                            και υπολογίζω με βάση την&nbsp;
                                <select className="In7"
                                type="text"
                                maxLength="8"
                                value={this.state.inf}
                                onChange={this.handleInfChange}
                            >

                            <option value="false" className="In7Select">σημερινή</option>
                            <option value="true" className="In7Select">αυριανή</option>
                           
                            </select>
                        </h1>
                        <h1 className="Txt8">
                            αξία του χρήματος.
                        </h1>
                    </form>
                </div>


                <div style style={{
                    height: 15 //seperator 
                }} />


                <Warnings warProps={{
                    target: this.state.cur,
                    beginning: this.state.yas,
                    ending: this.state.yae
                }} />

                <div style style={{
                    height: 15 //seperator 
                }} />


                <Graph graphProps={{
                    yas: this.state.yas,
                    rea: this.state.rea,
                    cur: this.state.cur,
                    yae: this.state.yae,
                    tod: this.state.tod,
                    loa: this.state.loa,
                    inf: this.state.inf
                }} />

                

                <div
                    style={{ display: this.state.pla }}
                >

                 


                    
                   

                    

                    
                    <Contact contProps={{
                        beginning: this.state.yas,
                        reason: this.state.rea,
                        target: this.state.cur,
                        ending: this.state.yae,
                        initials: this.state.tod,
                        loan: this.state.loa,
                        inflation: this.state.inf
                    }}/>



                </div>

               

            </div>

    
        );
    }
}


export default Planner;