import * as R from "ramda"
import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

const {pre, div, h1} = hh(h)

function view(_model) {
  return div({className: "mw6 center"}, [
    h1({className: "f2 pv2 bb"}, "Tip Calculator")

    // creates pre-tag for pre-formated text
    , pre(JSON.stringify(_model, null, 2))    
  ])
}

export default view;
