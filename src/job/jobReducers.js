import {JOB_DETAILS_FETCH, JOB_DETAILS_RECEIVE, JOB_SELECTED, JOBS_FETCH, JOBS_RECEIVE} from './jobActionsAliases'
import {combineReducers} from 'redux'

const selectedJob = (state = 0, action) => {
	switch (action.type) {
		case JOB_SELECTED:
			return action.jobId
		default:
			return state
	}
}

const jobDetails = (state = {isFetching: false}, action) => {
	switch (action.type) {
		case JOB_DETAILS_FETCH:
			return {...state, isFetching: true}
		case JOB_DETAILS_RECEIVE:
			return {...state, isFetching: false, jobDetails: action.jobDetails}
		default:
			return state
	}
}

const jobDetailsById = (state = {}, action) => {
	switch (action.type) {
		case JOB_DETAILS_FETCH:
		case JOB_DETAILS_RECEIVE:
			return {...state, [action.jobId]: jobDetails(state[action.jobId], action)}
		default:
			return state
	}
}
export const jobDetailsReducer = combineReducers({selectedJob, jobDetailsById})

export const jobsReducer = (state = {isFetching: false, items: []}, action) => {
	switch (action.type) {
		case JOBS_FETCH:
			return {...state, isFetching: true}
		case JOBS_RECEIVE:
			return {...state, isFetching: false, items: action.jobs}
		default:
			return state
	}
}