import * as R from "ramda"

const MSGS = {
  BILL_AMOUNT_INPUT: "BILL_AMOUNT_INPUT"
  , TIP_PERCENT_INPUT: "TIP_PERCENT_INPUT"
}

export function billAmountInputMsg(_billAmount) {
  return {
    // get type
    type: MSGS.BILL_AMOUNT_INPUT
    // set billAmount
    , billAmount: _billAmount
  }
}

export function tipPercentInputMsg(_tipPercent) {
  return {
    // get type
    type: MSGS.TIP_PERCENT_INPUT
    // set billAmount
    , tipPercent: _tipPercent
  }
}

function update(_msg, _model) {
  // return the model with new property values
  if (_msg.type === "BILL_AMOUNT_INPUT") {
    const _billAmount = R.compose(
      R.defaultTo(0)
      , parseInt
    )(_msg.billAmount)
    const _tipAmount = (_billAmount * formatTipPercent(_model.tipPercent))
    const _totalAmount = (_billAmount + _tipAmount)
    return ({
      ..._model
      , billAmount: _billAmount
      , tipAmount: _tipAmount
      , totalAmount: _totalAmount
    })
  }
  if (_msg.type === "TIP_PERCENT_INPUT") {
    const _tipPercent = R.compose(
      R.defaultTo(0)
      , parseInt
    )(_msg.tipPercent)
    const _tipAmount = (_model.billAmount * formatTipPercent(_tipPercent))
    const _totalAmount = (_model.billAmount + _tipAmount)
    return {
      ..._model
      , tipPercent: _tipPercent
      , tipAmount: _tipAmount
      , totalAmount: _totalAmount
    }
  }
}

// helper fns
function formatTipPercent(_tip) {
  return (_tip / 100)
}

export default update;
