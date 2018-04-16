import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Pure from './Pure'
import {
  changeWeatherTabAction,
  hideDatePickerAction,
  showDatePickerAction,
  getPublicHolidayAction,
  showTimePickerAction,
  hideTimePickerAction,
  selectTimeFromAction,
  selectTimeToAction,
  filterTimeToArrayAction,
  filterTimeFromArrayAction,
  getTimeTagAction,
  getBikeUsageTopLocationsActionSaga,
  toggleWidgetOpenStatusAction,
  showErrorAction,
  resetWeatherCalendarAction,
  clickDateFromWeatherAction,
  clickDateToWeatherAction
} from 'models/dashboard'

// s function
const s = state => ({
  currentWeatherTab: state.dashboard.currentWeatherTab,
  bikeUsageTopLocationsArray: state.dashboard.bikeUsageTopLocationsArray,
  isLoading: state.dashboard.isLoading,
  showErrorText: state.dashboard.showErrorText,
  showDatePicker: state.dashboard.showDatePicker,
  currentDateSelection: state.dashboard.currentDateSelection,
  isTimePickerShown: state.dashboard.isTimePickerShown,
  timeFrom: state.dashboard.timeFrom,
  timeTo: state.dashboard.timeTo,
  totalTimeArray: state.dashboard.totalTimeArray,
  timeFromArray: state.dashboard.timeFromArray,
  timeToArray: state.dashboard.timeToArray,
  timeTagName: state.dashboard.timeTagName,
  isAnyWidgetOpenCurrently: state.dashboard.isAnyWidgetOpenCurrently,
  fromDateWeather: state.dashboard.fromDateWeather,
  toDateWeather: state.dashboard.toDateWeather,
  enteredToWeather: state.dashboard.enteredToWeather
})

// d function
const d = dispatch => ({
  changeWeatherTabAction: bindActionCreators(changeWeatherTabAction, dispatch),
  showDatePickerAction: bindActionCreators(showDatePickerAction, dispatch),
  hideDatePickerAction: bindActionCreators(hideDatePickerAction, dispatch),
  getPublicHolidayAction: bindActionCreators(getPublicHolidayAction, dispatch),
  showTimePickerAction: bindActionCreators(showTimePickerAction, dispatch),
  hideTimePickerAction: bindActionCreators(hideTimePickerAction, dispatch),
  selectTimeFromAction: bindActionCreators(selectTimeFromAction, dispatch),
  selectTimeToAction: bindActionCreators(selectTimeToAction, dispatch),
  filterTimeToArrayAction: bindActionCreators(filterTimeToArrayAction, dispatch),
  filterTimeFromArrayAction: bindActionCreators(filterTimeFromArrayAction, dispatch),
  getTimeTagAction: bindActionCreators(getTimeTagAction, dispatch),
  toggleWidgetOpenStatusAction: bindActionCreators(toggleWidgetOpenStatusAction, dispatch),
  showErrorAction: bindActionCreators(showErrorAction, dispatch),
  getBikeUsageTopLocationsActionSaga: bindActionCreators(getBikeUsageTopLocationsActionSaga, dispatch),
  resetWeatherCalendarAction: bindActionCreators(resetWeatherCalendarAction, dispatch),
  clickDateFromWeatherAction: bindActionCreators(clickDateFromWeatherAction, dispatch),
  clickDateToWeatherAction: bindActionCreators(clickDateToWeatherAction, dispatch)
})

export default withRouter(connect(s, d)(Pure))
