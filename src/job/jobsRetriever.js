import {generateJobs, generateJob} from './jobGenerator';

export const getAllJobs = () =>
	Promise.resolve(generateJobs(4))

export const getJob = id =>
	Promise.resolve(generateJob(id))
