import * as R from "ramda"
import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

import {
  billAmountInputMsg
  , tipPercentInputMsg
} from "./update"

const {pre, div, h1, label, input} = hh(h)

function fieldSet(_dispatch, _labelText, _inputValue, _inputMsg) {
  return div([
    label({className: "mw1"}, _labelText),
    input({
      className: "pa2 input-reset ba w-100 mb2"
      , type: "text"
      , value: _inputValue
      , oninput: e => _dispatch(_inputMsg(e.target.value))
    })
  ])
}

function view(_dispatch, _model) {
  return div({className: "mw6 center"}, [
    h1({className: "f2 pv2 bb"}, "Tip Calculator")
    , fieldSet(
      _dispatch
      , "Bill Amount:"
      , _model.billAmount
      , billAmountInputMsg
    )
    , fieldSet(
      _dispatch
      , "Tip Percent:"
      , _model.tipPercent
      , tipPercentInputMsg
    )
    // creates pre-tag for pre-formated text
    , pre(JSON.stringify(_model, null, 2))
  ])
}

export default view;
