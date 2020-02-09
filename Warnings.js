import React from 'react';

import './Planner.js';

/*  Warnings is meant to display warnings for inaccurate or overblown financial inputs.
 
    Warning windows are  inline-block and appear on the same line if thhere is space and on the
    next line if there isn't as shown bellow. See CSS: .WarningWrapper
    
    ---------  ---------
    |       |  |       |
    ---------  ---------
    *          **
    ---------
    |       |
    ---------
    **
    
    The style of individual warnings is like so: 
    
    -------------------
    | ⚠ Warning here |
    -------------------
    *** 
*/

function Warnings(props) {

    return (
        <div className="Warnings">

            {/* Sometimes Returns a Financial Warning, either the expected
                    capital is too small or to big for the quality indicators. 
                 */
                warningsFinances(props.warProps.target)}

            {/* Sometimes Returns a Time Warning, if the expected time is
                    too little to yield effective results, and incurs substantial risk.
                 */
                warningsTime(props.warProps.ending, props.warProps.beginning)}

        </div>
    );
}

function warningsFinances(target) {

    /* Low Target |           No Warning              | High Target | Ultra High Target
                  ^                                   ^             ^
           Finacnes Low End        |          Finances Mid End | Finances High End
    */

    const FinanceLowEnd = 20000;
    const FinanceMidEnd = 500000;
    const FinanceHighEnd = 1000000;

    if (target < FinanceLowEnd && target != '') {
        return (
            <div className="WarningWrapper">
                <h3 className="Warning" style={{ width: 251 }}>
                    &nbsp;⚠ Το κεφάλαιο είναι μικρό **
                    </h3>
            </div>
        )
    } else if (target > FinanceMidEnd && target <= FinanceHighEnd) {
        return (
            <div className="WarningWrapper">
                <h3 className="Warning" style={{ width: 265 }} >
                    &nbsp;⚠ Το κεφάλαιο είναι μεγάλο **
                </h3>
            </div>
        )
    } else if (target > FinanceHighEnd) {
        return (
            <div className="WarningWrapper">
                <h3 className="Warning" style={{ width: 316 }} >
                    &nbsp;⚠ Το κεφάλαιο είναι πολύ μεγάλο **
                </h3>
            </div>
        )
    }
}

function warningsTime(ending, beginning) {

    /* Ultra Low Time | Low Time |                       No Warning          
                      ^          ^          
              Times Low End | Time Mid End
    */

    let period = ending - beginning
    const TimeLowEnd = 8;
    const TimeMidEnd = 15;
    

    if (beginning != '' && ending != '') {
        if (period > 0) {
            if (period < TimeLowEnd) {
                return (
                    <div className="WarningWrapper">
                        <h3 className="Warning" style={{ width: 397 }} >
                            &nbsp;⚠ Ο χρονικός ορίζοντας είναι πολύ μικρός *
                        </h3>
                    </div>
                )
            } else if (period >= TimeLowEnd && period < TimeMidEnd) {
                return (
                    <div className="WarningWrapper">
                        <h3 className="Warning" style={{ width: 346 }} >
                            &nbsp;⚠ Ο χρονικός ορίζοντας είναι μικρός *
                        </h3>
                    </div>
                )
            }
        }
    }
}


export default Warnings;