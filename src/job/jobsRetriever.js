import {generateJobs, generateJob} from './jobGenerator';

export const getAllJobs = () =>
	Promise.resolve(generateJobs())

export const getJob = id =>
	Promise.resolve(generateJob(id))
